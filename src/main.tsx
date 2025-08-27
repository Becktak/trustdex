import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force rebuild to resolve blank page issue
createRoot(document.getElementById("root")!).render(<App />);
