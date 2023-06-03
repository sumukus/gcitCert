import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const data = require("../assets/data/profile.json");

function Profile() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    setProfileData(data);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.label}>My Ethereum Wallet Address</Text>
      <Text>{profileData.id}</Text>

      <Text style={styles.label}>My Ether Balance</Text>
      <Text>{profileData.balance}(ether)</Text>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
  },
});
