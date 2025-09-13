import Button from "./Button";

export default function InscriptionForm() {
  return (
    <form className="grid grid-rows gap-2 px-10">
      <label>Nom et Prénom</label>
      <input type="name" className="p-1 border border-gray-300 rounded-lg" />
      <label>Email</label>
      <input type="email" className="p-1 border border-gray-300 rounded-lg" />
      <label>Mot de Passe</label>
      <input
        type="password"
        className="p-1 border border-gray-300 rounded-lg"
      />
      <label>Confirmation mot de Passe</label>
      <input
        type="password"
        className="p-1 border border-gray-300 rounded-lg"
      />
      <label>Rôle</label>
      <select className="p-1 border border-gray-300 rounded-lg">
        <option value="" disabled selected>
          Choisissez votre Rôle
        </option>
      </select>
      <Button className="mt-1 rounded-lg text-white font-medium py-2 px-4 bg-blue-950">
        Se connecter
      </Button>
    </form>
  );
}
