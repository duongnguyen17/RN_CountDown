import React, { useState } from 'react'
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, Alert, View } from 'react-native'

function SetTimeScreen(props) {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const onSubmit = () => {

    let intHour = parseInt(hour?hour:0)
    let intMinute = parseInt(minute?minute:0)
    let intSeconds = parseInt(seconds?seconds:0)

    if (intSeconds > 59) {
      intMinute += Math.floor(intSeconds / 60)
      intSeconds = intSeconds % 60
    }
    if (intMinute > 59) {
      intHour += Math.floor(intMinute / 60)
      intMinute = intMinute % 60
    }
    if (intHour > 99 || intHour<0 || intMinute < 0 || intSeconds <0) {
      Alert.alert(
        "TIME IS INVALID",
        "time must be less than 100 hours and more than 0",
        [{ text: "OK", onPress: () => { } }]
      )
    } else {
      props.navigation.navigate('CountDownScreen', {
        hour: intHour,
        minute: intMinute,
        seconds: intSeconds
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>

        <View style={styles.input}>
          <TextInput
            placeholder='00'
            style={{ fontSize: 60 }}
            keyboardType='numeric'
            onChangeText={(text) => setHour(text)}
          />
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>h</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder='00'
            style={{ fontSize: 60 }}
            keyboardType='numeric'
            onChangeText={(text) => setMinute(text)}
          />
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>m</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder='00'
            style={{ fontSize: 60 }}
            keyboardType='numeric'
            onChangeText={(text) => setSeconds(text)}
          />
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>s</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnStartStop}
        onPress={()=>{onSubmit()}}
      >
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#ffffff'
        }}>Start</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default SetTimeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStartStop: {
    marginTop: 150,
    backgroundColor: "#0066ff",
    borderRadius: 5,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})