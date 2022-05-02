import styled, { keyframes } from "styled-components";
import makitaLogo from "../public/images/makita-logo.svg";
import milwaukeeLogo from "../public/images/milwaukee-logo.svg";
import dewaltLogo from "../public/images/dewalt-logo.svg";
import matcoToolsLogo from "../public/images/matco-tools-logo.svg";
import hiltiLogo from "../public/images/hilti-logo.svg";
import Image from "next/image";

const OurBrands = () => {
  return (
    <div>
      <div className="container">
        <ImagesWrapper>
          <Image src={milwaukeeLogo} alt="Milwaukee Logo" />
          <Image src={hiltiLogo} alt="HILTI Logo" />
          <Image src={dewaltLogo} alt="DeWALT Logo" />
          <Image src={makitaLogo} alt="Makita Logo" />
          <Image src={matcoToolsLogo} alt="Matco Tools Logo" />
        </ImagesWrapper>
      </div>
    </div>
  );
};

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  overflow-x: auto;

  & > span {
    min-width: 500px !important;
  }
`;

export default OurBrands;
