import styled, {css} from 'styled-components';

/* Button -> Remember that all React Components have to start with a Capital letter */
const Button = styled.button`
    color: white;
    background-color: ${(props) => props.secondary ? '#fdd54f' : '#f8049c'};
    font-weight: bold;
    cursor: pointer;
    ${(props) => props.large ? css`
        padding: 10px;
        font-size: 1.5em;
        border-radius: 5px;
    ` : css`
        padding: 8px;
        font-size: 1em;
        border-radius: 4px;
    
    `}
    box-shadow: none;
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