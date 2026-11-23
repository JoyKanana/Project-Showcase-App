
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={null} />
      <Route path="/products" element={null} />
      <Route path="/products/add" element={null} />
      <Route path="/products/edit/:id" element={null} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
