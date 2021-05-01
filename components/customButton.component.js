import React from 'react'

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={styles.btnStartStop}
      onPress={() => {
        props.onPress
      }}
    >
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff'

      }}>{props.title}</Text>
    </TouchableOpacity>
  )
}