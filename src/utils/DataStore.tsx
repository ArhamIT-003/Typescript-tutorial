import items from "../data/items.json";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductData(id: number): Product | undefined {
  const productData = items.find((item) => item.id === id);

  if (!productData) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}
