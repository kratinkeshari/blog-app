import { Container, Paper, Typography, TextField, Button, Stack, MenuItem, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectAllCategories, selectCategoriesLoading } from "../slices/categorySlice";
import { selectIsAuthenticated, selectActiveEmail } from "../slices/userSlice";
import { createNewBlog, selectIsCreating, selectBlogError } from "../slices/blogSlice";
import LoginModal from "../components/common/LoginModal/LoginModal";
import { useNavigate } from "react-router-dom";

// Styled Components
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  // spacing is handled via the spacing prop
}));

export default function CreateBlogPage() {
const dispatch = useDispatch();
const navigate = useNavigate();
const categories = useSelector(selectAllCategories);
const isLoading = useSelector(selectCategoriesLoading);
const isAuthenticated = useSelector(selectIsAuthenticated);
const userEmail = useSelector(selectActiveEmail);
const isCreating = useSelector(selectIsCreating);
const error = useSelector(selectBlogError);

const [selectedCategory, setSelectedCategory] = useState("");
const [title, setTitle] = useState("");
const [excerpt, setExcerpt] = useState("");
const [content, setContent] = useState("");
const [openLoginModal, setOpenLoginModal] = useState(false);
const [successMessage, setSuccessMessage] = useState("");

useEffect(() => {
  dispatch(fetchCategories());
}, [dispatch]);

const handleCategoryChange = (event) => {
  setSelectedCategory(event.target.value);
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
  if (!title.trim()) {
    return;
  }
  if (!excerpt.trim()) {
    return;
  }
  if (!content.trim()) {
    return;
  }
  if (!selectedCategory) {
    return;
  }
  
  // Create blog
  dispatch(createNewBlog({
    blogData: { title, excerpt, content },
    authorEmail: userEmail,
    categoryId: selectedCategory
  }))
    .unwrap()
    .then(() => {
      setSuccessMessage("Blog published successfully!");
      // Clear form
      setTitle("");
      setExcerpt("");
      setContent("");
      setSelectedCategory("");
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
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Create a new blog
        </Typography>

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
          <TextField 
            label="Title" 
            fullWidth 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isCreating}
            required
            helperText="Enter a catchy title for your blog"
          />
          
          <TextField 
            label="Excerpt"
            fullWidth 
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            disabled={isCreating}
            required
            multiline
            rows={2}
            helperText="Write a short summary"
            inputProps={{ maxLength: 100 }}
          />
          
          <TextField 
            label="Content"
            multiline
            rows={8}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isCreating}
            required
            helperText="Write the full content of your blog"
          />

          <TextField 
            select 
            label="Category" 
            fullWidth
            value={selectedCategory}
            onChange={handleCategoryChange}
            disabled={isLoading || isCreating}
            helperText={isLoading ? "Loading categories..." : "Please select a category"}
            required
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>

          <Button 
            variant="contained" 
            size="large"
            onClick={handlePublish}
            disabled={isCreating || !title.trim() || !excerpt.trim() || !content.trim() || !selectedCategory}
          >
            {isCreating ? "Publishing..." : "Publish Blog"}
          </Button>
        </StyledStack>
      </StyledPaper>
      
      <LoginModal open={openLoginModal} handleClose={handleCloseLoginModal} />
    </StyledContainer>
  );
}
