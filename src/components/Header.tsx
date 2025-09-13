import Button from "./Button";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-around my-5 mx-25">
        <h1 className="text-4xl text-blue-950 font-bold">Immo Plus</h1>
        <nav>
          <ul className="flex gap-10 font-medium">
            <li>Accueil</li>
            <li>Biens</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button className="rounded-lg text-white font-medium py-2 px-4 bg-blue-950">
          Se connecter
        </Button>
      </header>
      <hr className="border-gray-100"></hr>
    </>
  );
}
