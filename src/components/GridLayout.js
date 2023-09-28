import { useState } from "react";
import productList from "../data/productGridLaoutSample/productList"

const GridLayout = () => {
  const [products, setProducts] = useState(productList);
  const productElemList = products.map(product => 
    <ul key={product.pid}>
      <a href="">
        <li key={product.image}>
          <img src={product.image}  alt={`${product.name}の商品イメージ`} />
        </li>
        <li className="name" key={product.name}>{product.name}</li>
        <li className="price" key={product.price}><span>Price:</span> {product.price.toLocaleString()}<span>円</span> </li>
      </a>
    </ul>
  );

  return(
    <>
      <p>Please don't misunderstand. This product introduction was created through training.</p>
      {productElemList}
    </>
  )
};

export default GridLayout;