import Header from "../components/Header";
import img from "../assets/maison.jpeg";
import Button from "../components/Button";

export default function DetailPage() {
  return (
    <>
      <Header />
      <main className="my-10 mx-60 flex gap-8">
        <article className="flex-3">
          <img src={img} className="w-220 h-95 object-cover rounded-lg" />
          <div className="py-5">
            <p className="text-3xl font-medium">Villa Moderne</p>
            <p className="py-1 text-xl font-light">
              Marseille, Saint-Victor
              <span className="ml-4 font-bold"> 800000 £</span>
            </p>
            <p className="pb-1 text-lg">Disponible</p>
            <p>
              Une jolie maison blanche au style épuré, offrant une atmosphère
              lumineuse et accueillante. Sa façade claire et soignée lui donne
              un charme discret, parfait pour profiter d’un cadre paisible.
              L’ambiance chaleureuse de cette maison en fait un lieu idéal pour
              s’installer et se sentir rapidement chez soi.
            </p>
          </div>
        </article>
        <aside className="flex-1 ">
          <section className="mb-8 border border-gray-100 p-4 rounded-md">
            <h2 className="text-2xl font-medium">Caractéristiques</h2>
            <ul>
              <li>Surface 150 m2</li>
              <li>3 chambres</li>
              <li>2 salles de bains</li>
              <li>1 salon</li>
              <li>1 cuisine</li>
              <li>1 jardin</li>
            </ul>
          </section>
          <section className="p-4 border border-gray-100">
            <h2 className="text-2xl font-medium rounded-md">
              Documents associés
            </h2>
            <ul className="pt-2">
              <li>Contrat type</li>
            </ul>
            <Button className="my-4 w-full rounded-lg text-white font-medium py-2 px-4 bg-blue-950 ">
              Contacter
            </Button>
          </section>
        </aside>
      </main>
    </>
  );
}
