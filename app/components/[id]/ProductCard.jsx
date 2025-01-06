import React from "react";
import Link from "next/link";
import {Product, ProductPageProps} from "@/types/products"


const ProductCard = ({ product } : ProductPageProps) => {
  return (
    <Link to={`/products/${product?.id}`}>
      <div className="rounded-lg border border-gray-200 bg-gray-800 p-6 shadow-sm">
        <div className="h-56">
          <img
            className="mx-auto h-full"
            src={
              product?.image ||
              "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
            }
            alt={product?.title || "Product image"}
          />
        </div>
        <div className="pt-6">
          <p className="text-lg font-semibold leading-tight text-white hover:underline">
            {product?.title?.slice(0, 23) || "Product Title"}...
          </p>

          <div className="mt-2 flex items-center gap-2">
            <p className="text-sm font-medium text-white">
              {product?.rating?.rate || 0}
            </p>
            <p className="text-sm font-medium text-gray-400">
              {product?.rating?.count || 0} ratings
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-white">
              ${product?.price || "N/A"}
            </p>

            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
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
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
