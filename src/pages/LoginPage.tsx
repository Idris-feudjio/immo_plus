export default function LoginPage() {
  return (
    <div className="my-15 mx-60 px-10 py-10 border border-gray-100 rounded-xl flex justify-between">
      <h1 className="text-4xl text-blue-950 font-bold">Immo Plus</h1>
      <section>
        <ul className="pr-15 flex gap-8 items-center text-2xl font-bold  text-blue-950">
          <li>
            <button> Se connecter </button>
          </li>
          <li>
            <button>S'inscrire</button>
          </li>
        </ul>
      </section>
    </div>
  );
}
