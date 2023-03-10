import { BrowserRouter, Routes, Route } from 'react-router-dom';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Layout from '../route/Layout';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/goit-react-hw-01-components" element={<Layout />}>
          <Route index element={<></>} />
          <Route
            path="/goit-react-hw-01-components/profile"
            element={
              <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
              />
            }
          />
          <Route
            path="/goit-react-hw-01-components/statistics"
            element={<Statistics data={data} title={'Upload stats'} />}
          />
          <Route
            path="/goit-react-hw-01-components/friends"
            element={<FriendList friends={friends} />}
          />
          <Route
            path="/goit-react-hw-01-components/transactions"
            element={<TransactionHistory transactions={transactions} />}
          />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
