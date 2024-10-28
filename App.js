import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginInput/>
      <StatusBar hidden={true} />
    </View>
  );
}

const LoginInput = () => {
    const [pw, setPw] = useState('');
    const [user, setUser] = useState('');
    const [userType, setUserType] = useState('');
    return (
        <View>
            <Text>User Type:</Text>
            <RNPickerSelect onValueChange={(userTypeText) => setUserType(userTypeText)} items={[
            {label:'Admin',value:'Admin'},
            {label:'Guest',value:'Guest'}
            ]}/>
            <Text>User:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(userText) => setUser(userText)}></TextInput>
            <Text>Password:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(pwText) => setPw(pwText)}></TextInput>
            <TouchableOpacity onPress={() => {
                ToastAndroid.show(`Welcome ${userType} ${user}`,ToastAndroid.SHORT)
            }}><Text>LOG IN</Text></TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
});
