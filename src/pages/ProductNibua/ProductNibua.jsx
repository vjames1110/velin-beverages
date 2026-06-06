import ProductPage from "../../components/products/details/ProductPage";

import productDetails from "../../data/productDetails";

export default function ProductNibua() {
  return (
    <ProductPage
      product={productDetails.nibua}
    />
  );
}