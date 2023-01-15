import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/goit-react-hw-01-components/profile">Profile</Link>
          </li>
          <li>
            <Link to="/goit-react-hw-01-components/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/goit-react-hw-01-components/friends">Friends</Link>
          </li>
          <li>
            <Link to="/goit-react-hw-01-components/transactions">
              Transactions
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
