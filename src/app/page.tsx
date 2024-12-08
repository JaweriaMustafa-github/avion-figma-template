import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Ceramics from "@/components/Ceramics";
import Product from "@/components/Product";
import Benefit from "@/components/Benefit";
import Touch from "@/components/Touch";
import ProductListing from "./productlisting/page";



export default function Home() {
  return (
   <>
   <Hero/>
   <Main/>
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>
   </>
  );
}