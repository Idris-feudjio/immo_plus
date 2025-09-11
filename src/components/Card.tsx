import Button from "./Button";

type CardProps = {
  imgsrc: string;
  localType: string;
  city: string;
  street: string;
  price: number;
  disponibility: string;
};

export default function Card({
  imgsrc,
  localType,
  city,
  street,
  price,
  disponibility,
}: CardProps) {
  return (
    <div className=" border border-gray-50 rounded-xl grid grid-rows-2">
      <img src={imgsrc} className="w-70 h-70" />
      <div className="grid grid-rows-5 px-4 py-4 ">
        <p className="text-2xl font-medium">{localType}</p>
        <p className="text-xl font-light">
          {city} ~ {street}
        </p>
        <p className="text-2xl font-medium">{price} £/mois</p>
        <p className="text-lg">{disponibility}</p>
        <Button className="rounded-lg text-white font-medium py-2 px-4 bg-blue-950">
          Voir les détails
        </Button>
      </div>
    </div>
  );
}
