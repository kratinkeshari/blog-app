import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Sidebar from "../components/blogFeed/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBlogs, selectFilteredBlogs, selectBlogsLoading, selectBlogError } from "../slices/blogSlice";
import Loader from "../components/common/Loader/Loader";
import ErrorComponent from "../components/common/ErrorComponent/ErrorComponent";
import BlogCard from "../components/blogFeed/BlogCard/BlogCard";

// Styled Components
const MainFlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'calc(100vh - 64px)',
  overflow: 'hidden'
}));

const SidebarBox = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  overflowY: 'auto',
  height: '100%'
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflowY: 'auto',
  height: '100%'
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3)
}));

function BlogFeedPage() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectFilteredBlogs);
  const isLoading = useSelector(selectBlogsLoading);
  const isError = useSelector(selectBlogError);
  // const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);


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
            ) : isError ? (
              <ErrorComponent />
            ) : (
              <Box>
                {
                  blogs.map((blog) => {
                    return (
                      <BlogCard key={blog.id} blog={blog} />
                    )
                  })
                }
              </Box>
            )
          }
        </StyledContainer>
      </ContentBox>
    </MainFlexBox>
  );
}

export default BlogFeedPage