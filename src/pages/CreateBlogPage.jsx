import { Typography, Button,MenuItem } from "@mui/material";
import { AppTypography } from "../components/ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectAllCategories, selectCategoriesLoading } from "../slices/categorySlice";
import { selectIsAuthenticated, selectActiveEmail } from "../slices/userSlice";
import { createNewBlog, selectIsCreating, selectBlogError } from "../slices/blogSlice";
import LoginModal from "../components/common/LoginModal/LoginModal";
import { useNavigate } from "react-router-dom";
import StyledContainer from "../components/pages/createBlogPage/StyledContainer";
import StyledPaper from "../components/pages/createBlogPage/StyledPaper";
import StyledAlert from "../components/pages/createBlogPage/StyledAlert";
import StyledStack from "../components/pages/createBlogPage/StyledStack";
import StyledTextField from "../components/pages/createBlogPage/StyledTextField";

export default function CreateBlogPage() {
const dispatch = useDispatch();
const navigate = useNavigate();
const categories = useSelector(selectAllCategories);
const isLoading = useSelector(selectCategoriesLoading);
const isAuthenticated = useSelector(selectIsAuthenticated);
const userEmail = useSelector(selectActiveEmail);
const isCreating = useSelector(selectIsCreating);
const error = useSelector(selectBlogError);

const [formData, setFormData] = useState({
  title: "",
  excerpt: "",
  content: "",
  selectedCategory: ""
});
const [openLoginModal, setOpenLoginModal] = useState(false);
const [successMessage, setSuccessMessage] = useState("");

useEffect(() => {
  dispatch(fetchCategories());
}, [dispatch]);

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handlePublish = () => {
  // Clear previous messages
  setSuccessMessage("");
  
  // Check if user is authenticated
  if (!isAuthenticated || !userEmail) {
    setOpenLoginModal(true);
    return;
  }
  
  // Validate form fields
  if (!formData.title?.trim() || !formData.excerpt?.trim() || !formData.content?.trim() || !formData.selectedCategory) {
    return;
  }
  
  // Create blog
  dispatch(createNewBlog({
    blogData: { 
      title: formData.title, 
      excerpt: formData.excerpt, 
      content: formData.content 
    },
    authorEmail: userEmail,
    categoryId: formData.selectedCategory
  }))
    .unwrap()
    .then(() => {
      setSuccessMessage("Blog published successfully!");
      // Clear form
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        selectedCategory: ""
      });
      // Optionally navigate to blog feed after a delay
      setTimeout(() => {
        navigate("/blogs");
      }, 1500);
    })
    .catch((err) => {
      console.error("Failed to publish blog:", err);
    });
};

const handleCloseLoginModal = () => {
  setOpenLoginModal(false);
};

  return (
    <StyledContainer maxWidth="sm">
      <StyledPaper elevation={3}>
        <AppTypography variant="h5" weight="bold" gutterBottom>
          Create a new blog
        </AppTypography>

        {successMessage && (
          <StyledAlert severity="success">
            {successMessage}
          </StyledAlert>
        )}
        
        {error && (
          <StyledAlert severity="error"> 
            {error}
          </StyledAlert>
        )}

        <StyledStack spacing={3}>
          <StyledTextField 
            name="title"
            label="Title" 
            value={formData.title}
            onChange={handleInputChange}
            disabled={isCreating}
            helperText="Enter a catchy title for your blog"
          />
          
          <StyledTextField 
            name="excerpt"
            label="Excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            disabled={isCreating}
            multiline
            rows={2}
            helperText="Write a short summary"
            inputProps={{ maxLength: 100 }}
          />
          
          <StyledTextField 
            name="content"
            label="Content"
            multiline
            rows={8}
            value={formData.content}
            onChange={handleInputChange}
            disabled={isCreating}
            helperText="Write the full content of your blog"
          />

          <StyledTextField 
            name="selectedCategory"
            select 
            label="Category" 
            value={formData.selectedCategory}
            onChange={handleInputChange}
            disabled={isLoading || isCreating}
            helperText={
              isLoading 
                ? "Loading categories..." 
                : !categories || categories.length === 0 
                  ? "No categories available" 
                  : "Please select a category"
            }
          >
            {categories && categories.length > 0 ? (
              categories.map((category) => {
                if (!category || !category.id) return null;
                return (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name || 'Unnamed Category'}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem disabled value="">
                No categories available
              </MenuItem>
            )}
          </StyledTextField>

          <Button 
            variant="contained" 
            size="large"
            onClick={handlePublish}
            disabled={isCreating || !formData?.title?.trim() || !formData?.excerpt?.trim() || !formData?.content?.trim() || !formData?.selectedCategory}
          >
            {isCreating ? "Publishing..." : "Publish Blog"}
          </Button>
        </StyledStack>
      </StyledPaper>
      
      <LoginModal open={openLoginModal} handleClose={handleCloseLoginModal} />
    </StyledContainer>
  );
}
