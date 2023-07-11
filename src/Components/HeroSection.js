import "./HeroSection.css";
import { styled } from "styled-components";
import { NavLink } from "react-bootstrap";

export const HeroSection=()=>{
    return(
        <Wrapper>
        <div className="conatiner">
           <div className="grid-two-columns">
            <div className="grid1">
                <h1>E Store</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam inventore suscipit magnam earum praesentium! Numquam incidunt facilis nulla quae quo voluptates, suscipit rerum ratione amet nam eligendi voluptatum itaque maiores recusandae officiis molestias omnis ipsam. Eveniet, quo. Placeat.</p>
                <NavLink to="/products">   
                    <button className="mainBtn">Shop Now</button>
                </NavLink>
            </div>
            
            <div className="grid2">
                <figure className="mainImage">
                    <img src="https://www.mercatoshoppingmall.com/wp-content/uploads/2022/06/Creativo-Blog-7.jpg" alt="Shopping Image " srcset="" className="pic"/>
                </figure>
            </div>
            
           </div>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
img{
    height: auto;
    width: 70%;
    z-index: 0;
    padding-top: 30px;
    border-radius: 70px 100px;
    
};
.grid1{
   max-width:650px;
   max-height:350px;
}
button:hover{
    background-color: rgb(43, 41, 41);
}
.mainBtn{
    text-decoration: none;
    max-width: auto;
    background-color: black;
    color: white;
    padding: 1.2rem 2.4rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    border-radius: 2.4rem;
}
.mainImage{
    position: relative;
    background-size: contain;
    margin-bottom: 0;
    background-repeat: no-repeat;
    
}
@media (max-width: 400px) {
    .grid-two-columns{
        grid-template-columns: repeat(minmax(200px,1fr));
    }
  }
`
