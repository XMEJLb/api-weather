import { Text, View } from "react-native";
import { s } from "./Home.style";

export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.txt}>Базовый поиск</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text style={s.txt}>Поиск</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text style={s.txt}>Расширенный поиск</Text>
      </View>
    </>
  );
}
