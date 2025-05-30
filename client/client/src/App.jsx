import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
