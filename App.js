// App.js
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Pão Francês',
    price: 'R$ 0,50',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '50g',
    validity: '1 dia',
    image: require('./assets/Pao-Frances-Delix-60g--1-unidade-.jpeg'),
  },
  {
    id: '2',
    name: 'Baguete',
    price: 'R$ 3,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '200g',
    validity: '2 dias',
    image: require('./assets/baguete.jpg'),
  },
  {
    id: '3',
    name: 'Pão de Queijo',
    price: 'R$ 1,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '30g',
    validity: '2 dias',
    image: require('./assets/jpeg.jpg'),
  },
  {
    id: '4',
    name: 'Torta de Frango',
    price: 'R$ 20,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '1kg',
    validity: '3 dias',
    image: require('./assets/torta.jpg'),
  },
  {
    id: '5',
    name: 'Croissant',
    price: 'R$ 4,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '60g',
    validity: '1 dia',
    image: require('./assets/croassant.jpg'),
  },
  {
    id: '6',
    name: 'Bolo de Cenoura',
    price: 'R$ 15,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '500g',
    validity: '4 dias',
    image: require('./assets/bolo cenoura.jpg'),
  },
  {
    id: '7',
    name: 'Coxinha',
    price: 'R$ 2,50',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '100g',
    validity: '1 dia',
    image: require('./assets/coxinha.jpg'),
  },
  {
    id: '8',
    name: 'Esfirra de Carne',
    price: 'R$ 3,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '120g',
    validity: '1 dia',
    image: require('./assets/esfiha.jpg'),
  },
  {
    id: '9',
    name: 'Quiche de Alho Poró',
    price: 'R$ 12,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '250g',
    validity: '2 dias',
    image: require('./assets/paodealho.jpg'),
  },
  {
    id: '10',
    name: 'Torrada',
    price: 'R$ 5,00',
    quantity: '1 pacote',
    unit: 'Pacote',
    weight: '200g',
    validity: '10 dias',
    image: require('./assets/torrada.jpg'),
  },
  {
    id: '11',
    name: 'Pão Integral',
    price: 'R$ 6,00',
    quantity: '1 unidade',
    unit: 'Unidade',
    weight: '400g',
    validity: '3 dias',
    image: require('./assets/integral.jpg'),
  },
  {
    id: '12',
    name: 'Biscoito de Polvilho',
    price: 'R$ 4,00',
    quantity: '1 pacote',
    unit: 'Pacote',
    weight: '150g',
    validity: '15 dias',
    image: require('./assets/polvilho.jpg'),
  },
];

const numColumns = 2;
const itemWidth = Dimensions.get('window').width / numColumns - 20;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Padaria do Negão</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.details}>Quantidade: {item.quantity}</Text>
            <Text style={styles.details}>Peso: {item.weight}</Text>
            <Text style={styles.details}>Validade: {item.validity}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  product: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    width: itemWidth,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
  details: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
