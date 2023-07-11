import { useProductContext } from "../Context/productContext"
import { Product } from "./Product";
import { styled } from "styled-components";


export const FeatureProducts=()=>{
    const { isLoading,  featureProducts, products } =useProductContext();
    
    if(isLoading){
        return <div>......Loading</div>
    }
    return( 
        <Wrapper className="section">
           <div className="container">
            <div className="subcontainer">
                <div className="heading">
                    <div className="intro-data">Check Now!</div>
                    <div className="common-heading"><h2>Our Featured Products</h2></div>
                </div>
                <div className="flexContainer">
                    {
                        featureProducts.map((elem)=>{
                            return <Product key={elem.id} {...elem} />
                        })
                    }
                 </div>
                </div>
           </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.container {
    max-width: 120rem;
  }
.subcontainer{
    margin:7%;
    padding-left:7%;
    padding-right:7%;
}
.heading{
    text-align:left;
    padding-bottom:3%;
}

.flexContainer{
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    flex-wrap:wrap;
}
@media (max-width: 700px) {
    .flexContainer {
      flex-direction: column;
    }
  }
`