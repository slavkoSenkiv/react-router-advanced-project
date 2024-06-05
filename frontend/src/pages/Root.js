import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>Loading ...</p>}
        {/* Loading comes from intentional delay in events.js */}
        <Outlet />
        {/* defines where the content of the child rounts should be defined */}
      </main>
    </>
  );
}
