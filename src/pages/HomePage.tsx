import Button from "../components/Button";
import Card from "../components/Card";
import img from "../assets/react.svg";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="my-15 mx-60">
        <section className="px-15 py-10 gap-6 border border-gray-100 rounded-2xl">
          <h2 className="text-2xl font-semibold text-blue-950 pb-6">
            Rechercher
          </h2>
          <form className="grid grid-rows-2 gap-6">
            <div className="flex gap-5">
              <input
                placeholder="Rechercher"
                className="py-1 px-2 rounded-md border border-gray-300 flex-3"
              />
              <select className="py-1 px-2 rounded-md border border-gray-300 flex-1">
                <option value="" disabled selected>
                  Ville
                </option>
              </select>
              <select className="py-1 px-2 rounded-md border border-gray-300 flex-1">
                <option value="" disabled selected>
                  Type de bien
                </option>
              </select>
              <select className="py-1 px-2 rounded-md border border-gray-300 flex-1">
                <option value="" disabled selected>
                  Prix max
                </option>
              </select>
            </div>
            <Button className="rounded-lg text-white font-medium py-2 px-4 bg-blue-950">
              Rechercher
            </Button>
          </form>
        </section>
        <section className="py-10 flex flex-wrap gap-4 justify-center items-center">
          <Card
            imgsrc={img}
            city="Paris"
            disponibility="Disponible"
            localType="Appartement"
            price={2500}
            street="Montmartre"
            key={1}
          />
          <Card
            imgsrc={img}
            city="Paris"
            disponibility="Disponible"
            localType="Appartement"
            price={2500}
            street="Montmartre"
            key={2}
          />
          <Card
            imgsrc={img}
            city="Paris"
            disponibility="Disponible"
            localType="Appartement"
            price={2500}
            street="Montmartre"
            key={3}
          />

          <Card
            imgsrc={img}
            city="Paris"
            disponibility="Disponible"
            localType="Appartement"
            price={2500}
            street="Montmartre"
            key={1}
          />
        </section>
      </main>
    </>
  );
}
