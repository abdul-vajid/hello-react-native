import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';

const Task = ({ title, status }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=> {
    if(status === "completed"){
      setIsChecked(true)
      console.log("Inside if")
    } else {
      console.log("Inside else")
      setIsChecked(false)
    }
  }, [])

  return (
    <View style={styles.container}>
      <CheckBox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? '#4630EB' : undefined}
      />
      <Text style={styles.item} >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#F9F9F9",
    shadowColor: "#888",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2, 
    borderWidth: 1,
    borderColor: "#DDD", 
    borderRadius: 5,
    margin: 3,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 5
  },
  item: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 15,
    color: "black"
  },
  checkbox: {
    alignSelf: 'center',
  }
});

export default Task