import { Wraper } from 'components';
import { Route, Routes } from 'react-router-dom';
import { Home, SharedLayout, Welcome } from 'pages';

export const App = () => {
  return (
    <Wraper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="question" element={<Home />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Wraper>
  );
};
