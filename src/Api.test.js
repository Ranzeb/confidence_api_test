// api.test.js
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { getLocations } from './Api'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Testing correcteness of confidence's API call
it("Renders location data", async () => {
  const fakeLocations = [
        {
            "locationId":"ABBB0C49",
            "locationName":"Airbnb - Mountains",
            "locationDetails":"",
            "locationType":"Airbnb",
            "numberofTasks":10,
            "numberofMyTasks":10,
            "numberofDevices":0,
            "address":{
                "addressLine1":"5600 3rd Street",
                "city":"San Francisco",
                "state":"CA",
                "zip":"94124"
            },
            "locationUserRole":"Member",
            "active":true,
            "subscriptionActive":true
        },
        {
            "locationId":"GOVG57YG",
            "locationName":"Govt Offices",
            "locationDetails":"",
            "locationType":"Government",
            "numberofTasks":1,
            "numberofMyTasks":1,
            "numberofDevices":0,
            "address":{
                    "addressLine1":"425 1st Street",
                    "city":"San Francisco",
                    "state":"CA",
                    "zip":"94105"
            },
            "locationUserRole":"Member",
            "active":true,
            "subscriptionActive":true
        },
        {
            "locationId":"BUSBMJFT",
            "locationName":"SRP Restaurant",
            "locationDetails":"Restaurant 1",
            "locationType":"Business",
            "numberofTasks":1,
            "numberofMyTasks":1,
            "numberofDevices":0,
            "address":{
                    "addressLine1":"233 Franklin Street",
                    "city":"San Francisco",
                    "state":"CA",
                    "zip":"94102"
            },
            "locationUserRole":"Manager",
            "active":true,
            "subscriptionActive":true
        },
  ]

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeLocations)
    })
  );


  const locationsData = await getLocations(0);
  
  expect(locationsData).toEqual(fakeLocations);

  global.fetch.mockRestore();
});
