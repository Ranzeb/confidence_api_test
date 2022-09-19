import { render } from "@testing-library/react";
import Card from "./Card";

describe(Card, () => {
    it("Card displays correct location values", () => {
        const currentLocation = {
            locationName: "Parma",
            locationDetails: "Surrounded by plains",
            locationType: "Plain on North Italy",
            address: {
                addressLine1: "Via G. Ferrari 4",
                city: "Traversetolo",
                state: "Italy",
                zip: "43029"
            }
        }
        const { getByTestId } = render(<Card locationData={currentLocation}/>)
        const currentLocationValue = getByTestId("testLocationName").textContent;
        const currentLocationDetails = getByTestId("testLocationDetails").textContent;
        const currentLocationType = getByTestId("testLocationType").textContent;
        const currentLocationAddressLine = getByTestId("testLocationAddressLine").textContent;
        const currentLocationAddress = getByTestId("testLocationAddress").textContent;
        expect(currentLocationValue).toEqual("Parma");
        expect(currentLocationDetails).toEqual("Details: Surrounded by plains");
        expect(currentLocationType).toEqual("Type: Plain on North Italy");
        expect(currentLocationAddressLine).toEqual("Via G. Ferrari 4");
        expect(currentLocationAddress).toEqual("Traversetolo, Italy, 43029");
    });
})