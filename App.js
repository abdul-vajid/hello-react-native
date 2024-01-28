import { View, Text, Image} from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize: 32, fontWeight: "bold"}}>Hi There!</Text>
      <Image style={{width: 380, height: 500, borderRadius: 20, marginTop: 20}} source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdwallpaperim.com%2Fwp-content%2Fuploads%2F2017%2F08%2F25%2F462707-universe-galaxy-space-stars.jpg&f=1&nofb=1&ipt=3825077d8559411cf0ec952303d98cf2ae501d2009c8bb34c737500763a600e5&ipo=images"}}></Image>
    </View>
  );
}
