import React, { useState } from 'react'
import MainAppbar from '../components/MainAppbar'
import { StyleSheet,View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function Login() {
    const [FormData, setFormData] = useState({username: '',password: ''})
    const [showError, setShowError] = useState(false)

const validateAndSubmit = () => {
    setShowError(true)
    if (FormData.username.length > 0 && FormData.password.length > 8) {
        setFormData({username: '',password: ''})
        setShowError(false)
    }
}



    return (
      <>
      <MainAppbar title="Login"/>
      <View style={StyleSheet.container}>
        <TextInput label="Username" 
        style={styles.input_field}
        value={FormData.username}
        onChangeText={text => setFormData({...FormData,username: text})}
        error={FormData.username.length===0 && showError}
/>
        <TextInput label="Password"
        style={styles.input_field}
        keyboardType='visible-password'
        value={FormData.password}
        onChangeText={text => setFormData({...FormData,password: text})}
error={FormData.password.length < 8 && showError}
        />

        <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>Submit</Button>
</View>
      </>
    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
justifyContent:  'center',
},
input_field: {
    backgroundColor: '#fcfcfc',
    margin: (16,8,16,8)
},
button: {
    margin: (16,8,0,8)
}
});