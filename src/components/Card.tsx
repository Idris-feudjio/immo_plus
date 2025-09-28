import type { Property } from "../fake_data/fake_data";
import Button from "./Button";

type CardProps = {
  property: Property;
};

export default function Card({ property }: CardProps) {
  return (
    <div className=" border border-gray-50 rounded-xl grid grid-rows-2 w-70 h-140 overflow-hidden">
      <img src={property.imgsrc} className="w-full h-full object-cover" />
      <div className="grid grid-rows-5 px-4 py-4 ">
        <p className="text-2xl font-medium">{property.local}</p>
        <p className="text-xl font-light">
          {property.city} ~ {property.street}
        </p>
        <p className="text-2xl font-medium">{property.price} £/mois</p>
        <p className="text-lg">{property.disponibility}</p>
        <Button className="cursor-pointer rounded-lg text-white font-medium py-2 px-4 bg-blue-950">
          Voir les détails
        </Button>
      </div>
    </div>
  );
}
