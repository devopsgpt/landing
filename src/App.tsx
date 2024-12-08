import { Routes, useLocation } from 'react-router';

function App() {
  const location = useLocation();

  return <Routes location={location}></Routes>;
}

export default App;
