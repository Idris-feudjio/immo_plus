import Button from "./Button";

export default function LoginForm() {
  return (
    <form className="grid grid-rows gap-2 px-10">
      <label>Email</label>
      <input type="email" className="p-1 border border-gray-300 rounded-lg" />
      <label>Mot de Passe</label>
      <input
        type="password"
        className="p-1 border border-gray-300 rounded-lg"
      />
      <Button className="mt-1 rounded-lg text-white font-medium py-2 px-4 bg-blue-950">
        Se connecter
      </Button>
    </form>
  );
}
