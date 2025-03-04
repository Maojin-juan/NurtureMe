// import { Helmet } from "react-helmet-async";

// export default function Store() {
//   return (
//     <>
//       <Helmet>
//         <title>浪我包養 - 義賣商城</title>
//       </Helmet>

//       <main className="mt-40">
//         <div>Store</div>
//       </main>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productService } from "@/api/services/client/productService";
import { Helmet } from "react-helmet-async";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getProducts();
        console.log(response.products);

        setProducts(response.products || []);
      } catch (error) {
        console.error("商品列表載入失敗:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>載入中...</div>;

  return (
    <>
      <Helmet>
        <title>浪我包養 - 義賣商城</title>
      </Helmet>

      <main className="mt-40">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/store/${product.id}`}
              className="product-card"
            >
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.title}</h3>
              <p>NT$ {product.price}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
