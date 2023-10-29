import nodeLogo from "../images/nodejs.png";
import phpLogo from "../images/PHP.png";
import mysqlLogo from "../images/mysql.png";
import javaLogo from "../images/Java.png";
import dotNetLogo from "../images/NETCore.png";
import pythonLogo from "../images/Python.png";
import rubyRailsLogo from "../images/RubyOnRails.png";
import mongoLogo from "../images/mongoDB.png";
import goLogo from "../images/Go.png";
import profileImage1 from "../images/profileImage1.jpg";
import profileImage2 from "../images/profileImage2.jpeg";
import profileImage3 from "../images/profileImage3.jpg";
import profileImage4 from "../images/profileImage4.jpg";
import profileImage5 from "../images/profileImage5.jpg";

export const description = {
  about:
    "Welcome to Gravity Infosolutions, a visionary force reshaping the landscape of Digital Transformation, CRM, and Cloud Consulting. We ignite a global revolution in IT Services, forging strategic alliances with industry giants like Salesforce, AWS, Google Cloud, and Dynamics 365. Our mission? To empower businesses with the tools and strategies they need to not only thrive but surpass all expectations, delivering unprecedented growth on a global scale.",
  whychooseus:
    "Gravity Infosolutions is a dynamic digital transformation, Salesforce consulting and development powerhouse, dedicated to empowering businesses to unleash the full potential of the Salesforce platform. With a comprehensive suite of cutting-edge services, we enable organizations to embark on seamless Salesforce implementation, tailor-made customization, seamless integration, streamlined migration, and unwavering support. We are your trusted partner in harnessing the transformative power of Salesforce to drive unprecedented growth, enhance operational efficiency, and achieve unrivaled success.",
  whoweare:
    "Who we Are - Welcome to Gravity Infosolutions, a visionary force reshaping the landscape of Digital Transformation, CRM, and Cloud Consulting. We ignite a global revolution in IT Services, forging strategic alliances with industry giants like Salesforce, AWS, Google Cloud, and Dynamics 365. Our mission? To empower businesses with the tools and strategies they need to not only thrive but surpass all expectations, delivering unprecedented growth on a global scale.",
  ourvision:
    "Our Vision - Welcome to Gravity Infosolutions, a visionary force reshaping the landscape of Digital Transformation, CRM, and Cloud Consulting. We ignite a global revolution in IT Services, forging strategic alliances with industry giants like Salesforce, AWS, Google Cloud, and Dynamics 365. Our mission? To empower businesses with the tools and strategies they need to not only thrive but surpass all expectations, delivering unprecedented growth on a global scale.",
  ourmission:
    "Our Mission - Welcome to Gravity Infosolutions, a visionary force reshaping the landscape of Digital Transformation, CRM, and Cloud Consulting. We ignite a global revolution in IT Services, forging strategic alliances with industry giants like Salesforce, AWS, Google Cloud, and Dynamics 365. Our mission? To empower businesses with the tools and strategies they need to not only thrive but surpass all expectations, delivering unprecedented growth on a global scale.",
  proficiency:
    "Gravity Infosolutions expertise spans consulting, development, integration, delivering tailored high-quality solutions to meet specific industry needs.",
  affordability:
    "Gravity Infosolutions expertise spans consulting, development, integration, delivering tailored high-quality solutions to meet specific industry needs.",
  agility:
    "Gravity Infosolutions expertise spans consulting, development, integration, delivering tailored high-quality solutions to meet specific industry needs.",
  homeMessage:
    'Mindfinia" combines intellectual expertise ("Mind") with limitless technological possibilities ("Finia"), encapsulating a promise of strategic insight and boundless solutions for technology consulting and services',
};

export const strengths = [
  "ADAPTABILITY",
  "EXPERTISE",
  "INTEGRITY",
  "IMPROVEMENT",
  "QUALITY",
  "CUSTOMER",
  "SATISFACTION",
  "TRANSPARENCY",
  "COLLABORATION",
];

export const customers = [
  nodeLogo,
  phpLogo,
  mysqlLogo,
  javaLogo,
  dotNetLogo,
  pythonLogo,
  rubyRailsLogo,
  goLogo,
  mongoLogo,
];

export const menuItems = {
  solution: ["Product", "Services"],
  contactUs: [<a href="#">Career</a>, "Contact Details"],
  aboutUs: ["Gravity", "Info solutions", "Landscape"],
};

export const howWeWork = [
  {
    title: "Consultation",
    content: `We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.`,
  },
  {
    title: "Planning",
    content: `Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.`,
  },
  {
    title: "Implementation",
    content: `We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently`,
  },
  {
    title: "Customization",
    content: `Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.`,
  },
];

export const servicesOffer = [
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "fa-solid fa-code",
    title: "Web Design Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "fa-solid fa-table-columns",
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    icon: "fa-solid fa-table-columns",
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export const customerRating = [
  {
    key: 1,
    clientName: "Zomeena De Silva",
    ocupation: "Janet Cosmetics",
    profileImage: (
      <img
        className="w-20 h-20 rounded-full"
        src={profileImage1}
        alt="Profile "
      />
    ),
    comments:
      "1-Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    stars: (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
    ),
  },
  {
    key: 2,
    clientName: "Komeena De Silva",
    ocupation: "Janet Cosmetics",
    profileImage: (
      <img
        className="w-20 h-20 rounded-full"
        src={profileImage2}
        alt="Profile"
      />
    ),
    comments:
      "2-Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    stars: (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </div>
    ),
  },
  {
    key: 3,
    clientName: "Imran Khan",
    ocupation: "Software Engineer",
    profileImage: (
      <img
        className="w-20 h-20 rounded-full"
        src={profileImage3}
        alt="Profile"
      />
    ),
    comments:
      "3-Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    stars: (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
    ),
  },
  {
    key: 4,
    clientName: "Yomeena De Silva",
    ocupation: "Janet Cosmetics",
    profileImage: (
      <img
        className="w-20 h-20 rounded-full"
        src={profileImage4}
        alt="Profile"
      />
    ),
    comments:
      "4-Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    stars: (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
      </div>
    ),
  },
  {
    key: 5,
    clientName: "Lomeena De Silva",
    ocupation: "Janet Cosmetics",
    profileImage: (
      <img
        className="w-20 h-20 rounded-full"
        src={profileImage5}
        alt="Profile"
      />
    ),
    comments:
      "5-Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    stars: (
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </div>
    ),
  },
];
