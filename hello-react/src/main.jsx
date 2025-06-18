import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

// function App() {
//   const name = 'Romain';
//   const now = new Date();
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <footer>
//         <p>Current date and time: {now.toString()}</p>
//       </footer>
//     </div>
//   );
// }

// const root = createRoot(document.getElementById('root'));

// root.render(<App />);

// setInterval(() => {
//   root.render(<App />);
// }, 1000); // Keep the app running to see the current time update