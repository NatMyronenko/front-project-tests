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
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { fetchUser } from 'redux/user/operations/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <Wraper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="account" element={<Account />} />
          <Route path="questions" element={<Questions />}>
            <Route path="questions/:id" element={<Questions />} />
          </Route>
          <Route path="results" element={<ResultsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Wraper>
  );
};
