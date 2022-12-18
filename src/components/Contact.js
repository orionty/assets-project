import React,{useState} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ImLocation } from "react-icons/im";
import { RiTimeFill } from "react-icons/ri";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Axios from 'axios';

function Contact() {

  const[name,setName] = useState(" ");
  const[email,setEmail] = useState("");
  const[message,setMessage] = useState("");

const sendMail = () =>{
  Axios.post("https://assets-vaults.herokuapp.com/send/mail",{
      name: name,
      email: email,
      message:message
  }).then(() => {alert("sent successfully") })
}



  return (
    <div className="bg-dark text-light">
      <NavBar />

      <div>
        <p id="animation">Please do not to hesitate to contact us directly.</p>
      </div>

      <div class="container shadow-lg p-3 mb-5 bg-dark rounded">
        <p>
          We are grateful that you came to our website. Please use this form to
          provide feedback regarding your visit, the site's content, or to
          report any broken links. Your suggestions and comments are
          appreciated.
        </p>
      </div>
      <br />

      <section>
        <div class="container shadow-lg p-3 mb-5 bg-dark rounded">
          <h1>Contact Us</h1>
          <form
          >
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                onChange = {(e) => {
                  setName(e.target.value)
              }}
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Enter your email"
                required
                onChange = {(e) => {
                  setEmail(e.target.value)
              }}
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                class="form-control"
                name="message"
                rows="3"
                required
                onChange = {(e) => {
                  setMessage(e.target.value)
              }}
              ></textarea>
            </div>
            <button  class="btn btn-warning mt-4" onClick={sendMail}>
              Submit
            </button>
          </form>
        </div>
      </section>
      <hr />
      <br />
      <br />
      <br />

      <section class="container">
        <div class="contact-parent">
          <div class="contact-child1">
            <img
              src="img/lbma-gold-bard-stacked.jpeg"
              alt=""
              class="flexImage rounded"
            />
          </div>
          <div class="contact-child2">
            <p>
              <ImLocation className="fs-4 m-2" /> Address: Starlets 91 Rd. Sir
              Charles Quist St, Accra.
              <br />
              <RiTimeFill className="fs-4 m-2" />
              Hours: Mon-Fri 9:00AM – 5:00PM
              <br />
              <BsTelephoneForwardFill className="fs-4 m-2" /> Phone: +233 54 866
              5161 <br />
              <MdEmail className="fs-4 m-2" />
              Email: info@assetsvaults.com
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <hr />
      {/* map */}
      <div className="container-fluid">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.979911151773!2d-0.21264868523401403!3d5.569987395961629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a0e78944d29%3A0x91462d00210398ea!2sAssets%20Vaults%20Security%20Company!5e0!3m2!1sen!2sgh!4v1671362962685!5m2!1sen!2sgh"
        width="100%"
        height="450"
        title="Assets Vaults Location"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      <hr />

      <Footer />
    </div>
  );
}

export default Contact;
