import Navigation from "@/navigation/index"
import { NavigationContainer } from "@react-navigation/native"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
        <SafeAreaProvider>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
        </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}