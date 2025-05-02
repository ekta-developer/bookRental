import React, { lazy, Suspense, useLayoutEffect } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../component/Layout/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const AppRouter = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  );
};

// Wrap your App component with React.Suspense to handle lazy loading
function RouterWithLazyLoading() {
  return (
    <Suspense
      fallback={
        <div
          className=""
          style={{
            position: "absolute",
            top: "35%",
            left: "45%",
            textAlign: "center",
            verticalAlign: "center",
          }}
        >
          {/* <PropagateLoader color="#816bff" size={20} /> */}
          <img
            className="loader-logo"
            src={mainImageLoader}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      }
    >
      <AppRouter />
    </Suspense>
  );
}

export default AppRouter;
