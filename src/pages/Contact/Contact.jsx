import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import "../Contact/Contact.css";
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

