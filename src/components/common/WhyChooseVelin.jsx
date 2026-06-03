import {
 FaAward,
 FaTruck,
 FaLeaf,
 FaCheckCircle
}
from "react-icons/fa";

import "./WhyChooseVelin.css";

const items = [
 {
  icon:<FaAward />,
  title:"Premium Quality",
  desc:"Strict quality control."
 },
 {
  icon:<FaTruck />,
  title:"Wide Distribution",
  desc:"Reliable supply chain."
 },
 {
  icon:<FaLeaf />,
  title:"Fresh Ingredients",
  desc:"High quality sourcing."
 },
 {
  icon:<FaCheckCircle />,
  title:"Trusted Brand",
  desc:"Customer-first approach."
 }
];

export default function WhyChooseVelin() {
 return (
  <section className="why">

   <h2>
    Why Choose Velin
   </h2>

   <div className="why-grid">

    {items.map((item,index)=>(

     <div
      className="why-card"
      key={index}
     >
      <div className="icon">
       {item.icon}
      </div>

      <h3>{item.title}</h3>

      <p>{item.desc}</p>

     </div>

    ))}

   </div>

  </section>
 );
}