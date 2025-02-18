import { Product } from "../../app/models/product";
import ProductList from "./productList";

type Props = {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products }: Props) {
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

