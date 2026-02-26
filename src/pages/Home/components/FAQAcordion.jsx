import acordionDatas from "../../../Data/acordionDatas";
import { useState, useCallback } from "react";
import FAQItem from "./FAQItem";

function FAQAcordion() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <ul className="space-y-2 z-10">
      {acordionDatas.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          toggle={handleToggle}
        />
      ))}
    </ul>
  );
}

export default FAQAcordion;
