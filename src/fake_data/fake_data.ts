import img from "../assets/maison.jpeg"

type LocalType = "Appartement" | "Maison";

export interface Features{
    area?: string;
    room?: string;
    bathroom?: string;
    livingroom?: string;
    kitchen?:string;
    garden?: string;
    garage?:boolean;
}
export interface Property {
    id: number;
  imgsrc: string;
  local: LocalType;
  city: string;
  street: string;
  price: number;
  disponibility: string;
  name: string;
  description: string;
  features?: Features
}


export const propertyData : Property[] = [
    {
        id:1,
        name: "Villa Moderne",
        imgsrc: img,
        local: "Appartement",
        city: "Paris",
        street: "Avenue Charles de Gaules 13",
        price: 4000,
        disponibility: "Disponible",
        description:"Une jolie maison blanche au style épuré, offrant une atmosphère lumineuse et accueillante. Sa façade claire et soignée lui donne un charme discret, parfait pour profiter d’un cadre paisible. L’ambiance chaleureuse de cette maison en fait un lieu idéal pour s’installer et se sentir rapidement chez soi."
    },
        {
        id:1,
        name: "Villa Moderne",
        imgsrc: img,
        local: "Appartement",
        city: "Marseille",
        street: "Montmartre 3",
        price: 2500,
        disponibility: "Maintenance",
        description:"Une jolie maison blanche au style épuré, offrant une atmosphère lumineuse et accueillante. Sa façade claire et soignée lui donne un charme discret, parfait pour profiter d’un cadre paisible. L’ambiance chaleureuse de cette maison en fait un lieu idéal pour s’installer et se sentir rapidement chez soi."
    },

]