import React from "react";
import NavBar from "./NavBar";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import Footer from "./Footer";
import {AiFillStar} from 'react-icons/ai'

function Services() {
  return (
    <div className="bg-dark text-light">
      <NavBar />
      <div class="container-fluid serviceBg"></div>

      <div class="container">
        <h3 class="text-center mt-5">Assets Vaults Services</h3>
      </div>
      <hr />

     {/* service card1 */}
    <section class="container">
      <div class="service-parent-container">
        <div class="service-child-container1">
          <img
            src="img/Crypto-Wallets.jpeg"
            class="serviceFlexImg container shadow-sm p-0 mb-5 dark rounded"
            alt=""
          />
        </div>
        <div class="service-child-container2">
          <h5
            class="text-center container p-2 serviceText"
            
          >
            Physical Crypto Storage
          </h5>
          <p>
            Designed to provide the safest storage of cryptocurrency in the
            market, by replacing digital storage for physical storage.
          </p>
        </div>
        <div class="service-child-container3">
          <img
            src="img/Gold-Bullion-Storage.jpeg"
            class="serviceFlexImg  container shadow-sm p-0 mb-5 dark rounded"
            alt=""
          />
        </div>
        <div class="service-child-container4">
          <h5
            class="text-center container p-2 serviceText"
            
          >
            Safe Deposit Boxes
          </h5>
          <p>
            Safe Deposit Boxes This is our most popular service for clients who
            desire additional privacy and safety we offer Safe Deposit Boxes
            (SDBs). Our SDBs come with a set insurance which can be optionally
            increased if requested. Safe Deposit Box is not considered a
            financial account by foreign institutions such as IRS in the USA,
            making it a perfect solution for preserving your wealth.
          </p>
        </div>
      </div>
    </section>

    {/* service card2 */}
    <section class="container">
      <div class="service-parent-container">
        <div class="service-child-container1">
          <img
            src="img/gold-silver-bars.webp"
            class="serviceFlexImg  container shadow-sm p-0 mb-5 dark rounded"
            alt=""
          />
        </div>
        <div class="service-child-container2">
          <h5
            class="text-center container p-2 serviceText"
            
          >
            Bullion Storage
          </h5>
          <p>
            Our Storage Vault House is ISO 9001 certified, 10,000 sq foot, state
            of the art vault which can hold over 400 metric tons of silver and
            30 tons of gold and platinum. The stored bullion is segregated and
            placed in uniquely identified, tamper evident parcel bags (parcels)
            that can be easily tracked by our clients. This parcel ownership
            system ensures that our clients are the sole legal owners of their
            bullion under the International Organizations Standardization law.
          </p>
        </div>
        <div class="service-child-container3">
          <img
            src="img/gold-engravers.jpg"
            class="serviceFlexImg  container shadow-sm p-0 mb-5 dark rounded"
            alt=""
          />
        </div>
        <div class="service-child-container4">
          <h5
            class="text-center container p-2 serviceText"
            
          >
            Bullion Testing Lab
          </h5>
          <p>
            We have developed our unique and proprietary non-destructive testing
            method which measures and compares the different physical
            characteristics of bullion to ensure that it is genuine. We called
            it the DUX testing which stands for Density, Ultrasound and X-ray –
            a combination of three tests conducted for all the bullion that is
            transferred in by our clients to our Storage Vault House.
          </p>
        </div>
      </div>
    </section>
<hr />
    <br /><br />

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
      <br />
      <br />
      <Footer />

    </div>
  );
}

export default Services;
