import { Wraper } from 'components';
import { Route, Routes } from 'react-router-dom';
import { Home, SharedLayout } from 'pages';

export const App = () => {
  return (
    <Wraper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Wraper>
  );
};
