import { seedData } from './utils/seedData.js';
import * as dataService from './services/dataService.js';
import { clearStorage } from './utils/storage.js';

export const runAllTests = () => {
  console.log('Starting Data Service Tests...\n');
  
  try {
    testUserOperations();
    testCategoryOperations();
    testBlogOperations();
    console.log('All tests completed!');
  } catch (error) {
    console.error('Test failed:', error);
  }
};

export const testUserOperations = () => {
  console.log('Testing User Operations...');
  
  const newUser = dataService.findOrCreateUserByEmail('test@example.com');
  console.log('Created new user:', newUser);
  
  // Test: Find existing user (should not create duplicate)
  const existingUser = dataService.findOrCreateUserByEmail('john@example.com');
  console.log('Found existing user (no duplicate):', existingUser);
  
  // Test: Invalid email
  try {
    dataService.findOrCreateUserByEmail('invalid-email');
    console.error('Should have thrown error for invalid email');
  } catch (error) {
    console.log('Correctly rejected invalid email:', error.message);
  }
  
  console.log('User operations tests passed\n');
};

export const testCategoryOperations = () => {
  console.log('Testing Category Operations...');
  
  // Test: Get all categories
  const categories = dataService.getAllCategories();
  console.log(`Found ${categories.length} categories:`, categories);
  
  if (categories.length === 0) {
    console.warn('No categories found. Run seedData() first.');
  }
  
  console.log('Category operations tests passed\n');
};

export const testBlogOperations = () => {
  console.log('Testing Blog Operations...');
  
  // Test: Get all blogs
  const allBlogs = dataService.getAllBlogs();
  console.log(`Found ${allBlogs.length} blogs`);
  
  // Test: Get blogs by category
  const categories = dataService.getAllCategories();
  if (categories.length > 0) {
    const firstCategory = categories[0];
    const categoryBlogs = dataService.getBlogsByCategory(firstCategory.id);
    console.log(`Found ${categoryBlogs.length} blogs in ${firstCategory.name}`);
  }
  
  // Test: Create new blog
  if (categories.length > 0) {
    const newBlog = dataService.createBlog(
      {
        title: 'Test Blog Post',
        content: 'This is a test blog post created by the test suite. It contains some sample content to verify that blog creation works correctly.',
      },
      'test@example.com',
      categories[0].id
    );
    console.log('Created new blog:', newBlog);
    
    // Test: Like a blog
    const likeResult1 = dataService.toggleLike(newBlog.id, 'sarah@example.com');
    console.log('Liked blog:', likeResult1);
    console.log(`Likes count: ${likeResult1.likesCount}, Is liked: ${likeResult1.isLiked}`);
    
    // Test: Unlike a blog (toggle again)
    const likeResult2 = dataService.toggleLike(newBlog.id, 'sarah@example.com');
    console.log('Unliked blog:', likeResult2);
    console.log(`Likes count: ${likeResult2.likesCount}, Is liked: ${likeResult2.isLiked}`);
    
    // Test: Delete own blog (should succeed)
    const deleteSuccess = dataService.deleteBlog(newBlog.id, 'test@example.com');
    console.log('Deleted own blog:', deleteSuccess);
  }
  
  // Test: Delete other user's blog (should fail)
  if (allBlogs.length > 0) {
    try {
      dataService.deleteBlog(allBlogs[0].id, 'wronguser@example.com');
      console.error('Should have thrown error for unauthorized delete');
    } catch (error) {
      console.log('Correctly rejected unauthorized delete:', error.message);
    }
  }
  
  console.log('Blog operations tests passed\n');
};

export const resetData = () => {
  console.log('Resetting data...');
  clearStorage();
  seedData();
  console.log('Data reset complete');
};

// Export for browser console use
window.testService = {
  runAllTests,
  testUserOperations,
  testCategoryOperations,
  testBlogOperations,
  resetData
};
