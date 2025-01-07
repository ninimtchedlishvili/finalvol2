import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Page from "./components/mainPage/Products";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return (
    <div className="bg-gray-900">
      <Header />
      <Page products={products} />
      <Footer />
    </div>
  );
}
