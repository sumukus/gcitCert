import { View, Text, StyleSheet, ScrollView } from "react-native";

function SingleCertificate({ route }) {
  const certificate = route.params;

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{certificate.title}</Text>

      <Text style={styles.label}>gcitCertId: </Text>
      <Text selectable={true}>{certificate.gcitCertId}</Text>
      <View style={styles.cgpaContainer}>
        <Text>
          Start: {certificate.start} End: {certificate.end} Duration:{" "}
          {certificate.duration} years
        </Text>
        <Text>CGPA: {certificate.cgpa}</Text>
      </View>

      <Text style={styles.label}>Issued By:</Text>
      <Text>{certificate.issuer}</Text>
      <Text style={styles.label}>Issued On:</Text>
      <Text>{certificate.issuedOn}</Text>
    </View>
  );
}

export default SingleCertificate;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
  },
  cgpaContainer: {
    paddingTop: 10,
    alignItems: "center",
  },
});
