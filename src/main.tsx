
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove any extra container padding and max-width constraints
const style = document.createElement('style');
style.innerHTML = `
  #root {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
