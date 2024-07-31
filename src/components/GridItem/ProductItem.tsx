import { useNavigate } from "react-router-dom";
import { ProductProps } from "../../types";
import "./ProductItem.css";

interface IProductItem {
  product: ProductProps;
}

const ProductItem = ({ product }: IProductItem) => {
  const navigate = useNavigate();

  const coverImage = product.fotos.find((foto) => foto.capa)?.url || "";
  const randomSize =
    product.tamanhos[Math.floor(Math.random() * product.tamanhos.length)];

  const handleClick = () => {
    const routeTitle = product.titulo.replace(/\s+/g, "-").toLowerCase();
    navigate(`/produto/${routeTitle}`);
  };

  return (
    <div onClick={handleClick} className="product-item">
      <img
        src={coverImage}
        alt={product.titulo}
        style={{ backgroundColor: coverImage ? "transparent" : "#c1c1c1" }}
      />
      <div className="product-info">
        <span>{product.titulo}</span>
        <span>{randomSize}</span>
      </div>
    </div>
  );
};

export { ProductItem };
