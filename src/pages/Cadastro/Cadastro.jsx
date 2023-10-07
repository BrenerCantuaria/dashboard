import {  useEffect, useState } from "react";
import Form from "../../components/Form/Form";

export default function Cadastro() {
  
  const [produtos, setProdutos] = useState(
    () => {
      const storedData = localStorage.getItem("Produto");
      return storedData ? JSON.parse(storedData) : [];
    });
  
   
 
  useEffect(() => {
    localStorage.setItem("Produto", JSON.stringify(produtos));
  }, [produtos]);
  
  return (
    <div className="bg-gray-700 h-screen  mt-9 md:mt-10 lg:mt-10">
      <h1 className="text-center text-white text-4xl">Cadastro</h1>
      <Form aoItemCadastrado={(item) => setProdutos([...produtos, item])} />
      
    </div>
  );
}
