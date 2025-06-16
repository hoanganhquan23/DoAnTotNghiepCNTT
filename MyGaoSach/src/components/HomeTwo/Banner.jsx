import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/productApi";

export default function Banner({ className }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          page: 0,
          size: 2,
        };
        const response = await getProducts(params);
        setProducts(response.content);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px] mb-[30px]">
              <div data-aos="fade-right" className="xl:w-1/2 w-full h-full">
                <Link to={`/single-product/${products[0]?.id}`}>
                  <picture>
                    <source
                      media="(min-width:1025px)"
                      srcSet={
                        "https://bizweb.dktcdn.net/thumb/large/100/458/914/themes/913559/assets/picture_5.jpg?1741680889263"
                      }
                    />
                    <img
                      src={
                        "https://bizweb.dktcdn.net/thumb/large/100/458/914/themes/913559/assets/picture_3.jpg?1741680889263"
                      }
                      alt=""
                      className="w-[569px] h-[548px] object-cover"
                    />
                  </picture>
                </Link>
              </div>
              <div
                data-aos="fade-left"
                className="w-1/2 flex xl:flex-col flex-row xl:space-y-[30px] h-full"
              >
                <div className="w-full">
                  <Link to={`/single-product/${products[1]?.id}`}>
                    <img
                      src={
                        "https://bizweb.dktcdn.net/thumb/large/100/458/914/themes/913559/assets/picture_3.jpg?1741680889263"
                      }
                      alt=""
                      className="w-[569px] h-[548px] object-cover"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
