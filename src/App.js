import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Todo from './pages/Todo/Todo';

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
          <Route path="/todo" element={<Todo title="I am at todo page" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
