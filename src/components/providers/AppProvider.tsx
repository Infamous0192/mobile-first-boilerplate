import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import '@/styles/globals.css';

type Props = {
  children: React.ReactNode;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById('root');
    root?.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <Router>
      {children}
      <ScrollToTop />
    </Router>
  );
};
