import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchBlogs, selectFilteredBlogs, selectBlogsLoading, selectBlogError } from "../slices/blogSlice";
import Loader from "../components/common/Loader/Loader";
import ErrorComponent from "../components/common/ErrorComponent/ErrorComponent";
import Sidebar from "../components/pages/blogFeed/Sidebar/Sidebar";
import BlogCard from "../components/pages/blogFeed/BlogCard/BlogCard";
import MainFlexBox from '../components/pages/blogFeed/MainFlexBox'
import SidebarBox from '../components/pages/blogFeed/SidebarBox'
import ContentBox from '../components/pages/blogFeed/ContentBox'
import StyledContainer from '../components/pages/blogFeed/StyledContainer'


function BlogFeedPage() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectFilteredBlogs);
  const isLoading = useSelector(selectBlogsLoading);
  const isError = useSelector(selectBlogError);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Memoize the blog list to prevent unnecessary re-renders
  const blogList = useMemo(() => {
    if (!blogs) return null;
    
    return blogs.map((blog) => {
      if (!blog || !blog.id) return null;
      return <BlogCard key={blog.id} blog={blog} />;
    });
  }, [blogs]);


  return (
    <MainFlexBox>
      {/* Fixed Sidebar */}
      <SidebarBox>
        <Sidebar />
      </SidebarBox>

      {/* Scrollable Blog List Area */}
      <ContentBox>
        <StyledContainer>
          {
            isLoading ? (
              <Loader />
            ) : isError || !blogs ? (
              <ErrorComponent />
            ) : (
              <Box>
                {blogList}
              </Box>
            )
          }
        </StyledContainer>
      </ContentBox>
    </MainFlexBox>
  );
}

export default BlogFeedPage