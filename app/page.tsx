import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Image from "next/image";


export default function Home() {
  return (
   <div className="text-black bg-[#F8F9FA]">
      <Hero />
      <h2 className="text-2xl font-bold my-6 w-full font-semibold text-center">All Products</h2>
      <ProductList />
      <Footer />
   </div>
  );
}
