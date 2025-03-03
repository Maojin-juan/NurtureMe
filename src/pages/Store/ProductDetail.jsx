import { Wave3, Wave4 } from "@/components/decorative";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productService } from "@/api/services/client/productService";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await productService.getProductById(productId);
        setProduct(response.product || []);
        setSelectedImage(response.product?.imageUrl || "");
      } catch (error) {
        console.error("商品詳細資料載入失敗:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (loading) return <div>載入中...</div>;
  if (!product) return <div>商品不存在</div>;

  return (
    <main className="relative overflow-hidden md:py-20 xl:py-40">
      <div className="absolute -left-[124px] -top-10 -z-10">
        <div className="h-[738px] w-[694px] bg-contain bg-no-repeat md:bg-storeShape1" />
      </div>

      <div className="absolute -bottom-[212px] -right-[280px] -z-10">
        <div className="h-[720px] w-[711px] bg-contain bg-no-repeat md:bg-storeShape2" />
      </div>

      <div className="flex flex-col md:container">
        <Link
          to="/store"
          className="mb-5 hidden items-center text-h6 text-primary-2 md:flex"
        >
          <svg
            className="mr-4"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.29289 16.7068C2.90237 16.3163 2.90237 15.6831 3.29289 15.2926L14.6262 3.95923C15.0167 3.56871 15.6499 3.56871 16.0404 3.95923C16.431 4.34976 16.431 4.98292 16.0404 5.37345L6.41421 14.9997L28 14.9997C28.5523 14.9997 29 15.4474 29 15.9997C29 16.552 28.5523 16.9997 28 16.9997L6.41421 16.9997L16.0404 26.6259C16.431 27.0164 16.431 27.6496 16.0404 28.0401C15.6499 28.4306 15.0167 28.4306 14.6262 28.0401L3.29289 16.7068Z"
              fill="#3E4D9C"
            />
          </svg>
          返回義賣商城
        </Link>

        <div className="flex flex-col items-center gap-x-6 md:flex-row">
          <div className="relative flex-1">
            <Link
              to="/store"
              className="absolute left-6 top-6 flex size-11 items-center justify-center rounded-full bg-white md:hidden"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.29289 16.7068C2.90237 16.3163 2.90237 15.6831 3.29289 15.2926L14.6262 3.95923C15.0167 3.56871 15.6499 3.56871 16.0404 3.95923C16.431 4.34976 16.431 4.98292 16.0404 5.37345L6.41421 14.9997L28 14.9997C28.5523 14.9997 29 15.4474 29 15.9997C29 16.552 28.5523 16.9997 28 16.9997L6.41421 16.9997L16.0404 26.6259C16.431 27.0164 16.431 27.6496 16.0404 28.0401C15.6499 28.4306 15.0167 28.4306 14.6262 28.0401L3.29289 16.7068Z"
                  fill="#3E4D9C"
                />
              </svg>
            </Link>

            <div className="relative aspect-square w-full overflow-hidden md:mb-5 md:rounded-[40px]">
              <img
                src={selectedImage || product.imageUrl}
                className="h-full w-full object-cover"
                alt={product.title}
              />
            </div>

            <Wave3 className="bottom-0 text-white md:hidden" />

            <div className="hidden justify-center gap-5 md:flex xl:px-12">
              <img
                src={product.imageUrl}
                className={`size-16 cursor-pointer ring-primary-3 hover:ring-4 md:rounded-[20px] xl:size-[120px] ${
                  selectedImage === product.imageUrl ? "ring-4" : ""
                }`}
                alt="product-main"
                onClick={() => setSelectedImage(product.imageUrl)}
              />
              {product.imagesUrl?.map((imageUrl, index) => (
                <img
                  key={index}
                  className={`size-16 cursor-pointer ring-primary-3 hover:ring-4 md:rounded-[20px] xl:size-[120px] ${
                    selectedImage === imageUrl ? "ring-4" : ""
                  }`}
                  src={imageUrl}
                  alt={`${product.title}-${index + 1}`}
                  onClick={() => setSelectedImage(imageUrl)}
                />
              ))}
            </div>
          </div>

          <div className="container flex flex-1 flex-col pb-10 pt-5 md:py-0">
            <div className="relative mb-7 xl:mb-8">
              <div className="absolute -left-5 -top-6 -z-10">
                <div className="h-[136px] w-[120px] bg-contain bg-no-repeat md:bg-titleShape" />
              </div>

              <h2 className="mb-5 text-h4 text-primary-1 xl:text-h2">
                {product.title}
              </h2>
              <p className="text-h6 text-secondary-2 xl:text-h3">NTD 899</p>
            </div>

            <div className="flex flex-col md:flex-col-reverse">
              <div className="mb-7 space-y-7 md:mb-0 xl:space-y-8">
                <hr />
                <div className="mb-4 flex items-center text-grey-2 xl:mb-8">
                  <p className="mr-3 md:mr-6 xl:text-fs-4">品項：</p>
                  {product.imagesUrl?.map((imageUrl, index) => (
                    <img
                      key={index}
                      className={`mr-3 size-11 cursor-pointer rounded-xl ring-primary-3 hover:ring-2 md:size-16 ${
                        selectedId === index ? "ring-2" : ""
                      }`}
                      src={imageUrl}
                      alt={`${product.title}-${index + 1}`}
                      onClick={() => setSelectedId(index)}
                    />
                  ))}
                </div>

                <div className="flex items-center text-grey-2">
                  <p className="mr-3 md:mr-6 xl:text-fs-4">數量：</p>
                  <div className="flex w-[156px] items-center justify-between md:w-[200px]">
                    <button
                      className={`flex size-8 items-center justify-center rounded-full bg-primary-1 text-white md:size-11 ${
                        quantity === 1
                          ? "opacity-30"
                          : "transition-all active:scale-95 active:bg-primary-2"
                      }`}
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                      disabled={quantity === 1}
                    >
                      <svg
                        className="h-[3px] w-[19px] md:size-auto"
                        width="26"
                        height="5"
                        viewBox="0 0 26 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.0003 4.32975H2.00033C1.5141 4.32975 1.04778 4.1366 0.703963 3.79278C0.360147 3.44896 0.166992 2.98265 0.166992 2.49642C0.166992 2.01019 0.360147 1.54387 0.703963 1.20006C1.04778 0.85624 1.5141 0.663086 2.00033 0.663086H24.0003C24.4866 0.663086 24.9529 0.85624 25.2967 1.20006C25.6405 1.54387 25.8337 2.01019 25.8337 2.49642C25.8337 2.98265 25.6405 3.44896 25.2967 3.79278C24.9529 4.1366 24.4866 4.32975 24.0003 4.32975Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <p className="text-h7 md:text-h5">{quantity}</p>
                    <button
                      className="flex size-8 items-center justify-center rounded-full bg-primary-1 text-white transition-all active:scale-95 active:bg-primary-2 md:size-11"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      <svg
                        className="size-[19px] md:size-auto"
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.0003 15.3298H14.8337V24.4964C14.8337 24.9826 14.6405 25.449 14.2967 25.7928C13.9529 26.1366 13.4866 26.3298 13.0003 26.3298C12.5141 26.3298 12.0478 26.1366 11.704 25.7928C11.3601 25.449 11.167 24.9826 11.167 24.4964V15.3298H2.00033C1.5141 15.3298 1.04778 15.1366 0.703963 14.7928C0.360147 14.449 0.166992 13.9826 0.166992 13.4964C0.166992 13.0102 0.360147 12.5439 0.703963 12.2001C1.04778 11.8562 1.5141 11.6631 2.00033 11.6631H11.167V2.49642C11.167 2.01019 11.3601 1.54387 11.704 1.20006C12.0478 0.85624 12.5141 0.663086 13.0003 0.663086C13.4866 0.663086 13.9529 0.85624 14.2967 1.20006C14.6405 1.54387 14.8337 2.01019 14.8337 2.49642V11.6631H24.0003C24.4866 11.6631 24.9529 11.8562 25.2967 12.2001C25.6405 12.5439 25.8337 13.0102 25.8337 13.4964C25.8337 13.9826 25.6405 14.449 25.2967 14.7928C24.9529 15.1366 24.4866 15.3298 24.0003 15.3298Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-6">
                  <button className="flex-1 rounded-2xl border border-primary-3 text-h7 text-primary-2 md:border-2 xl:text-h4">
                    加入購物車
                  </button>
                  <button className="flex-1 rounded-2xl bg-secondary-1 py-4 text-h7 text-white xl:text-h4">
                    直接購買
                  </button>
                </div>
              </div>

              <div className="space-y-4 text-grey-2 md:mb-8 xl:text-fs-5">
                <p>
                  這款可愛的貓咪造型零錢包,由愛心手工編織而成,每一針每一線都蘊含著對流浪動物的深切關懷。購買這款零錢包,不僅能為您的日常生活添加一抹溫暖的色彩,更代表著您對流浪動物保護工作的支持。
                </p>
                <p>
                  每一件商品的銷售收益,將直接用於幫助和照顧更多無家可歸的貓狗,讓愛從您的手中開始,延伸到需要幫助的每一個小生命。
                </p>
                <p>❤義賣收入全數用於本園區所有浪浪的醫療與照顧開銷。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Wave4 className="bottom-0 text-primary-1" />
    </main>
  );
}
