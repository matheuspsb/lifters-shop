import { useLocation } from "react-router-dom";
import { ProductProps } from "../../types";
import "./ProductDetails.css";
import { CustomButton } from "../../components";
import { Bag } from "@phosphor-icons/react";

const ProductsDetails = () => {
  const location = useLocation();
  const product = location.state?.product as ProductProps;

  if (!product) {
    return (
      <div style={{ color: "black", textAlign: "center" }}>
        Product not found
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-image">
          {product.fotos.map((foto) => (
            <img src={foto.url} alt={product.titulo} key={product.titulo} />
          ))}
        </div>

        <div className="product-details-info">
          <div className="product-info-text">
            <h5>{product.titulo}</h5>
            <span className="product-price">{product.valor}</span>
            <p className="product-description">{product.descricao}</p>
          </div>
          <div className="product-color">
            <span className="product-section-title">Color</span>
            <div className="product-wrap">
              {product.cores.map((cor, index) => (
                <div
                  key={index}
                  className="product-color-item"
                  style={{ backgroundColor: cor.codigo }}
                />
              ))}
            </div>
          </div>
          <div className="product-size">
            <span className="product-section-title">Size</span>
            <div className="product-wrap">
              {product.tamanhos.map((tamanho, index) => (
                <div key={index} className="product-size-item">
                  {tamanho}
                </div>
              ))}
            </div>
          </div>

          <div className="product-footer-actions">
            <CustomButton
              title="Add to bag"
              icon={<Bag size={24}/>}
              titleColor="#ffffff"
              iconColor="#ffffff"
              backgroundColor="#000000"
              onClick={() => alert("Button clicked")}
            />
            <CustomButton
              title="Back"
              titleColor="#000000"
              backgroundColor="#e0e0e0"
              onClick={() => alert("Back button clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
