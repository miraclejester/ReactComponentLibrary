import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";

function App() {
  return (
      <Banner variant='error'>
          <Banner.Title>Error in application</Banner.Title>
          <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
      </Banner>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
