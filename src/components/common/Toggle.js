import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background-image: linear-gradient(to right, ${props => props.theme.primaryColor}, ${props => props.theme.secondaryColor});
`;

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '27px' : '1px'});
`;

export function Toggle({isActive, onToggle}){
    return (
        <ToggleWrapper onClick={onToggle}>
            <Notch isActive={isActive} />
        </ToggleWrapper>
    )
}