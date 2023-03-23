import { View, Text, StyleSheet } from 'react-native';

import { formatNumber } from './FormatarValores';

export function ProdutosCarrinho({ nomeProduto, loja, preco }) {
  const valorFormatado = formatNumber(preco);

  return (
    <View style={styles.container}>
      <View style={styles.listagem}>
        <View>
          <Text style={styles.nomeProduto}>{nomeProduto}</Text>

          <Text style={styles.loja}>{loja}</Text>
        </View>

        <Text style={styles.preco}>R$ {valorFormatado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  listagem: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(196, 196, 196)',
    width: '80%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nomeProduto: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  loja: {
    color: 'rgb(160, 160, 160)',
    fontSize: 16,
  },

  preco: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});
