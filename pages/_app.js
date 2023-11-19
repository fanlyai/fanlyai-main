import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar> <Component {...pageProps} />
      <div className="w-full "><Footer></Footer> </div>
     
    </>
  );
}
