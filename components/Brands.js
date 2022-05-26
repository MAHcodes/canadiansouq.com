import styled from "styled-components";
import makitaLogo from "../public/images/makita-logo.svg";
import milwaukeeLogo from "../public/images/milwaukee-logo.svg";
import dewaltLogo from "../public/images/dewalt-logo.svg";
import matcoToolsLogo from "../public/images/matcotools-logo.svg";
import hiltiLogo from "../public/images/hilti-logo.svg";
import Image from "next/image";

const Brands = () => {
  return (
    <Div>
      <Image src={milwaukeeLogo} alt="Milwaukee Logo" />
      <Image src={hiltiLogo} alt="HILTI Logo" />
      <Image src={dewaltLogo} alt="DeWALT Logo" />
      <Image src={makitaLogo} alt="Makita Logo" />
      <Image src={matcoToolsLogo} alt="Matco Tools Logo" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding-inline: 5vw;

  float: left;
  width: 50%;
  & > span {
    height: 8rem !important;
  }
`;


export default Brands;
