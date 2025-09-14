import Button from "../components/Button";
import Card from "../components/Card";
import img from "../assets/maison.jpeg";
import Header from "../components/Header";
import { propertyData } from "../fake_data/fake_data";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="my-10 mx-60">
        <section className="px-15 py-5 gap-6 border border-gray-100 rounded-2xl">
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
              <Button className="rounded-lg text-white font-medium py-2 px-4 bg-blue-950 flex-1">
                Rechercher
              </Button>
            </div>
          </form>
        </section>
        <section className="py-10 flex flex-wrap gap-4 justify-center items-center">
          {propertyData &&
            propertyData.map((property, key) => (
              <Card
                key={key}
                city={property.city}
                disponibility={property.disponibility}
                imgsrc={property.imgsrc}
                localType={property.local}
                price={property.price}
                street={property.street}
              />
            ))}
        </section>
      </main>
    </>
  );
}
