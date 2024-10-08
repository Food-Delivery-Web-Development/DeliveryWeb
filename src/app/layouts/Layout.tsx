import { Outlet } from 'react-router-dom';
import { Header } from '../shared-components/Header';

function Layout() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export { Layout };
