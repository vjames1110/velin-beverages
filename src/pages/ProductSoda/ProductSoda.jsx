import ProductPage from "../../components/products/details/ProductPage";

import productDetails from "../../data/productDetails";

export default function ProductSoda() {
  return (
    <ProductPage
      product={productDetails.soda}
    />
  );
}