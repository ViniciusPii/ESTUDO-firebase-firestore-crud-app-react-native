/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
  Keyboard,
  Modal,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import firestore from './services/firebase';

const Home = () => {
  const navigation = useNavigation();

  const db = firestore();

  const [name, setName] = useState();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    db.collection('names').onSnapshot((query) => {
      const items = [];
      query.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
      });
      setData(items);
    });
  }, [db]);

  const handleAdd = () => {
    db.collection('names').add({name});
    Keyboard.dismiss();
  };

  const handleDelete = (id) => {
    db.collection('names').doc(id).delete();
  };

  const handleEdit = () => {
    setShow(false);
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      {/* <Modal animated="slide" transparent visible={show}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#2228',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '80%',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Nome"
              value={name}
              onChangeText={(t) => setName(t)}
              style={{
                backgroundColor: '#ccc',
                height: 45,
                marginTop: 20,
                marginBottom: 20,
                width: '90%',
                paddingLeft: 10,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#222',
                height: 45,
                width: '90%',
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleEdit}>
              <Text style={{color: '#fff'}}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
      <Text style={{marginTop: 40, fontSize: 20}}>Cadastre seu Nome</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={(t) => setName(t)}
        style={{
          backgroundColor: '#ccc',
          height: 45,
          marginTop: 20,
          width: '90%',
          paddingLeft: 10,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#222',
          height: 45,
          width: '90%',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleAdd}>
        <Text style={{color: '#fff'}}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20, marginTop: 60}}>Lista de Nomes</Text>
      <FlatList
        style={{width: '90%', marginTop: 10, marginBottom: 20}}
        data={data}
        key={data.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              height: 60,
              backgroundColor: '#ccc',
              marginTop: 10,
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18}}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Edit');
                }}
                style={{backgroundColor: '#fc0', padding: 5, marginRight: 10}}>
                <Text style={{color: '#222'}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={{backgroundColor: '#d00', padding: 5}}>
                <Text style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
