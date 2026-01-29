export type EventType =
    | "Indoor Funday"
    | "Outdoor Funday"
    | "Competition"
    | "Team Competition"
    | "Monthly Challenges";

export interface ClimbingEvent {
    id: string;
    dateUploaded: string;
    eventName: string;
    eventType: EventType;
    dateOfEvent: string;
    time: string;
    location: string;
    price: string;
    details: string;
    hashtags: string[];
    image: string;
    signupLink?: string;
}
