import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstitutionsPage from "./pages/InstitutionsPage";
import "antd/dist/reset.css";
import DummyPage from "./pages/DummyANTPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/api/institution-mgmt/institutions"
            element={<InstitutionsPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
