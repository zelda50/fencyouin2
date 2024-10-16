import { useState } from "react";
import Modal from "./modal";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_09ef1h8"; // Replace with your EmailJS service ID
    const ownerTemplateID = "template_xmszl6q"; // Template for your email (form owner)
    const userTemplateID = "template_oe1mo4m"; // Template for the user's confirmation email
    const userID = "s_D846xK8FhLybK3L"; // Replace with your EmailJS user ID
    try {
      // Send the email to yourself (form owner)
      const ownerResponse = await emailjs.send(
        serviceID,
        ownerTemplateID,
        {
          from_name: formData.name,  // Form submitter's name
          from_email: formData.email,  // Form submitter's email
          message: formData.message,  // Form submitter's message
          to_name: "Landmark Creations",
          to_email: "info@fenceyouin.com", // Your email address
        },
        userID
      );

      if (ownerResponse.status === 200) {
        console.log("Email sent to owner successfully.");
      } else {
        setErrorMessage("Failed to send the email to owner.");
        console.error("Failed to send email to owner:", ownerResponse);
      }

      // Send a confirmation email to the user who submitted the form
      const userResponse = await emailjs.send(
        serviceID,
        userTemplateID,
        {
          name: formData.name,  // Form submitter's name
          email: formData.email,  // Form submitter's email (recipient of confirmation email)
        },
        userID
      );

      if (userResponse.status === 200) {
        setIsSubmitted(true);
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        console.error("Failed to send email to user:", userResponse);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <div
      id="Contact-section"
      className={`w-[1440px] relative bg-background-color-primary max-w-full overflow-hidden shrink-0 flex flex-col items-start justify-start py-28 px-16 box-border text-center text-base text-text-primary font-text-medium-normal ${className}`}
    >
      <form
        className="self-stretch flex flex-col md:flex-row items-start justify-start gap-20"
        onSubmit={handleSubmit}
      >
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[300px] md:h-[734px] object-cover"
          alt=""
          src="/picket.webp"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-8">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[150%] text-3xl font-bold">Schedule a free Estimate</div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-left text-29xl">
              <b className="self-stretch relative leading-[120%]">Don&#39;t hesitate to contact us!</b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-6 text-left">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <label className="self-stretch relative leading-[150%]" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="self-stretch bg-background-color-primary border-text-primary border-[1px] border-solid box-border h-[50px] flex flex-row items-center justify-start p-3 text-color-neutral-neutral"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <label className="self-stretch relative leading-[150%]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="self-stretch bg-background-color-primary border-text-primary border-[1px] border-solid box-border h-[50px] flex flex-row items-center justify-start p-3 text-color-neutral-neutral"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <label className="self-stretch relative leading-[150%]" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="self-stretch bg-background-color-primary border-text-primary border-[1px] border-solid box-border h-[182px] flex flex-row items-start justify-start p-3 text-color-neutral-neutral"
                placeholder="Type your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-[101px] bg-black border-black text-white border-[1px] border-solid box-border flex flex-row items-center justify-center py-3 px-6 hover:bg-red-500 hover:text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {isSubmitted && <div className="text-green-500 mt-4">Thank you! Your message has been sent.</div>}
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Success"
        message="Your email has been sent successfully!"
      />
    </div>
  );
};

export default Contact;
