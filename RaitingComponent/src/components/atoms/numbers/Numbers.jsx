import { useState } from "react";
import styled from "styled-components";
import BackIntergace from "../backInterface/BackIntergace";

const data= [
    {
        id: 1,
        number: '1'
    },
    {
        id: 2,
        number: '2'
    },
    {
        id: 3,
        number: '3'
    },
    {
        id: 4,
        number: '4'
    },
    {
        id: 5,
        number: '5'
    },
]
const NumberTagP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: baseline;
    margin: 24px 0 32px 0;
    width: 51px;
    height: 51px;
    background-color: ${(props) => (props.color ? "#FC7614" : "#262E38")};
    border-radius: 50px;
    color: ${(props) => (props.color ? "white" : "#7C8798")};
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Overpass;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: 0.2px;
    transition: all ease-out 0.3s;
    &:hover {
        cursor: pointer;
        color: white; 
        background-color: #7C8798; 
    }
`;
const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SubmitButton = styled.button`
    width: 341px;
    height: 45px;
    border-radius: 22.5px;
    background: #FC7614;
    color: white;
    transition: all ease-out 0.3s;
    font-family: Overpass;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
        background: white;
        color: #FC7614;
    }
`;
const Number = () => {
    const [active, setActive] = useState(0);
    const [submit, setSubmit] = useState(0)

    const handlerClick = (e) => {
        setActive(e.target.id); 
        console.log(active);
        console.log(e.target.id)
    };
    const handlerSubmit = () => {
        setSubmit(active)
    }
 return (
    <>
        {submit == 0 && 
            <>
                <ContainerDiv>
                    {data.map((item, index) => {
                        return (
                            <NumberTagP 
                                key={index} 
                                id={item.id}
                                onClick={handlerClick} 
                                color={active == item.id}
                            >
                                {item.number}
                            </NumberTagP>
                        )
                    })}
                </ContainerDiv>
                <SubmitButton onClick={handlerSubmit}>SUBMIT</SubmitButton>
            </>
        }
        {submit > 0 &&
            <BackIntergace submit={submit} />
        }
    </>
  )
}

export default Number;