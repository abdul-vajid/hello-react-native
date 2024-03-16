import Home from "@/screen/home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todo App" component={Home} />
    </Stack.Navigator>
  )
}

export default Navigation