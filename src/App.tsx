import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soins/:slug" element={<ServicePage />} />
    </Routes>
  );
}

export default App;
