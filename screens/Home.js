import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
import VerifyCert from "../components/VerifyCert";
import { Web3Modal, Web3Button, useWeb3Modal } from "@web3modal/react-native";
import { PROJECT_ID } from "@env";

function Home({ navigation }) {
  //walletconnect code
  const projectId = PROJECT_ID;

  const { open, isConnected, provider, address } = useWeb3Modal();

  const providerMetadata = {
    name: "gcitCert dApp",
    description: "A dApp for issuing the certificates by GCIT college",
    url: "https://www.gcit.edu.bt",
    icons: [
      "https://www.gcit.edu.bt/wp-content/uploads/sites/4/2023/03/GCIT_Logo.png",
    ],
  };
  function hadleWalletConnect() {}

  return (
    <View style={styles.rootContainer}>
      <View style={styles.verifyCert}>
        <VerifyCert />
      </View>
      <View style={styles.loginContainer}>
        <Pressable onPress={open}>
          <Text>{isConnected ? "View Account" : "Connect"}</Text>
        </Pressable>
        <Web3Modal projectId={projectId} providerMetadata={providerMetadata} />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  verifyCert: {
    flex: 2,
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
  },
});
