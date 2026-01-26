import { useState } from 'react';
import { CardContent, IconButton, Chip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, selectActiveEmail } from "../../../../slices/userSlice";
import { toggleBlogLike } from "../../../../slices/blogSlice";
import LoginModal from '../../../common/LoginModal/LoginModal';
import StyledCard from './helperComponents/StyledCard';
import CategoryAuthorBox from './helperComponents/CategoryAuthorBox';
import BlogContent from './helperComponents/BlogContent';
import ReadMoreButton from './helperComponents/ReadMoreButton';
import LikeSection from './helperComponents/LikeSection';
import SecondaryText from './helperComponents/SecondaryText';
import BlogTitle from './helperComponents/BlogTitle';


export default function BlogCard({ blog }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userEmail = useSelector(selectActiveEmail);
  
  // Check if current user has liked this blog
  const isLiked = blog?.likes && Array.isArray(blog?.likes) && userEmail 
    ? blog.likes.some(email => email.toLowerCase() === userEmail.toLowerCase())
    : false;
  
  const likeCount = blog?.likes ? blog?.likes?.length : 0;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLike = () => {
    // If user is not authenticated, open login modal
    if (!isAuthenticated || !userEmail) {
      setOpenLoginModal(true);
      return;
    }
    
    // Toggle like
    dispatch(toggleBlogLike({ blogId: blog?.id, userEmail }));
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const contentPreview = blog?.content?.substring(0, 150) || '';
  const shouldShowReadMore = blog?.content?.length > 150;

  return (
    <StyledCard>
      <CardContent>
        <BlogTitle>
          {blog?.title}
        </BlogTitle>

        <CategoryAuthorBox>
          <Chip 
            label={blog?.categoryName} 
            color="primary" 
            size="small" 
            variant="outlined"
          />
          <SecondaryText>
            by <strong>{blog?.authorEmail}</strong>
          </SecondaryText>
        </CategoryAuthorBox>

        <BlogContent variant="body1">
          {isExpanded ? blog?.content : contentPreview}
          {!isExpanded && shouldShowReadMore && '...'}
        </BlogContent>

        {shouldShowReadMore && (
          <ReadMoreButton onClick={toggleReadMore}>
            {isExpanded ? 'Show Less' : 'Read More'}
          </ReadMoreButton>
        )}

        <LikeSection>
          <IconButton 
            onClick={handleLike} 
            color={isLiked ? 'error' : 'default'}
            size="small"
            aria-label={isLiked ? "Unlike this post" : "Like this post"}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <SecondaryText>
            {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
          </SecondaryText>
        </LikeSection>
      </CardContent>
      
      <LoginModal open={openLoginModal} handleClose={handleCloseLoginModal} />
    </StyledCard>
  );
}
