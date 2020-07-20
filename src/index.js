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
        style={{width: '90%', marginTop: 10}}
        data={data}
        key={data.id}
        renderItem={({item}) => (
          <View
            style={{
              height: 40,
              backgroundColor: '#ccc',
              marginTop: 10,
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18}}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => {}}
              style={{backgroundColor: '#f00', padding: 5}}>
              <Text style={{color: '#fff'}}>Del</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
