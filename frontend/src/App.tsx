import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
// import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import React from "react";
import { ModalComponent } from "./components/Modal";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const location = useLocation();
  window.addEventListener("resize", () => {
    console.log(window.innerWidth, "EVENT");
    setWidth(window.innerWidth);
  });

  const removeSlashes = (pathname: String) => {
    return pathname.replace(/\//g, "");
  };

  // useEffect(() => {
  //   return () => console.log("Clean-up");
  // }, [width]);

  return (
    <React.Fragment>
      <ModalComponent />
      <div className="shadow-md">
        <Navbar screenSize={width} />
      </div>
      <div className="p-5 grid-rows-2 gap-5">
        <Main PageTitle={removeSlashes(location.pathname).toUpperCase()} />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
