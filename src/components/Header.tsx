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

const TripHeading = styled.div`
    position: absolute;
    color: white;
    bottom: 0.5em;
  left: 1em;
  font-size: 1.5em;
  font-weight: 500;
`;

const Box = styled.div`
    position: relative;
`;

const Layover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0.18953518907563027) 71%, rgba(0,0,0,1) 100%);
`;

const Header = () => {
    return (
        <Box>
            <Layover />
            <CoverImage
                src={thailandImg}
                alt="Cover Image"
            />
            <TripHeading type="title3">
                Prague → Bangkok
            </TripHeading>
        </Box>
    );
}

export default Header;