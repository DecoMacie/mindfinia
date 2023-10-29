import HomeCards from "./components/HomeCards";
import Jumbotron from "./components/Jumbotron";
import { description, customers } from "./tools/data";

function AboutUs({ heroImage, logoImage, groupImage, image9 }) {
  return (
    <>
      <div className="relative">
        <Jumbotron
          cssClass="aboutJumbotron"
          image={heroImage}
          logo={logoImage}
          description={description.about}
          title="About Mindfinia"
        />
        <div
          className="heroAbout invisible"
          style={{
            position: "absolute",
            left: "25%",
            top: "50%",
            right: "25%",
          }}
        >
          <div className="overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg w" src={heroImage} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-48 mx-auto">
        <div className="m-24 text-center">
          <h3 className="mb-5 syneFont text-xl md:text-4xl font-semibold text-neutral-800">
            Who We Are
          </h3>
          <p className="rubikFont text-sm md:text-lg text-neutral-600">
            {description.whoweare}
          </p>
          <p className="rubikFont text-sm md:text-lg text-neutral-600">
            {description.whoweare}
          </p>
        </div>
        <div className="mb-24">
          <HomeCards
            title="Our Vision"
            image={groupImage}
            description={description.ourvision}
          />
          <div className="rotateCard">
            <HomeCards
              title="Our Mission"
              image={image9}
              description={description.ourmission}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
