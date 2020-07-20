/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

const App = () => {
  const [data, setData] = useState([
    {id: '1', name: 'Vinicius'},
    {id: '2', name: 'Pii'},
    {id: '3', name: 'Viny'},
  ]);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text style={{marginTop: 40, fontSize: 20}}>Cadastre seu Nome</Text>
      <TextInput
        placeholder="Nome"
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
        onPress={() => {}}>
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
                onPress={() => {}}
                style={{backgroundColor: '#fc0', padding: 5, marginRight: 10}}>
                <Text style={{color: '#222'}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
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

export default App;
