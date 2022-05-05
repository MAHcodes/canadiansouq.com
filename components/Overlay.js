import styled from "styled-components"
const Overlay = ({z, action}) => {
  return (
    <Div z={z} onClick={action} />
  )
}

const Div = styled.div`
  position: fixed;
  inset: 0;
  background-color: #000d;
  z-index: ${props =>  props.z };
`

export default Overlay
