import React from "react";
import Banner from "./components/Banner";
import ContactWays from "./components/ContactWays";
import Form from "./components/Form";

function ContactPage() {
  return (
    <div className="sm:mx-20">
      <Banner />
      <ContactWays />
      {/* <Form /> */}
    </div>
  );
}

export default ContactPage;
