/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import firestore from './services/firebase';

const Edit = ({route}) => {
  const {userId, userName} = route.params;

  const navigation = useNavigation();
  const db = firestore();

  const [name, setName] = useState(userName);

  const handleEdit = () => {
    db.collection('names')
      .doc(userId)
      .update({name, timestamp: Date(new Date())});
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
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
        onPress={handleEdit}>
        <Text style={{color: '#fff'}}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Edit;
