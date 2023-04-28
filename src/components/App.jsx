import { Wraper } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Home,
  SharedLayout,
  Welcome,
  Questions,
  ResultsPage,
  Account,
} from 'pages';

export const App = () => {
  return (
    <Wraper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="account" element={<Account />} />
          <Route path="questions" element={<Questions />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Wraper>
  );
};
