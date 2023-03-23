import { useContext } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MainContext } from '../contexto/MainContext';

export function BotaoCarrinho() {
  const navigation = useNavigation();

  const {qtd} = useContext(MainContext)

  return (
    <View>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Carrinho')}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: 'https://o.remove.bg/downloads/2f8e015d-6d83-403a-a3e7-30564b060d59/images-removebg-preview.png',
            }}
          />
        </View>
        <View>
          <Text style={styles.txtBotao}>{qtd} itens</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row',
    left: 295,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  txtBotao: {
    color: 'red',
    marginLeft: 5,
  },

  img: {
    width: 30,
    height: 30,
  },
});
