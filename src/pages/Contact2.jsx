import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "./Contact2.css";
export default function Contact2() {
  return (
    <>
      <div className="contact-holder">
        <div className="contact-info">
          <ContactInfo />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

