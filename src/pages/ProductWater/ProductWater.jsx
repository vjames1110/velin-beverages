import ProductPage from "../../components/products/details/ProductPage";

import productDetails from "../../data/productDetails";

export default function ProductWater() {
  return (
    <ProductPage
      product={productDetails.water}
    />
  );
}