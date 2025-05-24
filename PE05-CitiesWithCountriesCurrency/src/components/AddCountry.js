import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class AddCountry extends Component {
  state = {
    name: '',
    currency: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { name, currency } = this.state;
    if (name === '' || currency === '') {
      alert('Please complete form');
      return;
    }
    const newCountry = { name, currency };
    this.props.addCountry(newCountry);
    this.setState({ name: '', currency: '' }, () => {
      this.props.navigation.navigate('Countries');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Country</Text>
        <TextInput
          placeholder="Country Name"
          onChangeText={(val) => this.onChangeText('name', val)}
          style={styles.input}
          value={this.state.name}
        />
        <TextInput
          placeholder="Currency"
          onChangeText={(val) => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  heading: { fontSize: 24, alignSelf: 'center', marginBottom: 20 },
  input: { margin: 10, backgroundColor: 'white', paddingHorizontal: 8, height: 50 },
  button: { height: 50, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center', margin: 10 },
  buttonText: { color: 'white', fontSize: 18 },
});

export default AddCountry;
