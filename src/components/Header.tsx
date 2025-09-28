import Button from "./Button";

type HeaderProps = {
  goToHome: () => void;
  goToLogin: () => void;
};

export default function Header({ goToHome, goToLogin }: HeaderProps) {
  return (
    <>
      <header className="flex items-center justify-around my-5 mx-25">
        <h1 className="text-4xl text-blue-950 font-bold">Immo Plus</h1>
        <nav>
          <ul className="flex gap-10 font-medium">
            <li
              onClick={goToHome}
              className="cursor-pointer hover:text-blue-700"
            >
              Accueil
            </li>
            <li>Biens</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button
          onClick={goToLogin}
          className="rounded-lg text-white font-medium py-2 px-4 bg-blue-950"
        >
          Se connecter
        </Button>
      </header>
      <hr className="border-gray-100"></hr>
    </>
  );
}
