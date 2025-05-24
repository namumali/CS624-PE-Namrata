# Input

The application collects user input via React Native forms in two primary categories: adding countries and adding cities. In the AddCity section, the user enters a city name along with its country; in the AddCountry section, the user provides a country name and its currency. These inputs are gathered through `TextInput` components and held in the local component state prior to submission. 

# Procedure 

When a user submits a form, the information is passed to the main `App` component via callback functions (`addCity`, `addCountry`). The `App` component refreshes its state arrays (`cities`, `countries`) by incorporating the new entries. For urban areas, it additionally allows for the inclusion of sites inside a city. Navigation is managed via React Navigation utilizing a bottom tab navigator along with a nested stack navigator for specific city screens. 

# Output

The application shows a list of stored cities and nations. Cities are displayed in the Cities tab, whereas nations along with their currencies are listed in the Countries tab. Every list dynamically represents the present condition. 
