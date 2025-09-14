import img from "../assets/maison.jpeg"

type LocalType = "Appartement" | "Maison";

interface Property {
    id: number;
  imgsrc: string;
  local: LocalType;
  city: string;
  street: string;
  price: number;
  disponibility: string;
}


export const propertyData : Property[] = [
    {
        id:1,
        imgsrc: img,
        local: "Appartement",
        city: "Paris",
        street: "Avenue Charles de Gaules 13",
        price: 4000,
        disponibility: "Disponible"
    },
        {
        id:1,
        imgsrc: img,
        local: "Appartement",
        city: "Marseille",
        street: "Montmartre 3",
        price: 2500,
        disponibility: "Maintenance"
    },

]