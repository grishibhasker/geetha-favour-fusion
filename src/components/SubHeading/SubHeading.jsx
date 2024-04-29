import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p style={{ color: "white" }} className="p_cormorant">
      {title}
    </p>
    <img src={images.spoon} alt="Spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
