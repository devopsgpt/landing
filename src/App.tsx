import { Route, Routes, useLocation } from 'react-router';
import { Home, TOS } from './pages';
import { MainLayout } from './components';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
