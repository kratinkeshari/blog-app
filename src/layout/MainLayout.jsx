import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {Toolbar} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Footer from '../components/common/Footer/Footer'
import Navbar from '../components/common/Navbar/Navbar'
import LayoutBox from '../components/layout/LayoutBox'
import CreateBlogFab from '../components/layout/CreateBlogFab'
import MainContent from '../components/layout/MainContent'

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCreatePage = location.pathname === '/create';

  const handleCreateClick = () => {
    navigate('/create');
  };

  return (
    <LayoutBox>
        <Navbar component = "nav"/>
        <Toolbar />
        <MainContent  component="main">
            <Outlet />
        </MainContent>
        <Footer />
        
        {/* Floating Create Button - Hidden on CreateBlogPage */}
        {!isCreatePage && (
          <CreateBlogFab
            color="primary"
            aria-label="create blog"
            onClick={handleCreateClick}
          >
            <AddIcon />
          </CreateBlogFab>
          
        )}
    </LayoutBox>
  )
}

export default MainLayout