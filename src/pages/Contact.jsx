import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "./Contact.css";
export default function Contact() {
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

