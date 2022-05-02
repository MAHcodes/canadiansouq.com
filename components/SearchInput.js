import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import IconWrapper from "./IconWrapper";

const SearchInput = () => {
  const [searchHidden, setSearchHidden] = useState(true);
  const searchRef = useRef();
  const handleClick = () => {
    if (searchRef.current.focus) setSearchHidden(false);
    searchRef.current.focus();
  };

  return (
    <InputDiv>
      <Input
        ref={searchRef}
        onBlur={() => {
          setSearchHidden(true);
        }}
        className={`${searchHidden ? "hidden" : undefined}`}
        type="search"
        placeholder="What are you looking for?"
      />

      <IconWrapper title="Search">
        <Svg
          onClick={handleClick}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
            fill="#F5F5F5"
          />
        </Svg>
      </IconWrapper>
    </InputDiv>
  );
};

const InputDiv = styled.div`
  border-radius: var(--br);
  display: flex;
  align-items: center;
  justify-conetent: center;
  position: relative;
`;

const Input = styled.input`
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  position: absolute;
  inset: 0 0 0 auto;
  transition: width var(--td) var(--ttf);
  height :100%;
  transform-origin: right center;
  border-radius: var(--br);
  width: calc(100vw - 6.75rem);
  max-width: 20rem;
  padding-inline: .75rem; 
  font-size: .85rem;
  z-index: 5;

  &.hidden {
    width: 0;
    padding: 0;
  }
`;

const Svg = styled.svg`
  padding: 0.25rem;
  width: var(--size);
  height: var(--size);

  & path {
    fill: rgb(var(--white));
  }
`;

export default SearchInput;
