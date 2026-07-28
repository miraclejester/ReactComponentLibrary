import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";

function App() {
  return (
      <Badge variant='pill' color='yellow'>Badge</Badge>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
