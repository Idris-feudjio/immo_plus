import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex items-center justify-around my-5 mx-25">
        <h1 className="text-4xl text-blue-950 font-bold">Immo Plus</h1>
        {/*<nav>
          <ul className="flex gap-10 font-medium">
            <li className="cursor-pointer hover:text-blue-700">Accueil</li>
            <li>Biens</li>
            <li>Contact</li>
          </ul>
        </nav>*/}
        <ul className="flex gap-10 font-medium">
          <NavLink to="/" className="hover:text-blue-700">
            Accueil
          </NavLink>
          <NavLink to="/biens">Biens</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <Button
          onClick={() => navigate("/login")}
          className="cursor-pointer rounded-lg text-white font-medium py-2 px-4 bg-blue-950"
        >
          Se connecter
        </Button>
      </header>
      <hr className="border-gray-100"></hr>
    </>
  );
}
