import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

const DashboardScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo(a) ao TAPOKO</Text>
      <Button
        title="Reservar Lugar"
        onPress={() => navigation.navigate('ReservePlace')}
      />
      <Button title="Minhas Reservas" onPress={() => {}} />
      <Button title="Perfil" onPress={() => {}} />
      <Button title="Configurações" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DashboardScreen;
