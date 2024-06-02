Project Overview
The project involves creating a flight management application using React and DevExtreme components. The application displays a list of flights and allows users to view detailed information about selected flights.

Key Features
Flight List Display:

Utilized DataGrid from DevExtreme to display a list of flights.
Configured columns to show flight details such as Flight Code, Flight Date, and Route.
Flight Selection:

Implemented a single selection mode in the DataGrid to allow users to select a flight.
Used onSelectionChanged event to capture the selected flight and store it in the component state.
Flight Details View:

Created a FlightDetails component to show detailed information about the selected flight.
Included flight contingents with columns for Client Code, Total Seats, and Booked Seats.
State Management:

Managed the state using React's useState hook to handle the selected flight data.
Conditional rendering to display the flight details component when a flight is selected.
User Interface:

Used DevExtreme's DataGrid for a modern and interactive data table.
Styled the application with custom CSS for a clean and user-friendly interface.
Included an image logo for branding.