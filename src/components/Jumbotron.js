import NavBar from "./NavBar";
import { menuItems } from "../tools/data";

function Jumbotron({ logo, description, cssClass, title }) {
  return (
    // <!-- Hero section with background image, heading, subheading and button -->
    <div>
      <div
        className={`${cssClass} relative overflow-hidden bg-cover bg-no-repeat`}
        style={{
          height: "736px",
        }}
      >
        <div className="bg-black-20 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <NavBar logo={logo} menuItems={menuItems} />
        </div>
        <div className="hero-content flex flex-col items-start md:items-center h-full justify-end md:justify-center">
          <h1 className="my-5 syneFont text-6xl md:text-4xl font-semibold">
            {title}
          </h1>
          <h4 className="mb-4 font-semibold w-3/4 text-center">
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
