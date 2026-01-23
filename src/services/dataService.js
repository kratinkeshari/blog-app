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
  const normalizedEmail = email.toLowerCase().trim();
  
  let user = users.find(u => u.email.toLowerCase() === normalizedEmail);
  
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
  return blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const getBlogsByCategory = (categoryId) => {
  const blogs = getBlogs();
  return blogs
    .filter(blog => blog.categoryId === categoryId)
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
  const category = categories.find(c => c.id === categoryId);
  if (!category) {
    throw new Error('Invalid category ID');
  }

  // Get or create user
  const author = findOrCreateUserByEmail(authorEmail);

  // Create blog
  const newBlog = {
    id: generateId(),
    title: blogData.title.trim(),
    content: blogData.content.trim(),
    excerpt: blogData.excerpt?.trim() || createExcerpt(blogData.content),
    authorEmail: author.email,
    authorName: author.name,
    categoryId: category.id,
    categoryName: category.name,
    likes: [], // Array of user emails who liked this post
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const blogs = getBlogs();
  blogs.push(newBlog);
  setBlogs(blogs);

  return newBlog;
};


export const deleteBlog = (blogId, userEmail) => {
  if (!blogId || !userEmail) {
    throw new Error('Blog ID and user email are required');
  }

  const blogs = getBlogs();
  const blogIndex = blogs.findIndex(b => b.id === blogId);

  if (blogIndex === -1) {
    throw new Error('Blog not found');
  }

  const blog = blogs[blogIndex];
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
  const blog = blogs.find(b => b.id === blogId);

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
  return getCategories();
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
