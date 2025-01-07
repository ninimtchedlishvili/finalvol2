import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/types/products";
import Quantity from "@/app/components/calculations/Quantity";
import Header from "@/app/components/layout/Header";

export default async function Product({ params }: ProductProps) {
  const { id } = params;
  console.log(id);

  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await data.json();
  console.log(product);

  return (
    <>
      <Header />

      <section className="py-8 md:py-16 bg-gray-900 flex justify-center items-center mx-auto h-screen">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-6">
            {/* Image Section */}
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto lg:col-span-1">
              <Image
                src={product?.image}
                alt={product?.title || "Product Image"}
                width={250}
                height={250}
                objectFit="contain"
              />
            </div>

            {/* Right Section */}
            <div className="mt-6 sm:mt-8 lg:mt-0 lg:col-span-2">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product?.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  ${product?.price}
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1">
                    {/* SVG Stars */}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    ({product?.rating?.rate})
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    {product?.rating?.count} Reviews
                  </a>
                </div>
              </div>
              <p className="mb-6 mt-6 text-gray-500 dark:text-gray-400">
                {product?.description}
              </p>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <div className="mt-6 gap-4 flex justify-center content-center sm:flex sm:mt-8">
                <Quantity />
                <Link
                  href="/cart"
                  className="text-white bg-blue-950 flex items-center justify-center font-medium rounded-lg px-4 py-2 w-1/2"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </Link>
                <Link
                  href="/checkout"
                  className="text-white bg-blue-950 flex items-center justify-center font-medium rounded-lg px-4 py-2 w-1/2"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
