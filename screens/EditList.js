import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import Button from "../components/Button";

const colorList = [
    "blue",
    "teal",
    "green",
    "olive",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blueGray",
    "white",
];

export default ({ navigation, route }) => {
    const [title, setTitle] = useState(route.params.title || "");
    const [color, setColor] = useState(route.params.color || Colors.red);
    const [isValid, setValidity] = useState(true);

    return (
        <View style={styles.container}>
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.label}>Weight</Text>
                    {!isValid && (
                        <Text
                            style={{
                                marginLeft: 4,
                                color: Colors.red,
                                fontSize: 12,
                            }}
                        >
                            * List Name cannot be empty
                        </Text>
                    )}
                </View>
                <TextInput
                    underlineColorAndroid={"transparent"}
                    selectionColor={"transparent"}
                    autoFocus={true}
                    keyboardType='numeric'
                    value={title}
                    onChangeText={(text) => {
                        setTitle(text);
                        setValidity(true);
                    }}
                    placeholder={"New Weight"}
                    maxLength={30}
                    style={styles.input}
                />
            </View>
            <Button
                text="Submit"
                onPress={() => {
                    if (title.length > 1) {
                        route.params.saveChanges({ title, color });
                        navigation.dispatch(CommonActions.goBack());
                    } else {
                        setValidity(false);
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
        justifyContent: "space-between",
    },
    input: {
        color: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 30,
        fontSize: 24,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: Colors.darkGray,
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
});