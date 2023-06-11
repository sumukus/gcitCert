import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import LoginNavigator from "./LoginNavigator";
import SingleCertificate from "../screens/SingleCertificate";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background },
        headerShown: false,
        headerStyle: { backgroundColor: Colors.secondary },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginNavigator" children={LoginNavigator} />
      <Stack.Screen
        name="SingleCertificate"
        component={SingleCertificate}
        options={{
          title: "Certificate Details",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
