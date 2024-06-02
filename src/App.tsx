import React, { useState } from 'react';
import { Column, DataGrid } from 'devextreme-react/data-grid';
import { Flight } from './data/dataTypes';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';
import { flights } from './data/dataFligths';

const FlightDetails: React.FC<{ flight: Flight; onClose: () => void }> = ({ flight, onClose }) => {
  return (
    <div>
      <button className="button" onClick={onClose}>
        x
      </button>
      <h5 className="subtitle">Flight Details {flight.iataAirlineCode}</h5>
      <DataGrid dataSource={flight.contingents} showBorders={true} width="100%">
        <Column dataField="clientCode" caption="Client Code" />
        <Column dataField="totalSeats" caption="Total Seats" />
        <Column dataField="bookedSeats" caption="Booked Seats" />
      </DataGrid>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const onSelectionChanged = (e: any) => {
    setSelectedFlight(e.selectedRowsData[0] || null);
  };

  return (
    <div>
      <div className="container">
        <img src="./Assets/logoAirXelerate.png" alt="AirXelerate" className="logo" />
      </div>

      <h5 className="subtitle">Flight List</h5>
      <DataGrid
        dataSource={flights}
        onSelectionChanged={onSelectionChanged}
        selection={{ mode: 'single' }}
        showBorders={true}
        height={300}
     
      >
        <Column
          caption="Flight"
          cellRender={({ data }) => (`${data.iataAirlineCode } ${data.flightNumber}`)}
        />
        <Column dataField="flightDate" caption="Flight Date" />
        <Column
          caption="Route"
          cellRender={({ data }) => `${data.origin} → ${data.destination}`}
        />
      </DataGrid>

      {selectedFlight && (
        <FlightDetails flight={selectedFlight} onClose={() => setSelectedFlight(null)} />
      )}
    </div>
  );
};

export default App;
