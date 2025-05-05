import {StyleSheet} from "react-native";

export const Colors = {
    dark : 'black',
    light : 'white'
}

const baseContainerStyles = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
};

const baseBoxStyles = {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
};

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        backgroundColor: Colors.light
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        backgroundColor: Colors.dark
    }
});

export default function getStyleSheet(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}


