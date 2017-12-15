export enum AddressTypes { CITY = 'locality', STATE = 'administrative_area_level_1', COUNTRY = 'country', PIN = 'postal_code' }

export class AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export class GeometricLocation {
    latitude: Number;
    longitude: Number;
    zoom: Number;
}
