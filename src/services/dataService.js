import { getUsers, setUsers, getBlogs, setBlogs, getCategories, getActiveEmail, setActiveEmail } from '../utils/storage.js';

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const createExcerpt = (content, maxLength = 150) => {
  const trimmed = content.trim();
  return trimmed.length > maxLength ? trimmed.substring(0, maxLength) + '...' : trimmed;
};


export const findOrCreateUserByEmail = (email) => {
  if (!isValidEmail(email)) {
    throw new Error('Invalid email format');
  }

  const users = getUsers();
  if (!users || !Array.isArray(users)) {
    throw new Error('Users data is not available');
  }
  
  const normalizedEmail = email.toLowerCase().trim();
  
  let user = users.find(u => u && u.email && u.email.toLowerCase() === normalizedEmail);
  
  if (!user) {
    user = {
      id: generateId(),
      email: normalizedEmail,
      name: normalizedEmail.split('@')[0], // Use email prefix as name
      createdAt: new Date().toISOString()
    };
    users.push(user);
    setUsers(users);
  }
  setActiveEmail(user.email);
  return user;
};

export const getAllBlogs = () => {
  const blogs = getBlogs();
  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }
  return blogs
    .filter(blog => blog && blog.createdAt)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const getBlogsByCategory = (categoryId) => {
  if (!categoryId) {
    throw new Error('Category ID is required');
  }
  
  const blogs = getBlogs();
  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }
  
  return blogs
    .filter(blog => blog && blog.categoryId === categoryId && blog.createdAt)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const createBlog = (blogData, authorEmail, categoryId) => {
  // Validate inputs
  if (!blogData?.title || !blogData?.content) {
    throw new Error('Title and content are required');
  }
  if (!authorEmail) {
    throw new Error('Author email is required');
  }
  if (!categoryId) {
    throw new Error('Category ID is required');
  }

  // Validate category exists
  const categories = getCategories();
  if (!categories || !Array.isArray(categories)) {
    throw new Error('Categories data is not available');
  }
  
  const category = categories.find(c => c && c.id === categoryId);
  if (!category) {
    throw new Error('Invalid category ID');
  }

  // Get or create user
  const author = findOrCreateUserByEmail(authorEmail);

  // Create blog
  const newBlog = {
    id: generateId(),
    title: blogData?.title.trim(),
    content: blogData?.content.trim(),
    excerpt: blogData?.excerpt?.trim() || createExcerpt(blogData?.content),
    authorEmail: author?.email,
    authorName: author?.name,
    categoryId: category?.id,
    categoryName: category?.name,
    likes: [], // Array of user emails who liked this post
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const blogs = getBlogs();
  if (!blogs || !Array.isArray(blogs)) {
    throw new Error('Blogs data is not available');
  }
  
  blogs.push(newBlog);
  setBlogs(blogs);

  return newBlog;
};


export const deleteBlog = (blogId, userEmail) => {
  if (!blogId || !userEmail) {
    throw new Error('Blog ID and user email are required');
  }

  const blogs = getBlogs();
  if (!blogs || !Array.isArray(blogs)) {
    throw new Error('Blogs data is not available');
  }
  
  const blogIndex = blogs.findIndex(b => b && b.id === blogId);

  if (blogIndex === -1) {
    throw new Error('Blog not found');
  }

  const blog = blogs[blogIndex];
  if (!blog || !blog.authorEmail) {
    throw new Error('Blog data is invalid');
  }
  
  const normalizedEmail = userEmail.toLowerCase().trim();

  if (blog.authorEmail.toLowerCase() !== normalizedEmail) {
    throw new Error('Unauthorized: You can only delete your own blogs');
  }

  // Delete blog
  blogs.splice(blogIndex, 1);
  setBlogs(blogs);

  return true;
};

export const toggleLike = (blogId, userEmail) => {
  if (!blogId) {
    throw new Error('Blog ID is required');
  }
  if (!userEmail) {
    throw new Error('User email is required');
  }
  const user = findOrCreateUserByEmail(userEmail);
  const normalizedEmail = user.email;

  const blogs = getBlogs();
  if (!blogs || !Array.isArray(blogs)) {
    throw new Error('Blogs data is not available');
  }
  
  const blog = blogs.find(b => b && b.id === blogId);

  if (!blog) {
    throw new Error('Blog not found');
  }

  if (!Array.isArray(blog.likes)) {
    blog.likes = [];
  }

  // Check if user already liked
  const likeIndex = blog.likes.findIndex(
    email => email.toLowerCase() === normalizedEmail.toLowerCase()
  );

  let isLiked;
  if (likeIndex > -1) {
    blog.likes.splice(likeIndex, 1);
    isLiked = false;
  } else {
    // Like: add user's email
    blog.likes.push(normalizedEmail);
    isLiked = true;
  }

  blog.updatedAt = new Date().toISOString();
  setBlogs(blogs);

  return {
    isLiked,
    likesCount: blog.likes.length
  };
};

export const getAllCategories = () => {
  const categories = getCategories();
  if (!categories || !Array.isArray(categories)) {
    return [];
  }
  return categories.filter(cat => cat && cat.id);
};

export const getActiveUserEmail = () => {
  return getActiveEmail();
};

export default {
  findOrCreateUserByEmail,
  getAllBlogs,
  getBlogsByCategory,
  createBlog,
  deleteBlog,
  toggleLike,
  getAllCategories,
  getActiveUserEmail
};
