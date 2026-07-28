import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button";

function App() {
  return (
      <Button size="lg" variant="success">Sample</Button>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
