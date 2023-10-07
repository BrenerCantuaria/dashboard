import Card from "../Card/Card";
import Graphics from "../Graphicscards/Graphics";
import Projetos from "../Projects/Projetos";
import {AiFillDollarCircle,AiOutlineLineChart} from "react-icons/ai"
import {FcSalesPerformance}  from "react-icons/fc";

export default function Main() {
  
  
  const dadosDeExemplo = [
    {
      nomeProduto: 'Produto A',
      vendasSemana: 2500,
      vendasMes: 10000,
      gastosInvestimento: 3500,
    },
    {
      nomeProduto: 'Produto B',
      vendasSemana: 3500,
      vendasMes: 12000,
      gastosInvestimento: 2800,
    },
    {
      nomeProduto: 'Produto C',
      vendasSemana: 1800,
      vendasMes: 8000,
      gastosInvestimento: 22200,
    },
  ];
  const retorno = dadosDeExemplo.map(valorInvestido => {
    return valorInvestido.gastosInvestimento
  })

  const initialValue = 0;
  const sumInvestment = retorno.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);


  return (
    <main className="mt-10 md:mt-10 lg:mt-10">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 p-4">
          <Card icon={<AiFillDollarCircle size={60}/>} title={"Vendas na última semana"} sale={dadosDeExemplo[0].vendasSemana} />
          <Card icon={<AiOutlineLineChart size={60}/>} title={"Vendas no último mês"} sale={dadosDeExemplo[1].vendasMes} />
          <Card icon={<FcSalesPerformance size={60}/>} title={"Retorno de investimento"}  sale={sumInvestment} />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 p-4">
          <Graphics titulo={"01"}  />
          <Graphics titulo={"02"} />
          <Graphics titulo={"03"}/>
        </section>

        <section className="p-4">
          <Projetos />
        </section>
      </main>

  )
}
