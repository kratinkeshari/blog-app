import { useState, memo, useCallback, useMemo } from 'react';
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


function BlogCard({ blog }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userEmail = useSelector(selectActiveEmail);
  
  // Memoize expensive computations
  const isLiked = useMemo(() => {
    return blog?.likes && Array.isArray(blog?.likes) && userEmail 
      ? blog.likes.some(email => email.toLowerCase() === userEmail.toLowerCase())
      : false;
  }, [blog?.likes, userEmail]);
  
  const likeCount = useMemo(() => blog?.likes ? blog.likes.length : 0, [blog?.likes]);
  
  const contentPreview = useMemo(() => blog?.content?.substring(0, 150) || '', [blog?.content]);
  const shouldShowReadMore = useMemo(() => blog?.content?.length > 150, [blog?.content]);

  const toggleReadMore = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleLike = useCallback(() => {
    // If user is not authenticated, open login modal
    if (!isAuthenticated || !userEmail) {
      setOpenLoginModal(true);
      return;
    }
    
    // Toggle like
    dispatch(toggleBlogLike({ blogId: blog?.id, userEmail }));
  }, [isAuthenticated, userEmail, dispatch, blog?.id]);

  const handleCloseLoginModal = useCallback(() => {
    setOpenLoginModal(false);
  }, []);

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

// Wrap with memo to prevent unnecessary re-renders
export default memo(BlogCard);
