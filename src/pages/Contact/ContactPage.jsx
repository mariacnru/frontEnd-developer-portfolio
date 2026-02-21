import React from "react";
import Banner from "./components/Banner";
import ContactWays from "./components/ContactWays";
import Form from "./components/Form";
import FormContact from "./components/FormContact";

function ContactPage() {
  return (
    <div className="mx-5 sm:mx-20">
      <Banner />
      <ContactWays />

      <p className="text-center text-xl">ارتباط با من از طریق ایمیل</p>

      <FormContact />
    </div>
  );
}

export default ContactPage;
