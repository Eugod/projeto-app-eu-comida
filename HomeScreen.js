import { View, StyleSheet, FlatList } from 'react-native';

import { ListaProdutos } from './componentes/ListaProdutos';

import { Produtos } from './componentes/Produtos';

import { BotaoCarrinho } from './componentes/BotaoCarrinho';

export function Home() {
  return (
    <View>
      <BotaoCarrinho/>
      <FlatList style={styles.lista}
        data={Produtos}
        renderItem={({ item }) => (
          <ListaProdutos
            imagem={item.imagem}
            nomeProduto={item.nomeProduto}
            loja={item.loja}
            preco={item.preco}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginBottom: '12%'
  }
})