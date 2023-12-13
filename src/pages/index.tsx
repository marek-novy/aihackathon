import React from "react";
import {
  Card,
  Stack,
  Text,
  Heading,
  Button,
  CarrierLogo,
  Itinerary,
  ItinerarySegment,
  ItinerarySegmentDetail,
  TimelineStep,
} from "@kiwicom/orbit-components";
import styled from "styled-components";
import Image from "next/image";
import thailandImg from "../img/thailand.jpeg";

const CoverImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const MyTripCard = () => {
  return (
    <Card>
      <Stack direction="column">
      <CoverImage
        src={thailandImg}
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
      />
        <Heading type="title3">
          Prague → Bangkok
        </Heading>
        <Itinerary>
          <ItinerarySegment>
            test
          </ItinerarySegment>
        </Itinerary>
        <Button>Show itinerary details</Button>
      </Stack>
      <Stack direction="column" >
        <Text>Check-in & boarding passes</Text>
        <Button>Vienna → Prague</Button>
      </Stack>
      <Stack direction="column" >
        <Text>Rebooking & cancellations</Text>
        <Button type="secondary">Show all (4)</Button>
      </Stack>
    </Card>
  );
};

export default MyTripCard;
