import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/Card";
import {IoCloudUploadOutline} from "react-icons/io5";
import Testimonial from "./components/Testimonial/Testimonial";
import userSrc from "./assets/user.jpg";

function App() {
  return (
      <>
          <br />
          <br />
          <Testimonial>
              <Testimonial.Header />
              <Testimonial.Body>
                  <Testimonial.Image src={userSrc} alt="user" />
                  <Testimonial.Figure>
                      <Testimonial.Quote>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet 
                              augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                          </p>
                      </Testimonial.Quote>
                      <Testimonial.Caption>
                          <h2>May Andersons</h2>
                          <p>Workcation, CTO</p>
                      </Testimonial.Caption>
                  </Testimonial.Figure>
              </Testimonial.Body>
          </Testimonial>
      </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
