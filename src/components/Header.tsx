import React from "react";
import {
    Heading,
} from "@kiwicom/orbit-components";
import styled from "styled-components";
import Image from "next/image";
import thailandImg from "../img/thailand.jpeg";

const CoverImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const Header = () => {
    return (
        <div>
        <CoverImage
            src={thailandImg}
            alt="Cover Image"
        />
        <Heading type="title3">
            Prague → Bangkok
        </Heading>
        </div>
    );
}

export default Header;