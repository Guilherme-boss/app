import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escritório Cast</Text>
      <Text style={styles.appName}>TAPOKO</Text>
      <TextInput style={styles.input} placeholder="Usuário" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <CustomButton
        title="Login"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Text style={styles.link}>Esqueci minha senha?</Text>
      <Text style={styles.link}>Cadastre-se</Text>
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
  },
  appName: {
    fontSize: 18,
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
  link: {
    color: '#0066cc',
    marginTop: 10,
  },
});

export default LoginScreen;
