// import Image from "next/image";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Page from "./products/Page";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}
