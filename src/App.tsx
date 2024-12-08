import { Route, Routes, useLocation } from 'react-router';
import { Home } from './pages';
import Footer from './components/footer/footer';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
