import { Flight } from "./dataTypes";

export const flights: Flight[] = [
    {
      iataAirlineCode: 'AA',
      flightNumber: '100',
      flightDate: '2024-06-01',
      origin: 'JFK',
      destination: 'LAX',
      contingents: [
        { clientCode: 'C1', totalSeats: 100, bookedSeats: 50 },
        { clientCode: 'C2', totalSeats: 50, bookedSeats: 25 }
      ]
    },
    {
      iataAirlineCode: 'DL',
      flightNumber: '200',
      flightDate: '2024-06-02',
      origin: 'ATL',
      destination: 'ORD',
      contingents: [
        { clientCode: 'C3', totalSeats: 120, bookedSeats: 60 },
        { clientCode: 'C4', totalSeats: 60, bookedSeats: 30 }
      ]
    },
    {
      iataAirlineCode: 'UA',
      flightNumber: '300',
      flightDate: '2024-06-03',
      origin: 'SFO',
      destination: 'DEN',
      contingents: [
        { clientCode: 'C5', totalSeats: 80, bookedSeats: 40 },
        { clientCode: 'C6', totalSeats: 40, bookedSeats: 20 }
      ]
    },
    {
      iataAirlineCode: 'SW',
      flightNumber: '400',
      flightDate: '2024-06-04',
      origin: 'LAX',
      destination: 'LAS',
      contingents: [
        { clientCode: 'C7', totalSeats: 150, bookedSeats: 75 },
        { clientCode: 'C8', totalSeats: 75, bookedSeats: 35 }
      ]
    },
    {
      iataAirlineCode: 'BA',
      flightNumber: '500',
      flightDate: '2024-06-05',
      origin: 'LHR',
      destination: 'JFK',
      contingents: [
        { clientCode: 'C9', totalSeats: 200, bookedSeats: 100 },
        { clientCode: 'C10', totalSeats: 100, bookedSeats: 50 }
      ]
    },
    {
      iataAirlineCode: 'AF',
      flightNumber: '600',
      flightDate: '2024-06-06',
      origin: 'CDG',
      destination: 'JFK',
      contingents: [
        { clientCode: 'C11', totalSeats: 180, bookedSeats: 90 },
        { clientCode: 'C12', totalSeats: 90, bookedSeats: 45 }
      ]
    },
    {
      iataAirlineCode: 'LH',
      flightNumber: '700',
      flightDate: '2024-06-07',
      origin: 'FRA',
      destination: 'SFO',
      contingents: [
        { clientCode: 'C13', totalSeats: 220, bookedSeats: 110 },
        { clientCode: 'C14', totalSeats: 110, bookedSeats: 55 }
      ]
    },
    {
      iataAirlineCode: 'EK',
      flightNumber: '800',
      flightDate: '2024-06-08',
      origin: 'DXB',
      destination: 'LAX',
      contingents: [
        { clientCode: 'C15', totalSeats: 300, bookedSeats: 150 },
        { clientCode: 'C16', totalSeats: 150, bookedSeats: 75 }
      ]
    },
    {
      iataAirlineCode: 'QF',
      flightNumber: '900',
      flightDate: '2024-06-09',
      origin: 'SYD',
      destination: 'LAX',
      contingents: [
        { clientCode: 'C17', totalSeats: 250, bookedSeats: 125 },
        { clientCode: 'C18', totalSeats: 125, bookedSeats: 60 }
      ]
    },
    {
      iataAirlineCode: 'NZ',
      flightNumber: '1000',
      flightDate: '2024-06-10',
      origin: 'AKL',
      destination: 'SFO',
      contingents: [
        { clientCode: 'C19', totalSeats: 180, bookedSeats: 90 },
        { clientCode: 'C20', totalSeats: 90, bookedSeats: 45 },
        { clientCode: 'C19', totalSeats: 180, bookedSeats: 90 },
        { clientCode: 'C20', totalSeats: 90, bookedSeats: 45 }
      ]
    },
    {
      iataAirlineCode: 'NK',
      flightNumber: '1000',
      flightDate: '2024-06-10',
      origin: 'NKL',
      destination: 'SFO',
      contingents: [
        { clientCode: 'C19', totalSeats: 180, bookedSeats: 90 },
        { clientCode: 'C20', totalSeats: 90, bookedSeats: 45 }
      ]
    }
  ];