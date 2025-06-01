// App.js

import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/components/AddCountry';
import Countries from './src/components/Countries';
import Country from './src/components/Country';
import { colors } from './src/theme';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/**
 * CitiesStackScreen wraps the Cities list + City detail screens:
 */
function CitiesStackScreen({ navigation, route, cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities
            {...props}
            cities={cities}
            addCity={addCity}
            addLocation={addLocation}
          />
        )}
        options={{ title: 'Cities' }}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City {...props} cities={cities} addLocation={addLocation} />
        )}
        options={({ route }) => ({ title: route.params.city.city })}
      />
    </Stack.Navigator>
  );
}

/**
 * CountriesStackScreen wraps the Countries list + Country detail screens:
 */
function CountriesStackScreen({ navigation, route, countries }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Countries"
        children={(props) => <Countries {...props} countries={countries} />}
        options={{ title: 'Countries' }}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        options={({ route }) => ({ title: route.params.country.name })}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  // Single state block inside the App class:
  state = {
    cities: [],
    countries: [],
  };

  // Add a new city (called from AddCity screen)
  addCity = (city) => {
    this.setState((prev) => ({
      cities: [...prev.cities, { ...city, locations: [] }],
    }));
  };

  // Add a new location into a city (called from City screen)
  addLocation = (location, city) => {
    const idx = this.state.cities.findIndex((c) => c.id === city.id);
    if (idx === -1) return;

    const updatedCity = {
      ...this.state.cities[idx],
      locations: [...this.state.cities[idx].locations, location],
    };
    const newCities = [
      ...this.state.cities.slice(0, idx),
      updatedCity,
      ...this.state.cities.slice(idx + 1),
    ];
    this.setState({ cities: newCities });
  };

  // Add a new country (called from AddCountry screen)
  addCountry = (country) => {
    this.setState((prev) => ({
      countries: [...prev.countries, country],
    }));
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/** 1) CitiesNav Tab (stack of Cities → City) */}
          <Tab.Screen
            name="CitiesNav"
            options={{ title: 'Cities' }}
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />

          {/** 2) AddCity Tab (just the AddCity screen) */}
          <Tab.Screen
            name="AddCity"
            options={{ title: 'Add City' }}
            children={(props) => <AddCity {...props} addCity={this.addCity} />}
          />

          {/** 3) AddCountry Tab (just the AddCountry screen) */}
          <Tab.Screen
            name="AddCountry"
            options={{ title: 'Add Country' }}
            children={(props) => <AddCountry {...props} addCountry={this.addCountry} />}
          />

          {/** 4) CountriesNav Tab (stack of Countries → Country) */}
          <Tab.Screen
            name="CountriesNav"
            options={{ title: 'Countries' }}
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
              />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
