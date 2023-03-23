import React, { useState } from "react";
import "../../css/css-body/body.css";
import exoplanet from "../assets/carousel images/Room1.jpg";
import Galileo from "../assets/carousel images/Room2.jpg";
import Methane from "../assets/carousel images/Tiffin.png";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? ".Read More" : " Show Less"}
      </span>
    </p>
  );
};

const Body = () => {
  return (
    <div className="container">
      <h3>
        Earth receives first radio signals from planet outside of Solar System
      </h3>
      <img className="container-image" src={exoplanet} alt="exo"></img>

      <p className="readmore-para">
        <ReadMore>
          In a major discovery, astronomers have for the first time detected
          stars that are blasting radio signals hinting at the presence of
          hidden planets around them. The signals were picked up using the
          world’s most powerful radio antenna, the Low-Frequency Array (LOFAR)
          situated in the Netherlands.The new technique of spotting hidden
          planets could hint at the possibility of life in the system, which
          remains the biggest question in astronomy. Are we alone? The signals
          were detected by Dr Benjamin Pope from the University of Queensland
          and his colleagues at the Dutch national observatory ASTRON. The
          astronomers have been searching for planets using LOFAR
        </ReadMore>
      </p>
      <h3 className="para-heading">
        Earth receives first radio signals from planet outside of Solar System
      </h3>
      <img className="container-image" src={Galileo} alt="exo"></img>
      <p className="readmore-para">
        <ReadMore>
          In a major discovery, astronomers have for the first time detected
          stars that are blasting radio signals hinting at the presence of
          hidden planets around them. The signals were picked up using the
          world’s most powerful radio antenna, the Low-Frequency Array (LOFAR)
          situated in the Netherlands.The new technique of spotting hidden
          planets could hint at the possibility of life in the system, which
          remains the biggest question in astronomy. Are we alone? The signals
          were detected by Dr Benjamin Pope from the University of Queensland
          and his colleagues at the Dutch national observatory ASTRON. The
          astronomers have been searching for planets using LOFAR
        </ReadMore>
      </p>
      <h3 className="para-heading">
        Earth receives first radio signals from planet outside of Solar System
      </h3>
      <img className="container-image" src={Methane} alt="exo"></img>
      <p className="readmore-para">
        <ReadMore>
          In a major discovery, astronomers have for the first time detected
          stars that are blasting radio signals hinting at the presence of
          hidden planets around them. The signals were picked up using the
          world’s most powerful radio antenna, the Low-Frequency Array (LOFAR)
          situated in the Netherlands.The new technique of spotting hidden
          planets could hint at the possibility of life in the system, which
          remains the biggest question in astronomy. Are we alone? The signals
          were detected by Dr Benjamin Pope from the University of Queensland
          and his colleagues at the Dutch national observatory ASTRON. The
          astronomers have been searching for planets using LOFAR
        </ReadMore>
      </p>
    </div>
  );
};

export default Body;
