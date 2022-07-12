import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    data_id: 1,
    title: "Red Tshirt",
    price: 299,
    categoryName: "men",
    stars: 3,
    inStock: true,
    badge: "New",
    image:
      "https://5.imimg.com/data5/WZ/AX/PV/SELLER-3300497/plain-t-shirt-500x500.jpeg",

    stock: 200,
    size: 40,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 2,
    title: "Green Tshirt",
    price: 350,
    categoryName: "men",
    stars: 5,
    size: 39,
    inStock: true,

    image:
      "https://5.imimg.com/data5/UX/KF/MY-23375112/full-sleeve-printed-t-shirt-500x500.jpg",

    stock: 150,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 3,

    title: "Yellow Tshirt",
    price: 250,
    categoryName: "men",
    stars: 3,
    size: 42,
    inStock: true,

    image:
      "https://5.imimg.com/data5/FW/GT/MY-23375112/men-s-yellow-color-t-shirt-250x250.jpg",

    stock: 150,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 4,

    title: "Black Tshirt",
    price: 350,
    categoryName: "men",
    stars: 4,

    size: 39,

    image:
      "https://5.imimg.com/data5/HB/VQ/MY-44811379/men-black-plain-t-shirt-500x500.jpg",

    stock: 140,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 5,

    title: "Yellow Dress",
    price: 799,
    categoryName: "woman",
    stars: 4,
    inStock: true,
    size: 38,

    image: "https://m.media-amazon.com/images/I/71GGWLiHvDL._UY550_.jpg",
    stock: 100,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 6,

    title: "Orange Dress",
    price: 899,
    categoryName: "woman",
    stars: 4,
    inStock: true,
    size: 42,
    image:
      "https://rukminim1.flixcart.com/image/714/857/jij61e80/gown/f/p/s/22to-16-m-g-29-dyna-orange-vijaylaxmi-16-to-22-original-imaf24f5javchhwj.jpeg?q=50",
    stock: 180,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 7,

    title: "Green Dress",
    price: 999,
    categoryName: "woman",
    stars: 4,
    inStock: true,
    size: 40,
    image:
      "https://www.lulus.com/images/product/xlarge/6688881_673102.jpg?w=375&hdpi=1",
    stock: 170,
    quantity: 1,
  },
  {
    _id: uuid(),
    data_id: 8,

    title: "Black Dress",
    price: 999,
    categoryName: "woman",
    stars: 4,
    inStock: true,
    badge: "New",
    size: 38,
    image:
      "https://wforwoman.gumlet.io/product/21AUW16587-216051/665/21AUW16587-216051_1.JPG",
    stock: 160,
    quantity: 1,
  },
];
