import HomeCards from "./components/HomeCards";
import Jumbotron from "./components/Jumbotron";
import {
  description,
  customers,
  strengths,
  servicesOffer,
  customerRating,
} from "./tools/data";
import ProfAffordAgile from "./components/ProfAffordAgile";
import OurCustomers from "./components/OurCustomers";
import Flowchart from "./components/Flowchart";
import SliderMeetPeople from "./components/SliderMeetPeople";
import SliderServicesOffer from "./components/SliderServicesOffer";
import SlideRating from "./components/SlideRating";
import ScrollerStrengths from "./components/ScrollerStrengths";

function Home({ heroImage, logoImage, image4, image3 }) {
  return (
    <div>
      <div>
        <Jumbotron
          cssClass="homeJumbotron"
          image={heroImage}
          logo={logoImage}
          description={description.homeMessage}
        />
        <div className="scrollerWrapper bg-black text-white box-border h-24 w-full pt-8 mb-32">
          <div className="scroller flex max-w-screen-lg">
            <ScrollerStrengths arrayItems={strengths} />
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="mx-20">
          <HomeCards
            title="About Mindfinia"
            image={image4}
            description={description.about}
          />
        </div>
        <SliderMeetPeople />
        <SliderServicesOffer servicesOffer={servicesOffer} />
        <div className="mx-20">
          <HomeCards
            title="Why Choose Us"
            subTitle="UNMATCHED EXPERTISE, EMPOWERING SCALABILITY, & IRRESISTIBLE COMPETITIVE PRICING"
            image={image3}
            description={description.whychooseus}
          />
        </div>
        <ProfAffordAgile description={description} />
        <OurCustomers customers={customers} />
        <SlideRating customerRating={customerRating} />
        <div className="my-10 syneFont text-xl md:text-4xl text-neutral-800">
          <h3 className="flex justify-center font-normal">Work Flow</h3>
          <h3 className="flex justify-center font-semibold">How we Work</h3>
        </div>
        <Flowchart />
      </div>
    </div>
  );
}

export default Home;
