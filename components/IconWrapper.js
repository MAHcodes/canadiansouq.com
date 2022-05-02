import styled from "styled-components"

const IconWrapper = ({children}) => {
  return (
    <IconDiv>
      {children}      
    </IconDiv>
  )
}

const IconDiv = styled.div`
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  cursor: pointer;
  border-radius: var(--br);
  transition: background-color var(--td) var(--ttf);

  &:focus,
  &:hover {
    background-color: rgba(var(--gray), 20%);
  }
`

export default IconWrapper
