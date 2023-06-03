import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Colors from "../constants/Colors";

const data = require("../assets/data/certificateList.json");

function Certificates({ navigation }) {
  const [certificateList, setCertificateList] = useState([]);
  useEffect(() => {
    setCertificateList(data);
  }, []);
  function hadleView(certificate) {
    navigation.navigate("SingleCertificate", certificate); //create the navigation
  }
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
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
                  onPress={hadleView.bind(this, certificate)}
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
      </View>
    </ScrollView>
  );
}

export default Certificates;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: Colors.background,
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
    backgroundColor: Colors.background,
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
