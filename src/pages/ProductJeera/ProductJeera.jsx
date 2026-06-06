import ProductPage from "../../components/products/details/ProductPage";

import productDetails from "../../data/productDetails";

export default function ProductJeera() {
  return (
    <ProductPage
      product={productDetails.jeera}
    />
  );
}