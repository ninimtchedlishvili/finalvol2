"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/app/components/[id]/ProductCard";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <section className="py-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Page;
