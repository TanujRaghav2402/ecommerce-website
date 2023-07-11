import React from "react";
import {AiFillMinusCircle ,AiFillPlusCircle} from "react-icons/ai"
import { styled } from "styled-components";

export const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper className="section">
      <div className="thisbutton">
        <button onClick={() => setDecrease()}>
            <div className="head"><AiFillMinusCircle /></div>
        </button>
        <div className="amount">{amount}</div>
        <button onClick={() => setIncrease()}>
            <div className="head"><AiFillPlusCircle /></div>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
button{
    background-color:inherit;
    border:none;
    font-size:medium;
    margin-left:20%;
    margin-right:20%;
}
.thisbutton{
    display:flex;
    justify-content:space-around;

}
.amount{
    font-size:larger;
}
`


