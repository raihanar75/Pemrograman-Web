import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, FlatList } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <Image source={contact.photo} style={styles.contactPhoto} />
      <Text style={styles.detail}>Nama: {contact.name}</Text>
      <Text style={styles.detail}>No.Telepon: {contact.phone}</Text>
      <Text style={styles.detail}>Alamat: {contact.alamat}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} style={styles.goBackButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  contactPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  goBackButton: {
    marginTop: 20,
    backgroundColor: '#ccc', 
    borderRadius: 5,
    padding: 10, 
  },
});

export default Detail;
