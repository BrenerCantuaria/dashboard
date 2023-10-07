import {AiOutlineClockCircle} from "react-icons/ai"
export default function Graphics({titulo}) {
  return (
    <div className="relative h-72 shadow-2xl rounded p-4 mt-8">
        <canvas className="bg-gray-400 h-48 rounded absolute inset-y-0 inset-0 w-full shadow-xl">
          
        </canvas>
        <main className="flex-col mt-48">
            <h1>{titulo}</h1>
            <div className="border-b-4"></div>
            <footer className="flex items-center gap-2 mt-4 text-sm lg:text-base">
                <i><AiOutlineClockCircle/></i>
                <h1>Informações das ultimas 24 horas</h1>
            </footer>
        </main>
        
    </div>
  )
}
