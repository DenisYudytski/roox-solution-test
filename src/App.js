import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss';
import { Layout } from './components/Layout/Layout';
import { UserListPage } from './pages/UserListPage/UserListPage';
import { UserProfilePage } from './pages/UserProfilePage/UserProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserListPage />} />
          <Route path=':id' element={<UserProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
