import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home title="I am a home page" subtitle="Here i am gonna make form by using class component" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
