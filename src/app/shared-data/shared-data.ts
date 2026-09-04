export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export const ollivanders: Product[] = [
  {
    id: 1,
    name: 'Elder Wand',
    category: 'Legendary',
    price: 500,
    image: '/images/ElderWand.jpg',
   
  },
  {
    id: 2,
    name: 'Holly Wand',
    category: 'Wands',
    price: 350,
    image: '/images/hollyWand.jpg',
   
  },
  {
    id: 3,
    name: 'Vine Wand',
    category: 'Wands',
    price: 320,
    image: '/images/vineWand.jpg',
   
  },
  {
    id: 4,
    name: 'Hawthorn Wand',
    category: 'Rare Wands',
    price: 340,
    image: '/images/hawthorn.jpg',
   
  },
  {
    id: 5,
    name: 'Willow Wand',
    category: 'Wands',
    price: 300,
    image: '/images/willowWand.jpg',
   
  },
  {
    id: 6,
    name: 'Yew Wand',
    category: 'Rare Wands',
    price: 380,
    image: '/images/yewWand.jpg',
   
  },
];

export const books: Product[] = [
  {
    id: 7,
    name: 'The Standard Book of Spells',
    category: 'Spell Books',
    price: 120,
    image: '/images/TheStandardBookofSpells.jpg',
   
  },
  {
    id: 8,
    name: 'Fantastic Beasts',
    category: 'Creature Books',
    price: 180,
    image: '/images/FantasticBeastsandWheretoFindThem.jpg',
   
  },
  {
    id: 9,
    name: 'Hogwarts: A History',
    category: 'History',
    price: 150,
    image: '/images/HogwartsAHistory.jpg',
   
  },
  {
    id: 10,
    name: 'Advanced Potion-Making',
    category: 'Potion Books',
    price: 170,
    image: '/images/AdvancedPotionMaking.jpg',
   
  },
  {
    id: 11,
    name: 'The Monster Book of Monsters',
    category: 'Creature Books',
    price: 220,
    image: '/images/TheMonsterBookofMonsters.jpg',
   
  },
  {
    id: 12,
    name: 'Magical Theory',
    category: 'Magic',
    price: 140,
    image: '/images/MagicalTheory.jpg',
   
  },
];

export const potions: Product[] = [
  {
    id: 13,
    name: 'Felix Felicis',
    category: 'Rare',
    price: 450,
    image: '/images/FelixFelicis.jpg',
   
  },
  {
    id: 14,
    name: 'Polyjuice Potion',
    category: 'Transformation',
    price: 380,
    image: '/images/PolyjuicePotion.jpg',
   

  },
  {
    id: 15,
    name: 'Amortentia',
    category: 'Love',
    price: 420,
    image: '/images/Amortentia.jpg',
   
  },
  {
    id: 16,
    name: 'Veritaserum',
    category: 'Truth',
    price: 500,
    image: '/images/Veritaserum.jpg',
   
  },
  {
    id: 17,
    name: 'Wolfsbane Potion',
    category: 'Healing',
    price: 340,
    image: '/images/Wolfsbane.jpg',
   
  },
  {
    id: 18,
    name: 'Skele-Gro',
    category: 'Healing',
    price: 280,
    image: '/images/SkeleGro.jpg',
   
  },
];

export const pets: Product[] = [
  {
    id: 19,
    name: 'Snowy Owl',
    category: 'Owls',
    price: 220,
    image: '/images/owl3.jpg',
   
  },
  {
    id: 20,
    name: 'Barn Owl',
    category: 'Owls',
    price: 180,
    image: '/images/owl2.jpg',
   
  },
  {
    id: 21,
    name: 'Horned Owl ',
    category: 'Owls',
    price: 200,
    image: '/images/owl1.jpg',
   
  },
  {
    id: 22,
    name: 'Crookshanks',
    category: 'Cats',
    price: 190,
    image: '/images/cat1.jpg',
   
  },
  {
    id: 23,
    name: 'Black Cat',
    category: 'Cats',
    price: 170,
    image: '/images/cat2.jpg',
   
  },
  {
    id: 24,
    name: 'Wizard Toad',
    category: 'Toads',
    price: 90,
    image: '/images/Toad.jpg',
   
  },
];

export const quidditch: Product[] = [
  {
    id: 25,
    name: 'Firebolt',
    category: 'Brooms',
    price: 650,
    image: '/images/Firebolt.jpg',
   
  },
  {
    id: 26,
    name: 'Nimbus 2000',
    category: 'Brooms',
    price: 520,
    image: '/images/Nimbus2000.jpg',
   
  },
  {
    id: 27,
    name: 'Golden Snitch',
    category: 'Match Equipment',
    price: 300,
    image: '/images/GoldenSnitch.jpg',
   
  },
  {
    id: 28,
    name: 'Quaffle',
    category: 'Match Equipment',
    price: 180,
    image: '/images/Quaffle.jpg',
   
  },
  {
    id: 29,
    name: 'Bludger',
    category: 'Match Equipment',
    price: 250,
    image: '/images/Bludger.jpg',
   
  },
  {
    id: 30,
    name: "Beater's Bat",
    category: 'Gear',
    price: 160,
    image: '/images/KeeperGloves.jpg',
   
  },
];

export const robes: Product[] = [
  {
    id: 31,
    name: 'Hogwarts School Robe',
    category: 'Robes',
    price: 180,
    image: '/images/HogwartsSchoolRobe.jpg',
   
  },
  {
    id: 32,
    name: 'Gryffindor Scarf',
    category: 'Scarves',
    price: 75,
    image: '/images/GryffindorScarf.jpg',
   
  },
  {
    id: 33,
    name: 'Wizard Hat',
    category: 'Hats',
    price: 60,
    image: '/images/hat.jpg',
   
  },
  {
    id: 34,
    name: 'Slytherin Robe',
    category: 'Robes',
    price: 120,
    image: '/images/SlytherinRobe.jpg',
   
  },
  {
    id: 35,
    name: 'Gloves',
    category: 'accessories',
    price: 150,
    image: '/images/gloves.jpg',
   
  },
  {
    id: 36,
    name: 'Ravenclaw Tie',
    category: 'accessories',
    price: 210,
    image: '/images/RavenclawTie.jpg',
   
  },
];

export const shops: { [key: string]: Product[] } = {
  ollivanders,
  books,
  potions,
  pets,
  quidditch,
  robes,
};

export const shopNames: { [key: string]: string } = {
  ollivanders: 'Ollivanders',
  books: 'Flourish and Blotts',
  potions: 'The Apothecary',
  pets: 'Eeylops Owl Emporium',
  quidditch: 'Quality Quidditch Supplies',
  robes: "Madam Malkin's Robes",
};

export const allProducts: Product[] = [
  ...ollivanders,
  ...books,
  ...potions,
  ...pets,
  ...quidditch,
  ...robes,
];