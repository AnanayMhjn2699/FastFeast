import { useState } from "react";
import contact from "../images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    setEmail("");
    setMsg("");
    setName("");
    setTimeout(() => {
      setMessage(false);
    }, 1000);
  };
  return (
    <>
      <h1 className="text-center font-bold text-3xl">Contact Us</h1>

      <div className="flex ">
        <div className="m-10 ml-20 ">
          <img
            src={contact}
            alt="contact us"
            className="size-[19.4rem] w-[22rem]"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-10">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="block m-20 mt-5 mb-10 w-64"
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="block m-20 mt-5 mb-10 w-64"
            />
            <textarea
              placeholder="Type your Message here..."
              required
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              value={msg}
              className="block m-20 mt-5 mb-10 w-64"
            ></textarea>
            <button type="submit" className="bg-teal-300 w-24 rounded-md">
              Submit
            </button>
            <p className="text-lg mt-5">
              {message && (
                <span>
                  Thank you for contacting FastFeast, We will reply ASAP.
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
