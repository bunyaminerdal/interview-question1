export interface data {
    media: Media[];
    actions: Action[];
    // extras: Extras;
    details: Detail[];
    // type: string;
    id: number;
    location: Location;
}

export interface Action {
    comment: string;
    task_id: string | null;
    title: string;
    user: string;
    date: string;
    action_taken: boolean;
    action_id: number;
}

export interface Detail {
    // format: string;
    value: string;
    title: string;
    link?: string;
}

export interface Extras {
    new: boolean;
    vehicle_id: number;
    driver_id: string;
}

export interface Location {
    latitude: number;
    // type: string;
    longitude: number;
}

export interface Media {
    url: string;
    type: string;
}