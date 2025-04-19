// Import necessary modules from React and React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

// Define the main App component
const App = () => {
  // Define a state variable to store the user's favorite course input
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // List of core MSCS courses
  const coreCourses = [
    'CS 504 - Operating Systems',
    'CS 506 - Programming Languages',
    'CS 507 - Algorithms',
    'CS 510 - Software Engineering',
    'CS 512 - Advanced Database',
    'CS 513 - Computer Architecture',
    'CS 533 - Computer Networks',
    'CS 547 - Artificial Intelligence',
  ];

  // List of depth of study courses
  const depthCourses = [
    'CS 567 - Advanced Machine Learning',
    'CS 570 - Cloud Computing',
  ];

  // Capstone course
  const capstoneCourse = 'CS 598 - Capstone Project';

  return (
    // ScrollView allows the entire content to be scrollable vertically
    <ScrollView style={styles.container}>
      
      {/* Header with image and title */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/images/icon.png')} 
          style={styles.image} 
        />
        <Text style={styles.title}>MSCS Courses</Text>
      </View>

      {/* Input field for entering favorite course */}
      <Text style={styles.sectionTitle}>Enter your favorite course:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. CS 507"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      {/* Conditionally render user's favorite course if entered */}
      {favoriteCourse ? (
        <Text style={styles.favorite}>Your favorite course: {favoriteCourse}</Text>
      ) : null}

      {/* Display core courses list */}
      <Text style={styles.sectionTitle}>Core Courses:</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>
          • {course}
        </Text>
      ))}

      {/* Display depth of study courses */}
      <Text style={styles.sectionTitle}>Depth of Study Courses:</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>
          • {course}
        </Text>
      ))}

      {/* Display capstone course */}
      <Text style={styles.sectionTitle}>Capstone Course:</Text>
      <Text style={styles.courseText}>• {capstoneCourse}</Text>
    </ScrollView>
  );
};

// Stylesheet for consistent and clean UI design
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: '600',
    color: '#34495e',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  favorite: {
    fontSize: 16,
    marginTop: 10,
    color: '#2980b9',
  },
  courseText: {
    fontSize: 16,
    marginTop: 5,
    color: '#2d3436',
  },
});

// Export the component as default
export default App;
