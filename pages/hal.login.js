import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/logo.png'

function halLogin() {
  return (
    <View style={styles.container}>

      <Image source={logo} resizeMode="stretch" style={[styles.logo, {width: 220, height: 55}, {marginBottom: 50}]} />
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa"
        keyboardType="email-address" 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
      />

      <TextInput 
        style={styles.input} 
        placeholder="No Hp" 
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        maxLength={13}
      />

      <TouchableOpacity style={[styles.button, {marginTop: 10}]} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    // width: 100,
    // height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4DB6AC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default halLogin