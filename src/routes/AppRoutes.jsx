import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProductSoda from "../pages/ProductSoda/ProductSoda";
import ProductWater from "../pages/ProductWater/ProductWater";
import ProductNibua from "../pages/ProductNibua/ProductNibua";
import ProductJeera from "../pages/ProductJeera/ProductJeera";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soda" element={<ProductSoda />} />
            <Route path="/water" element={<ProductWater />} />
            <Route path="/nibua" element={<ProductNibua />} />
            <Route path="/jeera" element={<ProductJeera />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}