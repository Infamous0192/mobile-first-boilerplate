import { Route, Routes } from 'react-router-dom';

export const Home: React.FC = () => {
  return <div>ujang</div>;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
