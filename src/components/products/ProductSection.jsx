import products from "../../data/products";
import ProductCard from "./ProductCard";

import "./Products.css";

export default function ProductSection() {

 return (
  <section
   id="products"
   className="products"
  >

   <h2>
    Our Products
   </h2>

   <div className="product-grid">

    {products.map(product=>(
      <ProductCard
       key={product.id}
       product={product}
      />
    ))}

   </div>

  </section>
 );
}