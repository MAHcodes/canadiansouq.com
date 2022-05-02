import styled from "styled-components"

const Button = () => {
  return (
    <StyledButton>
      Shop Now
    </StyledButton>
  )
}

const StyledButton = styled.button`
 padding: 1rem 1.75rem; 
 background-color: rgb(var(--black));
 color: rgb(var(--white));
 border-radius: var(--br);
 font-weight: bold;
 transition: box-shadow var(--td) var(--ttf);
 cursor: pointer;

 &:focus,
 &:hover {
   box-shadow: .5rem .5rem 1rem -.5rem rgba(var(--black), 60%),
   inset .5rem .5rem 1rem -.5rem rgba(var(--white), 40%);
 }
`

export default Button
