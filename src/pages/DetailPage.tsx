import Header from "../components/Header";
import img from "../assets/maison.jpeg";
import Button from "../components/Button";
import type { Property } from "../fake_data/fake_data";

type DetailPageProps = {
  property?: Property;
};
export default function DetailPage({ property }: DetailPageProps) {
  return (
    <>
      <Header />
      <main className="my-10 mx-60 flex gap-8">
        <article className="flex-3">
          <img src={img} className="w-220 h-95 object-cover rounded-lg" />
          <div className="py-5">
            <p className="text-3xl font-medium">{property?.name}</p>
            <p className="py-1 text-xl font-light">
              {property?.city}, {property?.street}
              <span className="ml-4 font-bold"> {property?.price} £</span>
            </p>
            <p className="pb-1 text-lg">{property?.disponibility}</p>
            <p>{property?.description}</p>
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
