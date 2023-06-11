import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import { useState } from "react";
import { INFURA_API, SMART_CONTRACT_ADDRESS } from "@env";
import { ethers } from "ethers";

function VerifyCert({ contract }) {
  const [userInput, setUserInput] = useState(""); // initialize to empty string
  const [isLoading, setIsLoading] = useState(false); // status bit for spinner
  const contractABI = require("../smartcontract/gcitCertABI.json");

  async function handleVerifygcitCert() {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.JsonRpcProvider(INFURA_API);
      const contract = new ethers.Contract(
        SMART_CONTRACT_ADDRESS,
        contractABI,
        provider
      );
      const status = await contract.verifygcitCert(userInput);
      setIsLoading(false);
      if (status) {
        Alert.alert(
          "Response from Contract",
          `Records found in gcitCert Contract with certificate ID of ${userInput}`,
          [
            {
              text: "Ok",
            },
          ]
        );
      } else {
        Alert.alert(
          "Response from Contract",
          `Records not found in gcitCert Contract with certificate ID of ${userInput}`,
          [
            {
              text: "Ok",
            },
          ]
        );
      }
    } catch (err) {
      alert(err);
    }
    setUserInput("");
  }
  return (
    <View style={styles.rootContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.label}>Enter the gcitCert ID:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter the ID to verify it"
            onChangeText={(input) => setUserInput(input)}
            value={userInput}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Verify gcitCert"
              color={Colors.secondary}
              onPress={handleVerifygcitCert}
            />
          </View>
        </>
      )}
    </View>
  );
}

export default VerifyCert;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  label: {
    color: Colors.text,
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
    marginHorizontal: "5%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexWrap: "wrap",
    alignSelf: "center",
  },
});
