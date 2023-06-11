import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";
import { ethers } from "ethers";
import { INFURA_API, SMART_CONTRACT_ADDRESS } from "@env";
import { useSelector } from "react-redux";

function Certificates({ navigation }) {
  const contractABI = require("../smartcontract/gcitCertABI.json");
  const [isLoading, setIsLoading] = useState(false);
  const [certificateList, setCertificateList] = useState([]);
  const [gcitCertSmartContract, setgcitCertSmartContract] = useState(null);
  const accountAddress = useSelector(
    (state) => state.metaMaskWallet.accountAddress
  );

  function connectgcitCertSmartContract() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(INFURA_API);
      const contract = new ethers.Contract(
        SMART_CONTRACT_ADDRESS,
        contractABI,
        provider
      );
      setgcitCertSmartContract(contract);
    } catch (err) {
      alert("Smart Contract Connection Failed ");
    }
  }

  async function getgcitCertCertificates() {
    setIsLoading(true);
    try {
      if (gcitCertSmartContract) {
        const certificates = await gcitCertSmartContract.getListOfgcitCert(
          accountAddress
        );
        if (certificates) {
          const jsonArray = [];
          for (const certificate of certificates) {
            // Converting it into json format
            // Order is important so that you know what is there in each index
            // addgcitCert method in smartContract determines the index content
            const jsonCertificate = {
              gcitCertId: certificate[0],
              title: certificate[1],
              issuedOn: certificate[2],
              issuer: certificate[3],
              cgpa: certificate[4].toNumber(),
              start: certificate[5],
              end: certificate[6],
              duration: certificate[7].toNumber(),
            };
            jsonArray.push(jsonCertificate);
          }
          setCertificateList(jsonArray);
        }
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  }

  //connect the smart contract when the account address and private key are available
  //In case if it not available then re run it when it becomes available
  useEffect(() => {
    if (accountAddress) {
      connectgcitCertSmartContract();
    }
  }, [accountAddress]);

  // If the smart contract is connected with the required information then only
  //Access the list of certificates assocaited with particular account
  // Setting the instance of smart contract so that we can use it from other places directly
  useEffect(() => {
    if (gcitCertSmartContract) {
      getgcitCertCertificates();
    }
  }, [gcitCertSmartContract]);

  function handleView(certificate) {
    navigation.navigate("SingleCertificate", certificate); //create the navigation
  }

  return (
    <>
      {isLoading ? (
        <View style={styles.rootContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={styles.rootContainer}>
          {certificateList.length > 0 ? (
            certificateList.map((certificate) => (
              <View
                key={certificate.gcitCertId}
                style={styles.certificateContainer}
              >
                <View style={styles.certificateNameContainer}>
                  <Text>{certificate.title}</Text>
                </View>
                <View style={styles.button}>
                  <Button
                    title="View"
                    color={Colors.secondary}
                    onPress={handleView.bind(this, certificate)}
                  />
                </View>
              </View>
            ))
          ) : (
            <View style={styles.emtpyContainer}>
              <Text style={styles.statusLabel}>
                You don't have any certificate
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </>
  );
}

export default Certificates;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  emtpyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statusLabel: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  certificateContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.backgroundWhite,
    borderTopLeftRadius: 45,
    borderBottomRightRadius: 45,
  },

  certificateNameContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
  },
});
