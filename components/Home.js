import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'Raihan Aulia Rahman', phone: '083818015271', alamat: 'Kp.Cikujang RT.03/RW.13', photo: require('../assets/Raihan.jpg') },
  { id: '2', name: 'Muhammad Fadhil Abdillah', phone: '081935176640', alamat: 'Jl.Pelabuan 2', photo: require('../assets/Fadhil.jpg') },
  { id: '3', name: 'Raditya Bagja Saputra', phone: '089514750080', alamat: 'Jl.Caringin Ngumbang', photo: require('../assets/Raditya.jpg') },
  { id: '4', name: 'Faisal Triaputra', phone: '081280230924', alamat: 'Kp.Cibarombok No.10', photo: require('../assets/Faisal.jpeg') },
  { id: '5', name: 'Rifaldi Muhamad Arya Pasha', phone: '081287624263', alamat: 'Kp.Inggris', photo: require('../assets/Rifaldi.jpg') },
  { id: '6', name: 'Dani Akhmad Maulana', phone: '085219971516', alamat: 'Jl.Pelda Suryanta No.07', photo: require('../assets/Dani.jpg') },
  { id: '7', name: 'Muhammad Azril Alfarizi', phone: '081382301081', alamat: 'Kp.Panjalu', photo: require('../assets/Azril.jpeg') },
  { id: '8', name: 'Arman Surahman', phone: '085864037350', alamat: 'Kp.Cikareo', photo: require('../assets/Arman.jpeg') }
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate('Detail', { contact: item })}
          >
            <View style={styles.contactDetails}>
              <Image source={item.photo} style={styles.contactPhoto} />
              <View style={styles.infoContainer}>
                <Text style={styles.contactName}>{item.name}</Text>
              </View>
            </View>
            <Image source={require('../assets/chevron.png')} style={styles.chevron} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 2, 
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10, 
  },
  contactDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  infoContainer: {
    justifyContent: 'center', 
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginBottom: 5, 
  },
  chevron: {
    width: 18,
    height: 18,
    tintColor: '#ccc', 
  },
});

export default Home;
