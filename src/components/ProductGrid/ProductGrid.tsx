import { ProductProps } from "../../types";
import { ProductItem } from "../GridItem/ProductItem";
import "./ProductGrid.css";

interface IProductGrid {
  data: ProductProps[];
}

const ProductGrid = ({ data }: IProductGrid) => {
  return (
    <div className="product-grid">
      <span>Showing {data?.length} Products</span>
      <div className="product-grid-item">
        {data?.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export { ProductGrid };
