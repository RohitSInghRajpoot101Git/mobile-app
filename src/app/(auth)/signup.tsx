import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>SignUp Page</Text>
      <Pressable style={{ padding: 15, backgroundColor: "black" }} onPress={() => router.replace('/(auth)/login')}>
              <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>
    </View>
  );
}