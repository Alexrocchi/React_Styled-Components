import styled from 'styled-components';

/* Button -> Remember that all React Components have to start with a Capital letter */
const Button = styled.button`
    color: white;
    background-color: #f8049c;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1em;
    border: none;
    width: 100%;
    display: block;
    white-space: none;

    &:disabled{
        background-color: #eee;
        color: #666;
    }
`;

export {Button};