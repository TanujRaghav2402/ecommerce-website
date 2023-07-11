import styled from "styled-components";

export const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
       <div className="subcontainer">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </div>
        </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .brand-section {
    padding: 12rem 0 0 0;
  }
  .container {
    max-width: 120rem;
  }
  .subcontainer{
    margin:7%;
    padding-left:3%;
    padding-right:3%;
 }
  h3 {
    text-align: center;
    text-transform: capitalize;
    // font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
    transform:scale(0.7);
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 800px) {
    .brand-section-slider {
      flex-direction:column;
    }
  }
`;
