import styled from "styled-components"

export const Button = (props) => {

    const {name, handleClick} = props;

    const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 100%;
    border: 1px solid yellow;
    border-radius: 10px;
    padding: 10px;
    color: #BF4F74;
    background: transparent;
    `

    return (
        <StyledButton onClick={handleClick}>{name}</StyledButton>
    )
}