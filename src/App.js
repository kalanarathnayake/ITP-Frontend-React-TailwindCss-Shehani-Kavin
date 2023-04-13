import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

import { DocumentList } from "./components/document-list.component";
import { CreateDocument } from "./components/document-add.component";

import { CreateTicket } from "./components/ticket-add.component";
import { TicketList } from './components/ticket-list.component';

import { CusTicketList } from './components/custicket-list.component';
import { CreateCusTicket } from './components/custicket-add.component';
import { TourPackageList } from './components/tourpackage-list.component';
import { CreateTour } from './components/tourpackage-add.component';
import { TourList } from './components/adtourpackage.list.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/document" element={<DocumentList />} />
          <Route exact path="/createDocument" element={<CreateDocument />} />

          <Route exact path="/createTicket" element={<CreateTicket />} />
          <Route exact path="/ticket" element={<TicketList />} />

          <Route exact path="/createCustomerTicket" element={<CreateCusTicket />} />
          <Route exact path="/customerTicket" element={<CusTicketList />} />

          <Route exact path="/tour" element={<TourPackageList />} />
          <Route exact path="/createTour" element={<CreateTour />} />

          <Route exact path="/adTourPackageList" element={<TourList />} />


        </Routes>
      </Router>
    </div>
  );

}

export default App;
