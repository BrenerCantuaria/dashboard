import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu/"

export default function Inicio() {
  
  
  return (
    <div>
      <Menu/>
      <Outlet/>
    </div>
  );
}
