

// eslint-disable-next-line react/prop-types
export default function Card({icon,title,sale,invested,}) {
  

  
  
  return (
    <div className=" p-2 shadow-slate-900 shadow-sm rounded relative w-full">
      <div><i className="inset-0">{icon}</i></div>
     
      <div className="flex  justify-end mt-8">
        <div className="flex-col">
          <h1>{title}</h1>
          
          <h3 className="flex justify-end  ">R$ {sale} MIL</h3>
        </div>
      </div>
      <div className="border-b-4 "></div>
      <div className="flex mt-8 ml-2">
        <h3 className="text-lime-400">{invested}</h3>
      </div>
    </div>
  )
}
