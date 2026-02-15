import { memo } from "react";

function SkilsBox({ id, title, desceription, imgSrc }) {
  return (
    <div className="skill-box">
      <div className="skill-box-icon">
        <img src={imgSrc} alt="icon" />
      </div>
      <div className="skill-box-title">
        <span className="">{id}.</span>
        <h4 className="">{title}</h4>
      </div>
      <p className="skill-box-desceription">{desceription}</p>
    </div>
  );
}

export default memo(SkilsBox);
