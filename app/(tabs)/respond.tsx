import { View, Text, StyleSheet } from "react-native";

export default function RespondScreen() {
  return (
    <View style={styles.container}>
      <Text>Respond Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});