import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
