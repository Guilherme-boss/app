// src/screens/ReservePlaceScreen.tsx
import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type ReservePlaceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ReservePlace'
>;

type Props = {
  navigation: ReservePlaceScreenNavigationProp;
};

const ReservePlaceScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar Lugar</Text>
      <TextInput style={styles.input} placeholder="Mês" />
      <TextInput style={styles.input} placeholder="Dia" />
      <TextInput style={styles.input} placeholder="Período" />
      <Button title="Confirmar" onPress={() => {}} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ReservePlaceScreen;
