import { useContext } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { formatNumber } from './componentes/FormatarValores';

import { ProdutosCarrinho } from './componentes/ProdutosCarrinho';

import { MainContext } from './contexto/MainContext';

export function Carrinho() {
  const { total, setTotal, vetorProdutos, setVetorProdutos, somarTotal, zerarQtd } =
    useContext(MainContext);

  const totalFormatado = formatNumber(total);

  const navigation = useNavigation();

  setTotal(somarTotal(vetorProdutos));

  finalizarCompra = () =>{
    setTotal(0);

    setVetorProdutos([]);

    zerarQtd();
    
    navigation.navigate('Home');    
  };

  return (
    <View style={styles.tela}>
      <FlatList
        style={styles.lista}
        data={vetorProdutos}
        renderItem={({ item }) => (
          <ProdutosCarrinho
            nomeProduto={item.nomeProduto}
            loja={item.loja}
            preco={item.preco}
          />
        )}
      />

      <View style={styles.infoCompra}>
        <Text style={styles.txtTotal}>Total do pedido</Text>

        <Text style={styles.total}>R$ {totalFormatado}</Text>

        <TouchableOpacity style={styles.botao} onPress={finalizarCompra}>
          <Text style={styles.txtBotao}>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    height: '100%',
  },

  lista: {
    borderBottomWidth: 1,
    borderBottomColor: '#f4511e',
    height: 10,
  },

  infoCompra: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: 'rgb(220,220,220)',
  },

  txtTotal: {
    color: 'rgb(100, 100, 100)',
    fontSize: 16,
  },

  total: {
    fontWeight: 'bold',
    fontSize: 35,
  },

  botao: {
    width: '65%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 25,
    borderColor: '#f4511e',
    borderWidth: 1,
    justifyContent: 'flex-start',
  },

  txtBotao: {
    color: '#f4511e',
  },
});
