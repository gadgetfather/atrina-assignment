import React from "react";
import { Hero, ProductCard } from "../../components";
import { useProduct } from "../../context/product-context";
import styles from "./Homepage.module.css";
export function Homepage() {
  const { data } = useProduct();

  return (
    <div className={styles.homepage_container}>
      <Hero />
      <div className={styles.our_products}>
        <h2 className={styles.section_title}>Featured Products</h2>
        <div className={styles.product_section}>
          {data.slice(0, 4).map((product) => (
            <ProductCard key={product.data_id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
