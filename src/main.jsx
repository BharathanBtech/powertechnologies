import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById("Meet_the_team"); 

if (rootElement) {
  createRoot(rootElement).render(<span>Power Technologies</span>);
} else {
  console.error("Element with ID 'test' not found in index.html");
}
