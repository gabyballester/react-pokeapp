import { Link } from "react-router-dom";
import "./MenuFilter.scss";

export default function MenuFilter() {
  return (
    <div className="filter-container">
      <h3>Filtros</h3>
      <div className="filter-options">
       <Link to="/areas"><div className="badge-container areas">Áreas</div></Link>
       <Link to="/species"><div className="badge-container species">Especies</div></Link>
       <Link to="/colors"><div className="badge-container colors">Colores</div></Link>
      </div>
    </div>
  );
}
