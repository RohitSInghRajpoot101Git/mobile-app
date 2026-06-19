import { View, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, padding: 12, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, padding: 12, marginBottom: 20 }}
      />

      <Pressable style={{ padding: 15, backgroundColor: "black" }}>
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/signup")}>
        <Text style={{ marginTop: 20 }}>Create Account</Text>
      </Pressable>
    </View>
  );
}
