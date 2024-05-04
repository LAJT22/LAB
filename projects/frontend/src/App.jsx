import { RouterProvider } from 'react-router-dom';
import Context from './Context/Context.jsx';
import { router } from './routing/Router';

function App() {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
