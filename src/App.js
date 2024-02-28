import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";
import { HiOutlinePhone } from "react-icons/hi";

function Header() {
  return (
    <div className="header py-2">
      <img className="logoImage" src="/images/logo.png" alt="logo" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="heroSection py-2">
      <div className="row">
        <div className="trophyImage col-sm-4">
          <img
            src="/images/trophy.png"
            alt="trophy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="description col-sm-8">
          <div style={{ width: "100%" }}>
            <b className="px-2 descriptionHeading">
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.{" "}
            </b>
            <div className="px-3">
              <ul>
                <li className="text-justify">
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li className="text-justify">
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </div>
            <img
              src="images/persons.png"
              alt="persons"
              style={{ width: "98%" }}
            />
            <p style={{ width: "98%"}} className="text-justify">
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="middleSection">
      <p className="p-2">
        <b className="text-justify">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </b>
      </p>
      <img
        src="images/equipments.png"
        alt="equipments"
        style={{ width: "80%", alignSelf: "center" }}
      />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
      <br />
      <p >
        CHEMICALS & PROCESS <b style={{ color: "red" }}>|</b> POWER{" "}
        <b style={{ color: "red" }}>|</b> WATER & WASTE WATER{" "}
        <b style={{ color: "red" }}>|</b> OILS & GAS{" "}
        <b style={{ color: "red" }}>|</b> PHARMA{" "}
        <b style={{ color: "red" }}>|</b> SUGARS & DISTILLERIES{" "}
        <b style={{ color: "red" }}>|</b> PAPER & PULP{" "}
        <b style={{ color: "red" }}>|</b> MARINE & DEFENCE{" "}
        <b style={{ color: "red" }}>|</b> METAL & MINING{" "}
        <b style={{ color: "red" }}>|</b> FOOD & BEVERAGE{" "}
        <b style={{ color: "red" }}>|</b>
        PETROCHEMICAL & REFINERIES <b style={{ color: "red" }}>|</b> SOLAR{" "}
        <b style={{ color: "red" }}>|</b> BUILDING{" "}
        <b style={{ color: "red" }}>|</b> HVAC <b style={{ color: "red" }}>|</b>{" "}
        FIRE FIGHTING <b style={{ color: "red" }}>|</b> AGRICULTURE &
        RESIDENTIAL
      </p>
      <div className="contactSection row">
        <div className="col-sm-4">
          <HiOutlinePhone size="2em" /> Toll free <b>1800 200 1234</b>
        </div>
        <div className="col-sm-4">
          <FaFacebook size="2em" /> <a href="https://www.facebook.com/cripumps" style={{color: 'white', textDecoration: "none"}}>www.facebook.com/cripumps</a>
        </div>
        <div className="col-sm-4">
          <RxGlobe size="2em" /> <a href="https://www.crigroups.com" style={{color: 'white', textDecoration: "none"}}>www.crigroups.com</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MiddleSection />
      <hr className="footerLine" />
      <Footer />
    </div>
  );
}

export default App;
