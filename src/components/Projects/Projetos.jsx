// import { AiFillApple } from "react-icons/ai";

export default function Lojas() {
  const dataStorage = localStorage.getItem("Produto");
  const data = JSON.parse(dataStorage);


  return (
    <div className="h-72  bg-gray-900 rounded p-2 overflow-auto">
      <header>
        <h1 className="text-white text-xl font-bold">Produtos</h1>
      </header>
      <main className="text-white ">
        <table className="table-auto w-full text-center ">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Investimento</th>
            </tr>
          </thead>
          <tbody className="border-2 ">
            
              {data.map((item, index) => (
                <tr className="border-2 text-center" key={index}>    
                 <td >{item.nome}</td>
                 <td >{item.quantidade}</td>
                 <td >${item.totalInvestido} reais</td>
               </tr>
              ))}
          
          </tbody>
        </table>
      </main>
    </div>
  );
}
