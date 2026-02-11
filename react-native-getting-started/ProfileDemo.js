import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.imageShadow}>
            <Image 
              source={require('./assets/ruthmei.jpeg')} 
              style={styles.avatarImage} 
            />
          </View>
          <Text style={styles.userName}>Ruth May P. Regino</Text>
          <Text style={styles.userCourse}>BS Information Systems - 3A</Text>
        </View>

        {/* Info Cards */}
        <View style={styles.card}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.value}>22 Years Old</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Favorite Hobby</Text>
          <Text style={styles.value}>Crocheting</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Bio & Pet Peeves</Text>
          <View style={styles.listContainer}>
            <Text style={styles.bioText}>• Asking questions when instructions are clear.</Text>
            <Text style={styles.bioText}>• Making loud noises while eating.</Text>
            <Text style={styles.bioText}>• Not knowing how to admit mistakes.</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7', 
  },
  scrollContainer: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  imageShadow: {
    shadowColor: '#FFB6C1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 55, 
    borderWidth: 4,
    borderColor: '#FFFFFF', 
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4A4A4A',
    marginTop: 15,
    letterSpacing: -0.5,
  },
  userCourse: {
    fontSize: 13,
    color: '#B0B0B0',
    marginTop: 4,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFB6C1',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  value: {
    fontSize: 16,
    color: '#555',
    fontWeight: '400',
  },
  listContainer: {
    marginTop: 5,
  },
  bioText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 8,
    fontStyle: 'italic',
  },
});