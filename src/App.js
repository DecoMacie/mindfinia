import { Route, Routes } from "react-router-dom";
import logoImage from "./images/WhatsApp_Image_2023-10-05_at_17.25 1.png";
import heroImage from "./images/medium-shot-man-wearing-vr-glasses-1.png";
import groupImage from "./images/group-diverse-people-having-business-meeting 1.png";
import image3 from "./images/image 3.png";
import image4 from "./images/image 4.png";
import image9 from "./images/image 9.png";
import Footer from "./components/Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              heroImage={heroImage}
              logoImage={logoImage}
              image4={image4}
              image3={image3}
            />
          }
        />
        <Route
          path="/About_Us"
          element={
            <AboutUs
              heroImage={image4}
              logoImage={logoImage}
              groupImage={groupImage}
              image9={image9}
            />
          }
        />
      </Routes>
      <div>
        <Footer logo={logoImage} />
      </div>
    </div>
  );
}
export default App;
