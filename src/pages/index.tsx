import {
  Alert,
  Card,
  CardSection,
  Illustration,
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
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <button className="text-indigo-600 hover:text-indigo-800">
          Show itinerary details
        </button>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-800">
          Check-in
        </button>
      </div>
    </div>
  );
};

export default MyTripCard;
