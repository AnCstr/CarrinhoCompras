import './carrinho-de-compras.css';
import React from "react";


const dadosProdutos = [
  { id: 1, nome: "Maçã", preco: 1.5 },
  { id: 2, nome: "Banana", preco: 1.0 },
  { id: 3, nome: "Laranja", preco: 2.0 },
  { id: 4, nome: "Leite", preco: 3.0 },
  { id: 5, nome: "Pão", preco: 2.5 },
];

function formatarPreco(preco) {
  return `R$ ${preco.toFixed(2)}`; // Formato com R$
}

function ListaProdutos({ produtos, adicionarAoCarrinho }) {
  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {formatarPreco(produto.preco)}
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Carrinho({ itensCarrinho, removerDoCarrinho }) {
  const total = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {itensCarrinho.map((item, index) => (
          <li key={index}>
            {item.nome} - {formatarPreco(item.preco)}
            <button onClick={() => removerDoCarrinho(index)} className="remove-btn">Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: {formatarPreco(total)}</h3>
    </div>
  );
}

function App() {
  const [itensCarrinho, setItensCarrinho] = React.useState([]);

  const adicionarAoCarrinho = (produto) => {
    setItensCarrinho([...itensCarrinho, produto]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = itensCarrinho.filter((_, i) => i !== index);
    setItensCarrinho(novoCarrinho);
  };

  return (
    <div>
      <h1>Aplicativo de Carrinho de Compras</h1>
      <div className="container">
        <ListaProdutos produtos={dadosProdutos} adicionarAoCarrinho={adicionarAoCarrinho} />
        <Carrinho itensCarrinho={itensCarrinho} removerDoCarrinho={removerDoCarrinho} />
      </div>
    </div>
  );
}

export default App;
