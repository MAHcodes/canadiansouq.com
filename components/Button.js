import styled from "styled-components"

const Button = ({text, widthFull, sec, padding}) => {
  return (
    <StyledButton sec={sec} pd={padding} widthFull={widthFull} icon>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
 color: rgb(var(--white));
 border-radius: var(--br);
 font-weight: bold;
 transition: box-shadow var(--td) var(--ttf);
 cursor: pointer;
 text-align: center;
 white-space:nowrap;
 display: flex;
 align-items: center;
 justify-content: center;

 width: ${props => props.widthFull && "100%"};
 padding: ${props => props.pd || "1em 1.75em"}; 

 background-color: ${props => props.sec ? "transparent" : "rgb(var(--black))" };
 border:${props => props.sec ? "2px solid rgb(var(--black))" : "rgb(var(--black))" };

 & > svg {
   width: var(--icon-size);
   height: var(--icon-size);
 }

 &:focus,
 &:hover {
   box-shadow: .5rem .5rem 1rem -.5rem rgba(var(--black), 60%),
   inset .5rem .5rem 1rem -.5rem rgba(var(--white), 40%);
 }
 &:active {
   box-shadow: -.5rem -.5rem 1rem -.5rem rgba(var(--black), 60%),
   inset -.5rem -.5rem 1rem -.5rem rgba(var(--white), 40%);
 }
`

export default Button
