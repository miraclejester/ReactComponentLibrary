import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/Card";
import {IoCloudUploadOutline} from "react-icons/io5";

function App() {
  return (
      <>
          <br />
          <br />
          <Card>
              <Card.Icon>
                  <IoCloudUploadOutline style={{color: 'white'}} />
              </Card.Icon>
              <Card.Title>
                  Easy Deployment
              </Card.Title>
              <Card.Body>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </Card.Body>
          </Card>
      </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
