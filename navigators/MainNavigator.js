import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Colors from "../constants/Colors";
import LoginNavigator from "./LoginNavigator";
import SingleCertificate from "../screens/SingleCertificate";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" children={LoginNavigator} />
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
