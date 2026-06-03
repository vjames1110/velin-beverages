import { Link } from "react-router-dom";

export default function ProductCard({
 product
}) {
 return (

  <div className="product-card">

   <img
    src={product.image}
    alt={product.name}
   />

   <h3>{product.name}</h3>

   <p>
    {product.description}
   </p>

   <Link
    to={`/${product.slug}`}
    className="product-btn"
   >
    Explore
   </Link>

  </div>
 );
}