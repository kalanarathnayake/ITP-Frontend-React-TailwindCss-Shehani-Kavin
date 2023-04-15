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

import { InquiryList } from './components/inquiry-list.component';
import { CreateInquiry } from './components/inquiry-add.component';

import { GuideList } from './components/guide-list.component';
import { CreateGuide } from './components/guide-add.component';
import { GuidePackList } from './components/guidePack-list.component';

import { AdInquiryList } from './components/adInquiry-list.component';
import { GuidePackAdminList } from './components/guidePackAdmin-list.component';
import CreateGuidePackage from './components/guidePackAdmin-add.component';

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

          <Route exact path="/inquiry" element={<InquiryList />} />
          <Route exact path="/createInquiry" element={<CreateInquiry />} />

          <Route exact path="/adInquiry" element={<AdInquiryList />} />

          <Route exact path="/guide" element={<GuideList />} />
          <Route exact path="/createGuide" element={<CreateGuide />} />
          <Route exact path="/guidePack" element={<GuidePackList />} />

          <Route exact path="/guidePackAdmin" element={<GuidePackAdminList />} />
          <Route exact path="/createGuidePack" element={<CreateGuidePackage />} />

        </Routes>
      </Router>
    </div>
  );

}

export default App;
