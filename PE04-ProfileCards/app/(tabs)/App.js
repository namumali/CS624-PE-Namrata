import React, { Component } from "react";
import {StyleSheet, View, Image, Text } from "react-native";

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage} source={require('../../assets/images/user.png')} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>John Doe</Text>
                    <Text style={styles.roleText}>React Native Developer</Text>
                    <Text style={styles.bioText}>
                    John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.
                    </Text>
                </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = "dodgerblue"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardContainer: {
        alignItems: "center",
        borderColor: "black",
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "black",
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    textContainer: {
        padding: 15,
        alignItems: "center"
    },
    nameText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    roleText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 4,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        paddingBottom: 2
    },
    bioText: {
        color: "black",
        fontSize: 14,
        textAlign: "center"
    }
      
});

