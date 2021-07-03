import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.jpg')}
      />
      <Text style={styles.title}>Favourite Desserts</Text>
      <TextInput
        value={food}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food)
          setFood('')
        }}>
        <Text style={{ fontSize: 22, color: 'hotpink' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('Desserts')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to Favourites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 16,
    color: 'beige'
  },
  foodInput: {
    fontSize: 20,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 160,
    height: 160,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});

export default FoodForm;
