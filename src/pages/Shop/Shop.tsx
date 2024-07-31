import { useQuery } from "@tanstack/react-query";
import { FilterBar, InfoBanner } from "../../components";
import { ProductGrid } from "../../components/ProductGrid/ProductGrid";
import { getProducts } from "../../services/getProducts";
import "./Shop.css";

const Shop = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <div className="shop-container">
      <InfoBanner />
      <div className="shop-content">
        <FilterBar />
        <ProductGrid data={data} />
      </div>   
    </div>
  );
}

export default Shop;