import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/productContext"
import {NavLink} from "react-router-dom"
import { Image } from "../Components/Image";
import { useState } from "react";
import { useCartContext } from "../Context/cartContext";


const API = "https://api.pujakaitem.com/api/products";

export const ProductView = () => {

  const {addProduct} = useCartContext();
  let[imageUrl,setImageUrl] = useState("");
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
    
  const { id } = useParams();
  
  

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading){
    return <div>......Loading</div>
  }

  const {
    id: alias,
    image,
    name,
    price,
    description,
    category,
    stars,
    reviews,
  } = singleProduct;
  
  return (
    <>
      <Wrapper className="section">
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <Image id={id} url={setImageUrl} />
              <img src={imageUrl} alt="This is an Image" srcset="" />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{category}</h4>
              <h1 className="display-5">{name}</h1>
              <p className="lead">
                {stars }{" "}★ ( {reviews} Reviews)
              </p>
              <h3 className="display-6  my-4">₹ {(price/100)}</h3>
              <p className="lead">{description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(id,singleProduct,image)}
              >
                Add to Cart
              </button>
              <NavLink to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};


const Wrapper = styled.section`
*{
  text-align:left;
}
img{
  padding-top:10%;
  height:82%;
  width:90%;
}
`