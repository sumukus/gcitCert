import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { ethers } from "ethers";
import { SMART_CONTRACT_ADDRESS, INFURA_API, CERTIFICATE_ISSUER } from "@env";
import { MD5 } from "crypto-js";

function AddCertificate() {
  const contractABI = require("../smartcontract/gcitCertABI.json");
  const { accountAddress, privateKey } = useSelector(
    (state) => state.metaMaskWallet
  );

  const [userAddress, setUserAddress] = useState("");
  const [title, setTitle] = useState("");
  const [cgpa, setcgpa] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function addgcitCert() {
    try {
      setIsLoading(true);
      const provider = new ethers.providers.JsonRpcProvider(INFURA_API);
      const signer = new ethers.Wallet(privateKey, provider);
      const contract = new ethers.Contract(
        SMART_CONTRACT_ADDRESS,
        contractABI,
        signer
      );
      let date = new Date();
      date = date.toLocaleString();
      const gcitCertId = MD5(date + CERTIFICATE_ISSUER).toString();

      const transaction = await contract.addgcitCert(
        ethers.utils.getAddress(userAddress),
        gcitCertId,
        title,
        date,
        accountAddress,
        parseInt(cgpa),
        startDate,
        endDate,
        parseInt(duration),
        {
          from: accountAddress,
        }
      );
      const response = await transaction.wait();
      if (response.status) {
        Alert.alert(
          "Response From Contract",
          `Successfully added the certificate with transaction hash of ${response.transactionHash}`,
          [
            {
              text: "Ok",
            },
          ]
        );
      } else {
        Alert.alert(
          "Response From Contract",
          `Could not add certificate, return with transaction hash of ${response.transactionHash}`,
          [
            {
              text: "Ok",
            },
          ]
        );
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  }

  function handleSubmit() {
    addgcitCert();
    setUserAddress("");
    setTitle("");
    setcgpa("");
    setDuration("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <ScrollView style={styles.rootContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.label}> User Account Address</Text>
          <TextInput
            multiline={true}
            style={styles.textInput}
            placeholder="Enter address"
            onChangeText={(enteredText) => setUserAddress(enteredText)}
            value={userAddress}
          />
          <Text style={styles.label}> Certificate Title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter certificate title"
            onChangeText={(enteredText) => setTitle(enteredText)}
            value={title}
          />

          <Text style={styles.label}> CGPA</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Enter cgpa value"
            onChangeText={(enteredText) => setcgpa(enteredText)}
            value={cgpa}
          />
          <View style={styles.dateContainer}>
            <View>
              <Text style={styles.label}> Start Date</Text>
              <TextInput
                placeholder="Enter date MM/YYYY"
                style={styles.textInput}
                onChangeText={(enteredText) => setStartDate(enteredText)}
                value={startDate}
              />
            </View>
            <View>
              <Text style={styles.label}>End Date</Text>
              <TextInput
                placeholder="Enter date MM/YYYY"
                style={styles.textInput}
                onChangeText={(enteredText) => setEndDate(enteredText)}
                value={endDate}
              />
            </View>
          </View>

          <Text style={styles.label}> Course Duration</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Enter course duration"
            onChangeText={(enteredText) => setDuration(enteredText)}
            value={duration}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              color={Colors.secondary}
              onPress={handleSubmit}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

export default AddCertificate;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: Colors.background,
  },
  label: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: Colors.backgroundWhite,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignSelf: "center",
    paddingTop: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
