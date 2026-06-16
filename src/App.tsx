import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soins/:slug" element={<ServicePage />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}

export default App;
