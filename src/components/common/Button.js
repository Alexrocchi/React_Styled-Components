import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const largeStyles = ({large}) => {
    if(large){
        return css`
            padding: 10px;
            font-size: 1.5em;
            border-radius: 5px;
        `;
    }else{
        return css`
            padding: 8px;
            font-size: 1em;
            border-radius: 4px;
        
        `;
    }
}

/* Button -> Remember that all React Components have to start with a Capital letter */
const Button = styled.button`
    color: white;
    background-color: ${(props) => props.secondary ? props => props.theme.secondaryColor : props => props.theme.primaryColor};
    font-weight: bold;
    cursor: pointer;
    ${largeStyles};
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

Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export {Button};