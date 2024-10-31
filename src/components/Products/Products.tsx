import React, { Suspense } from "react";
const ProductCard = React.lazy(() => import("../ProductCard/ProductCard"));

const Products = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading.............................</div>}>
        <ProductCard />
      </Suspense>
    </div>
  );
};

export default Products;
