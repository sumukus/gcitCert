import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import { ethers } from "ethers";
import { INFURA_API } from "@env";
import { useSelector } from "react-redux";

function Profile({ navigation }) {
  const accountAddress = useSelector(
    (state) => state.metaMaskWallet.accountAddress
  );
  const [balance, setBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getAccountInfo() {
    try {
      setIsLoading(true);
      const provider = new ethers.providers.JsonRpcProvider(INFURA_API);
      if (ethers.utils.isAddress(accountAddress)) {
        const balance = await provider.getBalance(accountAddress);
        setBalance(ethers.utils.formatEther(balance));
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  }

  useEffect(() => {
    getAccountInfo();
  }, [accountAddress, balance]);

  function handleLogout() {
    navigation.replace("Login");
  }

  return (
    <View style={styles.rootContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.label}>My Ethereum Wallet Address</Text>
          <Text selectable={true}>{accountAddress}</Text>
          <Text style={styles.label}>My Ether(s) Balance</Text>
          <Text>ETH: {parseFloat(balance).toFixed(5)}</Text>
        </>
      )}
      <View style={styles.button}>
        <Button
          title="Logout"
          color={Colors.secondary}
          onPress={handleLogout}
        />
      </View>
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
  button: {
    paddingTop: 10,
  },
});
