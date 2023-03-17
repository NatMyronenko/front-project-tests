import { Wraper } from 'components';
import { Route, Routes } from 'react-router-dom';
import { Home, SharedLayout, Welcome, Questions } from 'pages';

export const App = () => {
  return (
    <Wraper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="questions" element={<Questions />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Wraper>
  );
};
