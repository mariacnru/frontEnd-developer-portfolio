import acordionDatas from "../../../Data/acordionDatas";
import { useState } from "react";
import FAQItem from "./FAQItem";

function FAQAcordion() {
  const [openId, setOpenId] = useState(null);

  return (
    <ul className="space-y-2 z-10">
      {acordionDatas.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          toggle={(id) => setOpenId(openId === id ? null : id)}
        />
      ))}
    </ul>
  );
}

export default FAQAcordion;
