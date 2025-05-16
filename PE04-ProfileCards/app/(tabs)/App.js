import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  FlatList,
  Dimensions,
} from "react-native";

const profileCardColor = "dodgerblue";
const userImage = require("../../assets/images/user.png");
const screenWidth = Dimensions.get("window").width;
const CARD_WIDTH = screenWidth / 2 - 500;
const CARD_HEIGHT = 220;

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0.3),
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.expanded !== this.props.expanded) {
      Animated.timing(this.state.animation, {
        toValue: this.props.expanded ? 1 : 0.3,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }
  }

  render() {
    const { onPress } = this.props;
    const { animation } = this.state;

    const scale = animation.interpolate({
      inputRange: [0.3, 1],
      outputRange: [0.8, 1],
    });

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={[styles.cardContainer, { transform: [{ scale }] }]}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={userImage} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>John Doe</Text>
            <Text style={styles.roleText}>React Native Developer</Text>
            <Text style={styles.bioText}>
              John is a really great JavaScript developer. He loves using JS to
              build React Native applications for iOS and Android.
            </Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class App extends Component {
  state = {
    selectedIndex: null,
  };

  handleCardPress = (index) => {
    this.setState({
      selectedIndex: index === this.state.selectedIndex ? null : index,
    });
  };

  renderItem = ({ item, index }) => (
    <ProfileCard
      key={index}
      expanded={this.state.selectedIndex === index}
      onPress={() => this.handleCardPress(index)}
    />
  );

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={Array.from({ length: 6 })}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: "center",
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardImageContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 12,
    justifyContent: "center",
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  textContainer: {
    padding: 10,
    alignItems: "center",
  },
  nameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  roleText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 2,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 2,
  },
  bioText: {
    color: "black",
    fontSize: 10,
    textAlign: "center",
  },
});
