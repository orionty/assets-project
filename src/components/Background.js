import React,{useState} from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from "./Footer";
import {AiFillStar} from 'react-icons/ai'

function Background() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-dark text-light">
      {/* Modal */}
      <>
     
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title > <h1 class="container">Mail-in Service</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
        <section>
          <div class="container shadow-lg p-3 mb-5 bg-dark rounded">
           
            <form action="http://localhost:3001/send/mail-service" method="post">
              <div class="form-group m-3">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group m-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div class="form-group m-3">
                <label for="address">Address</label>
                <input
                  type="address"
                  class="form-control"
                  name="address"
                  placeholder="Enter your address"
                  required
                />
              </div>
              
              <button type="submit" class="btn btn-warning mt-5">Submit</button>
            </form>
          </div>
        </section>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose} className="bg-dark">
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>


      
        <section className="bgsection container bg-dark text-light" >
          <div className="backgroundText">
            <h1 className="fw-bold">
              Welcome to Assets Vaults Storage Company
            </h1>
            <h4 className="fw-normal">
              Ghana's most trusted experts in bullion storage & warehousing
            </h4>
            <a href="sign-in">
              <button className="btn btn-outline-warning text-light m-5">
                Sign In
              </button>
            </a>
          </div>
          <div className="backgroundImg">
          <img src="img/goldImage.png" alt="" width="100%"  />
        </div>
          
        </section>
    
      <hr />
      <br />
      <br />

      <section class="container">
        <div class="parentCard">
          <div class="card1">
            <div class="card bg-dark">
              <img
                src="img/gold-silver-bars.webp"
                class="card-img-top cardFlexImg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Bullion Storage</h5>
                <p class="card-text">
                  Our Storage Vault House is ISO 9001 certified, 10,000 sq foot,
                  state of the art vault which can hold over 400 metric tons of
                  silver and 30 tons of gold and platinum. The stored bullion is
                  segregated and placed in uniquely identified, tamper evident
                  parcel bags (parcels) that can be easily tracked by our
                  clients. This parcel ownership system ensures that our clients
                  are the sole legal owners of their bullion under the
                  International Organizations Standardization law.
                </p>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="card bg-dark">
              <img
                src="img/Gold-Bullion-Storage.jpeg"
                class="card-img-top cardFlexImg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Safe Deposit Boxes</h5>
                <p class="card-text">
                  This is our most popular service for clients who desire
                  additional privacy and safety we offer Safe Deposit Boxes
                  (SDBs). Our SDBs come with a set insurance which can be
                  optionally increased if requested. Safe Deposit Box is not
                  considered a financial account by foreign institutions such as
                  IRS in the USA, making it a perfect solution for preserving
                  your wealth.
                </p>
              </div>
            </div>
          </div>
          <div class="card3">
            <div class="card bg-dark">
              <img
                src="img/Crypto-Wallets.jpeg"
                class="card-img-top cardFlexImg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Physical Crypto Storage</h5>
                <p class="card-text">
                  Designed to provide the safest storage of cryptocurrency in
                  the market, by replacing digital storage for physical storage.
                </p>
              </div>
            </div>
          </div>
          <div class="card4">
            <div class="card bg-dark">
              <img
                src="img/gold-engravers.jpg"
                class="card-img-top cardFlexImg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Bullion Testing Lab</h5>
                <p class="card-text">
                  We have developed our unique and proprietary non-destructive
                  testing method which measures and compares the different
                  physical characteristics of bullion to ensure that it is
                  genuine. We called it the DUX testing which stands for
                  Density, Ultrasound and X-ray – a combination of three tests
                  conducted for all the bullion that is transferred in by our
                  clients to our Storage Vault House. Read All Our Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <section class="container parentContainer">
        <div class="child-container1">
          <img src="img/Barrick.jfif" alt="" width="50%" class="managerImg" />
        </div>
        <div class="child-container2">
          <h6 style={{ color: "goldenrod" }}>Managing Director</h6>
          <h2 style={{ color: "goldenrod" }}>Michael J. Stuart</h2>
          <p class="fs-6">
            We go to extraordinary lengths to ensure not just the physical
            storage of bullion, but also that it is genuine, that you have legal
            title to your bullion, that it is tax free, that it is well
            insulated from fiscally irresponsible jurisdictions and companies,
            that it is decoupled from the banking system and that there will be
            no third parties or surprises between you and your bullion.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      {/* About us */}
      <section class="container parentContainer">
        <div class="child-container3">
          <h2 style={{ color: "goldenrod" }} id="about">
            About Us
          </h2>
          <p class="fs-6">
            At Assets Vaults, we take great satisfaction in the first-rate
            service and affordable prices we provide to our loyal clients. We
            offer a quick and safe option to exchange unwanted gold for cash. We
            take pride in being the most reliable gold buying experts in Ghana.
            We now provide a seamless service from the comfort of your home that
            fits in with your hectic schedule in addition to our wildly popular
            Mail-In service. No matter where you live in Ghana, we provide this
            service for free nationwide!
          </p>
        </div>
        <div class="child-container4">
          <img src="img/goldImage.png" alt="" width="100%" />
        </div>
      </section>
      <br />
      <hr />
      {/* client testimonials */}
      <Carousel>
        <CarouselItem>
          <section class="container">
            <h2 style={{ color: "goldenrod" }} class="text-center">
              Testimonials
            </h2>
            <br />
            <br />
            <div>
              <div class="row">
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/brooke.jpg"
                          alt="Brooke"
                          class="ImgFlipBack"
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          It's a pleasure to work with these gentlemen. Ive used
                          them twice already and got a wonderful bargain each
                          time. They are really friendly and extremely
                          effective! But above all, they are sincere. Highly
                          advised.
                        </q>
                        <br />
                        <br />

                        <h6>Brooke Trease</h6>
                        <div class="d-flex justify-content-center">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/Rose.jpg"
                          alt="Rose"
                          class="ImgFlipBack"
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          I only have positive things to say about Assets
                          Vaults I've used them twice and would advise anyone to
                          do the same. Friendly, prompt, and effective service.
                          Simply fill out a form and place the satchel in a post
                          box and the turnaround time is so quick and
                          stress-free. I'm grateful.
                        </q>
                        <br />
                        <br />
                        <h6>Rose Bautista</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/Norton.jpg"
                          alt="Norton"
                          class="ImgFlipBack"
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          AVSC provided excellent service. I was given a
                          terrific return on my gold as soon as my package
                          arrived at their location because the entire procedure
                          is so straightforward and they keep their promise.
                          Additionally, the payment was overnighted immediately
                          into my account. I couldn't have asked for a better
                          encounter! I'm grateful.
                        </q>
                        <br />
                        <br />
                        <h6>Norton-McKellar</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>

        <CarouselItem>
          <section class="container">
            <h2 style={{ color: "goldenrod" }} class="text-center">
              Testimonials
            </h2>
            <br />
            <br />
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/jennie.jpg"
                          alt="James"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          The worth of what I had assumed to be trash astounded
                          me. The staff was incredibly welcoming and helpful. I
                          will suggest Assets Vaults to others.
                        </q>
                        <br />
                        <br />

                        <h6>James Walker</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/lynsey.jpg"
                          alt="Lynsey"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          Excellent to work with. Communication was so prompt; I
                          would certainly suggest!
                        </q>
                        <br />
                        <br />
                        <h6>Lynsey Nicholson</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/marion.jpg"
                          alt="Marion"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          Excellent rapid service, user-friendly design, and
                          reasonable pricing. Assets Vaults, thank you for
                          making everything so simple.
                        </q>
                        <br />
                        <br />
                        <h6>Marion Sheridan</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>

        <CarouselItem>
          <section class="container">
            <h2 style={{ color: "goldenrod" }} class="text-center">
              Testimonials
            </h2>
            <br />
            <br />
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/natalie.jpg"
                          alt="Natalie Dray"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          Exceptional service from beginning to end. Highly
                          satisfied with the service.
                        </q>
                        <br />
                        <br />

                        <h6>Natalie Dray</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/valarie.jpg"
                          alt="Valarie"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          Excellent customer service; friendly and timely
                          responses.
                        </q>
                        <br />
                        <br />
                        <h6>Valerie Towers</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-back">
                        <img
                          src="img/Anne kory.jpg"
                          alt="Anne Kory"
                          width={300}
                          height={300}
                        />
                      </div>
                      <div class="flip-card-front p-1">
                        <q>
                          This procedure was incredibly quick and simple. The
                          price was excellent, and the products and loose stones
                          were sent back in logical packaging.
                        </q>
                        <br />
                        <br />
                        <h6>Anne Kory</h6>
                        <div class="d-flex justify-content-center">
                        <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>
      </Carousel>

      <br /><br /><br />
    <br /><br /><br />
    <br /><br />

 
<section id="mail-in-service"  class="container-fluid sub-footer">
      <div class="centered">
        <h1>Assets Vaults will buy used gold jewelry that you may sell from the convenience of your home.</h1>
        <p>
          You can expect a valuation from our quick, secure, and easy mail-in service within 24 hours of receiving your gold.
        </p>
        <button type="button" class="btn btn-warning" onClick={handleShow}>Purchase my mail-in pack</button>
       
      </div>
    </section>
    
  <Footer />


    </div>
  );
}

export default Background;
