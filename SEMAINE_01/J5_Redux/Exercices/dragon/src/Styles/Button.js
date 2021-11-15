import styled from 'styled-components';

const Button = styled.button`
    padding: 0.8rem 1rem;
    margin: 1rem 4rem;
    font-size: ${props => props.size ?? 1.1 }rem;
    background: ${props => props.primary ? "palevioletred" : props => props.secondary ? "tomato" : "white" };
    color: ${props => props.primary ? "white" : props => props.secondary ? "black" : "palevioletred" };
    border: none;
    border-radius: 0.35rem;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    :hover {
        transform: scale(1.05);
    }
    :active{
        transform: scale(0.9);
    }
`;

export default Button;