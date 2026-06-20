import { router } from "expo-router";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LandingPageScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Evven</Text>
                <Text style={styles.subtitle}>
                    Split expenses, track balances, and settle up effortlessly.
                </Text>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => router.push("/(auth)/login")}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => router.push("/(auth)/signup")}
                >
                    <Text style={styles.registerText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#faf8f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerButton: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  registerText: {
    fontSize: 16,
    fontWeight: "600",
  },
});