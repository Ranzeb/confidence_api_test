import * as React from 'react';

function Card(props) {
    return (
        <div className="flex justify-center mb-6 mt-6 ">
            <div className="w-80 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-left" data-testid="testLocationName">{props.locationData.locationName}</h5>
            {props.locationData.locationDetails && (<p className="text-gray-700 text-base mb-4 text-left" data-testid="testLocationDetails">Details: {props.locationData.locationDetails}</p>) || (<p className="text-gray-700 text-base mb-4 text-left">Details: None</p>)}
            <p className="text-gray-700 text-base mb-4 text-left" data-testid="testLocationType">Type: {props.locationData.locationType}</p>
            <p className="text-gray-700 text-base mb-4 text-left" data-testid="testLocationAddressLine">
                {props.locationData.address.addressLine1}
            </p>
            <p className="text-gray-700 text-base mb-4 text-left" data-testid="testLocationAddress">
                {props.locationData.address.city}, {props.locationData.address.state}, {props.locationData.address.zip}
            </p>
            </div>
        </div>
    );
}

export default Card;