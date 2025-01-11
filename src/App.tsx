import { Route, Routes, useLocation } from 'react-router';
import { Home, TOS } from './pages';
import { MainLayout } from './components';

function App() {
  const location = useLocation();

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
