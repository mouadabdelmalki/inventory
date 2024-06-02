
export interface Contingent {
    clientCode: string;
    totalSeats: number;
    bookedSeats: number;
  }
  
export interface Flight {
    iataAirlineCode: string;
    flightNumber: string;
    flightDate: string;
    origin: string;
    destination: string;
    contingents: Contingent[];
  }
  