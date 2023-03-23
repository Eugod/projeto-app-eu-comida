import React, { useState } from 'react';

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [qtd, setQtd] = useState(0);

  const [total, setTotal] = useState(0);

  const [vetorProdutos, setVetorProdutos] = useState([]);

  const aumentarQtd = (number) => {
    setQtd((value) => value + number);
  };

  const zerarQtd = () => setQtd(0);

  const somarTotal = (vetor) => {
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i].preco;
    }

    return soma;
  };

  return (
    <MainContext.Provider
      value={{
        qtd,
        aumentarQtd,
        zerarQtd,
        vetorProdutos,
        setVetorProdutos,
        total,
        setTotal,
        somarTotal,
      }}>
      {children}
    </MainContext.Provider>
  );
};
