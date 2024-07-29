import { FilterBar, InfoBanner } from "../../components";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <InfoBanner />
      <div className="shop-content">
        <FilterBar />
      </div>   
    </div>
  );
}

export default Shop;