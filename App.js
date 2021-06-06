import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import EditList from "./screens/EditList";
import Login from "./screens/Login";
import Colors from "./constants/Colors";
import firebase from "firebase/app";
import "firebase/firestore";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    );
};
const Screens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Weight App" component={Welcome} />
            <Stack.Screen
                name="Edit"
                component={EditList}
                options={({ route }) => {
                    return {
                        title: route.params.title
                            ? `Edit ${route.params.title} list`
                            : "Create new list",
                        headerStyle: {
                            backgroundColor: route.params.color || Colors.blue,
                        },
                        headerTintColor: "white",
                    };
                }}
            />
        </Stack.Navigator>
    );
};
export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if (firebase.auth().currentUser) {
            setIsAuthenticated(true);
        }
        firebase.auth().onAuthStateChanged((user) => {
            console.log("Checking auth state...");
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
    }, []);

    return (
        <NavigationContainer>
            {isAuthenticated ? <Screens /> : <AuthScreens />}
        </NavigationContainer>
    );
}

//const firebaseConfig = YOUR_FIREBASE_CONFIG;
const firebaseConfig = {
  apiKey: "AIzaSyANZ2T8Txl37_0KGQMtsOvTETmzp9Hrscg",
  authDomain: "plant-app-a822f.firebaseapp.com",
  projectId: "plant-app-a822f",
  storageBucket: "plant-app-a822f.appspot.com",
  messagingSenderId: "42990271730",
  appId: "1:42990271730:web:d996764c44ef872673646b",
  measurementId: "G-7MXGKBZ2YH"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
