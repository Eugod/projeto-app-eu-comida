import { useContext } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { formatNumber } from './FormatarValores';

import { MainContext } from '../contexto/MainContext';

export function ListaProdutos({ imagem, nomeProduto, loja, preco }) {

  const {aumentarQtd, vetorProdutos, setVetorProdutos} = useContext(MainContext)

  const navigation = useNavigation();

  const produto = { imagem, nomeProduto, loja, preco };

  const armazenaProdutos = (obj) => {
    setVetorProdutos([...vetorProdutos, obj])
  }


  irParaOCarrinho = () => {
    aumentarQtd(1)

    armazenaProdutos(produto)

    navigation.navigate('Carrinho');
  };

  const valorFormatado = formatNumber(preco);
  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <Image source={{ uri: imagem }} style={styles.img} />

        <View style={styles.infoProduto}>
          <Text style={styles.nomeProduto}>{nomeProduto}</Text>

          <Text style={styles.loja}>{loja}</Text>

          <Text style={styles.valor}>R$ {valorFormatado}</Text>

          <TouchableOpacity style={styles.botao} onPress={irParaOCarrinho}>
            <Text style={styles.txtBotao}>COMPRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  lista: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    height: 200,
    borderColor: 'rgb(196, 196, 196)',
    borderRadius: 5,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
  },

  infoProduto: {
    marginTop: 10,
    marginBottom: 10,
    width: '65%',
  },

  nomeProduto: {
    fontSize: 18,
  },

  loja: {
    color: 'rgb(160, 160, 160)',
  },

  valor: {
    fontWeight: 'bold',
    fontSize: 28,
  },

  botao: {
    width: '65%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 25,
    borderColor: '#f4511e',
    borderWidth: 1,
  },

  txtBotao: {
    color: '#f4511e',
  },
});
