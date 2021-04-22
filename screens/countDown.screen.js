// import React, { useState, useRef, useEffect, useMemo } from 'react'
// import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

// function CountDownScreen(props) {
//   const [hour, setHour] = useState(props.route.params.hour)
//   const [minute, setMinute] = useState(props.route.params.minute)
//   const [seconds, setSeconds] = useState(props.route.params.seconds)
//   const [isStart, setIsStart] = useState(false)
//   const [isEnd, setIsEnd] = useState(false)
//   const myInterval = useRef()
//   const [button, setButton] = useState()


//   useEffect(() => {
//     startCount()
//     return () => {
//       clearInterval(myInterval.current)
//     }
//   },[])

//   useMemo(() => {
//     if (!isEnd && isStart) {
//       setButton(
//         <TouchableOpacity
//           style={styles.btnStartStop}
//           onPress={() => {
//             stopCount()
//           }}
//         >
//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             color: '#ffffff'

//           }}>Pause</Text>
//         </TouchableOpacity>
//       )
//     }
//     else if (!isEnd && !isStart) {
//       setButton(
//         <TouchableOpacity
//           style={styles.btnStartStop}
//           onPress={() => {
//             startCount()
//           }}
//         >
//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             color: '#ffffff'

//           }}>Resume</Text>
//         </TouchableOpacity>
//       )
//     }
//     else{
//       setButton(
//         <TouchableOpacity
//           style={styles.btnStartStop}
//           onPress={() => {
//             props.navigation.goBack()
//           }}
//         >
//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             color: '#ffffff'
//           }}>SetTime</Text>

//         </TouchableOpacity>
//       )
//     }
//   }, [isEnd, isStart])

//   const reducerTime = () => {
//     //nếu giây >0
//     if (seconds > 0) {
//       setSeconds(seconds => seconds - 1)
//     }
//     // nếu giây <=0
//     else {
//       //nếu phút >0
//       if (minute > 0) {
//         setSeconds(59)
//         setMinute(minute =>minute - 1)
//       }
//       //nếu phút <=0
//       else {
//         //nếu giờ >0
//         if (hour > 0) {
//           setSeconds(59)
//           setMinute(59)
//           setHour(hour=>hour - 1)
//         }
//         //nếu giờ <=0
//         else {
//           stopCount()
//           setIsEnd(true)
//         }
//       }
//     }
//   }

//   const startCount = () => {
//     myInterval.current = setInterval(reducerTime, 1000)
//     setIsStart(true)
//   }
//   const stopCount = () => {
//     clearInterval(myInterval.current)
//     setIsStart(false)
//   }


//   return (
//     <SafeAreaView style={styles.container}>

//       <View style={styles.timeContainer}>
//         <Text style={styles.time}>{hour < 10 ? '0' + hour : hour}</Text>
//         <Text style={styles.time}> : </Text>
//         <Text style={styles.time}>{minute < 10 ? '0' + minute : minute}</Text>
//         <Text style={styles.time}> : </Text>
//         <Text style={styles.time}>{seconds < 10 ? '0' + seconds : seconds}</Text>
//       </View>
//       <View style = {styles.btn}>
//         {button}
//       </View>

//     </SafeAreaView>
//   )
// }

// export default CountDownScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   timeContainer: {
//     flexDirection: 'row'
//   },
//   time: {
//     fontSize: 60,
//     fontWeight: 'bold'
//   },
//   btn:{
//     marginTop: 150,
//     borderRadius: 5,
//     height: 50,
//     width: 200,
//   },
//   btnStartStop: {
//     flex:1,
//     borderRadius: 5,
//     backgroundColor: "#0066ff",
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })


import React, { useState, useRef, useEffect, useMemo } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function CountDownScreen(props) {
  const [hour, setHour] = useState(props.route.params.hour)
  const [minute, setMinute] = useState(props.route.params.minute)
  const [seconds, setSeconds] = useState(props.route.params.seconds)
  const [isStart, setIsStart] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const myInterval = useRef()
  const time = useRef([props.route.params.hour, props.route.params.minute, props.route.params.seconds])
  const [button, setButton] = useState()

  useEffect(() => {
    startCount()
    // time.current.forEach(element => {
    //     console.log(element)
    // })
    return () => {
      clearInterval(myInterval.current)
    }
  }, [])

  useEffect(() => {
    setHour(time.current[0])
    setMinute(time.current[1])
    setSeconds(time.current[2])
    console.log(hour + ' ' + minute + ' ' + seconds)
  }, time.current)

  useMemo(() => {
    if (!isEnd && isStart) {
      setButton(
        <TouchableOpacity
          style={styles.btnStartStop}
          onPress={() => {
            stopCount()
          }}
        >
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#ffffff'

          }}>Pause</Text>
        </TouchableOpacity>
      )
    }
    else if (!isEnd && !isStart) {
      setButton(
        <TouchableOpacity
          style={styles.btnStartStop}
          onPress={() => {
            startCount()
          }}
        >
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#ffffff'

          }}>Resume</Text>
        </TouchableOpacity>
      )
    }
    else {
      setButton(
        <TouchableOpacity
          style={styles.btnStartStop}
          onPress={() => {
            props.navigation.goBack()
          }}
        >
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#ffffff'
          }}>SetTime</Text>

        </TouchableOpacity>
      )
    }
  }, [isEnd, isStart])

  const reducerTime = () => {
    //nếu giây >0
    if (time.current[2] > 0) {
      time.current[2] = time.current[2] - 1
    }
    // nếu giây <=0
    else {
      //nếu phút >0
      if (time.current[1] > 0) {
        time.current[2] = 59
        time.current[1] = time.current[1] - 1
      }
      //nếu phút <=0
      else {
        //nếu giờ >0
        if (time.current[0] > 0) {
          time.current[2] = 59
          time.current[1] = 59
          time.current[0] = time.current[0] - 1
        }
        //nếu giờ <=0
        else {
          stopCount()
          setIsEnd(true)
        }
      }
    }
    // time.current.forEach(element => {
    //   console.log(element)
    // })
  }

  const startCount = () => {
    myInterval.current = setInterval(reducerTime, 1000)
    setIsStart(true)
  }

  const stopCount = () => {
    clearInterval(myInterval.current)
    setIsStart(false)
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>{hour < 10 ? '0' + hour : hour}</Text>
        <Text style={styles.time}> : </Text>
        <Text style={styles.time}>{minute < 10 ? '0' + minute : minute}</Text>
        <Text style={styles.time}> : </Text>
        <Text style={styles.time}>{seconds < 10 ? '0' + seconds : seconds}</Text>
      </View>
      <View style={styles.btn}>
        {button}
      </View>

    </SafeAreaView>
  )
}

export default CountDownScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    flexDirection: 'row'
  },
  time: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  btn: {
    marginTop: 150,
    borderRadius: 5,
    height: 50,
    width: 200,
  },
  btnStartStop: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#0066ff",
    alignItems: 'center',
    justifyContent: 'center'
  }
})