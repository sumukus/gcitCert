import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";
import Colors from "../constants/Colors";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setAccountAddress, setPrivateKey } from "../store/metaMaskWalletSlice";

function Login({ navigation }) {
  const dispatch = useDispatch();
  const [address, setAddress] = useState(""); // store account address from user
  const [key, setKey] = useState(""); //store private key from user

  function handleConnectMetaMask() {
    try {
      const wallet = new ethers.Wallet(key);
      if (wallet.address === ethers.utils.getAddress(address)) {
        dispatch(setAccountAddress(ethers.utils.getAddress(address)));
        dispatch(setPrivateKey(key));
        setAddress("");
        setKey("");
        navigation.replace("LoginNavigator");
      } else {
        alert("Not able to connect to metamask account");
        setAddress("");
        setKey("");
      }
    } catch (err) {
      setAddress("");
      setKey("");
      alert(err); // Error message in case if the private key is not in valid format
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/gcit_logo.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.label}>Metamask Wallet Account Address</Text>
      <TextInput
        multiline={true}
        style={styles.textInput}
        placeholder="Enter account address"
        onChangeText={(enteredText) => setAddress(enteredText)}
        value={address}
      />
      <Text style={styles.label}>Metamask Wallet Private Key</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter wallet private key"
        onChangeText={(enteredText) => setKey(enteredText)}
        value={key}
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button
          title="Connect Metamask"
          color={Colors.secondary}
          onPress={handleConnectMetaMask}
        />
      </View>
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          Disclaimer: We do not store your private key anywhere. We just use it
          to validate your account and sign the transaction done by you. Use the
          private key of your wallet cautiously. Do not enter to any app which
          you don't trust.
        </Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    marginHorizontal: "5%",
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  button: {
    flexWrap: "wrap",
    alignSelf: "center",
    paddingTop: 10,
  },
  imageContainer: {
    height: 200,
    width: 200,
    alignSelf: "center",
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  warningContainer: {
    backgroundColor: Colors.backgroundGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: "5%",
    marginTop: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  warningText: {
    fontStyle: "italic",
    color: "red",
  },
});
