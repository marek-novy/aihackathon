import {
  Alert,
  Card,
  CardSection,
  Illustration
} from "@kiwicom/orbit-components";

const MyTripCard = () => {
  return (
    <div style={{ width: "400px", margin: "auto", padding: "2em" }}>
      <Alert type="success" spaceAfter="large">
        It Works!
      </Alert>
      <Illustration name="Success" />
      <Card>
        <CardSection>Hello World!</CardSection>
      </Card>
    </div>
  );
};

export default MyTripCard;
