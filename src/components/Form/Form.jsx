import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ aoItemCadastrado }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const totalInvestido = preco * quantidade;
  

  const enviar = (e) => {
    e.preventDefault();
    aoItemCadastrado({ nome, preco, quantidade,totalInvestido });
    setNome("")
    setPreco("")
    setQuantidade(0)
  };

  
  //console.log(nome,preco,quantidade)

  return (
    <div className="bg-gray-400 flex justify-center">
      <form onSubmit={enviar}>
        <label className="block text-white text-lg"> Nome do produto: </label>
        <input
          type="text"
          name="nome-do-produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="p-2 rounded "
        ></input>

        <label className="block text-white text-lg"> Preço: </label>
        <input
          type="text"
          name="oreco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
          className="p-2 rounded "
        ></input>

        <label className="block text-white text-lg"> Quantidade: </label>
        <input
          type="number"
          name="quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
          className="p-2 rounded "
        ></input>
        <button className="block bg-gray-300 p-2 mt-4 font-bold">
          Cadastrar
        </button>
      </form>
      <h1></h1>
    </div>
  );
}
