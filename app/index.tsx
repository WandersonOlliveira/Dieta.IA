import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { colors } from "../constants/colors"

export default function Index(){
  return(
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}  
      />

      <Text style={styles.title}>
        Dieta<Text style={{color: colors.white}}>.IA</Text>
      </Text>

      <Text>
        Sua dieta personalizada com inteligência artificial
      </Text>

      <Pressable>
        <Text>Gerar dieta</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,

  }
})