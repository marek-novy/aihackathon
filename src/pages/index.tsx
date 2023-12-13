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
    Box,
} from "@kiwicom/orbit-components";
import styled from "styled-components";
import Image from "next/image";
import thailandImg from "../img/thailand.jpeg";
import Trip from "../components/Trip";
import Header from "../components/Header";

const MyTripCard = () => {
  return (
    <div style={{ width: '400px', margin: 'auto', padding: '2em'}}>
    <Card>
      <Stack direction="column">
        <Header />
        <Trip />
        <Button>Show itinerary details</Button>
      </Stack>
    </Card>
    </div>
  );
};

export default MyTripCard;
