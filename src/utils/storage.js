const STORAGE_KEYS = {
  USERS: 'blog_users',
  BLOGS: 'blog_blogs',
  CATEGORIES: 'blog_categories',
  ACTIVE_EMAIL: 'blog_activeEmail'
};

export const safeRead = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return defaultValue;
  }
};

export const safeWrite = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage (${key}):`, error);
    return false;
  }
};

export const initStorage = () => {
  if (safeRead(STORAGE_KEYS.USERS) === null) {
    safeWrite(STORAGE_KEYS.USERS, []);
  }
  if (safeRead(STORAGE_KEYS.BLOGS) === null) {
    safeWrite(STORAGE_KEYS.BLOGS, []);
  }
  if (safeRead(STORAGE_KEYS.CATEGORIES) === null) {
    safeWrite(STORAGE_KEYS.CATEGORIES, []);
  }
  if (safeRead(STORAGE_KEYS.ACTIVE_EMAIL) === null) {
    safeWrite(STORAGE_KEYS.ACTIVE_EMAIL, null);
  }
};

export const isStorageEmpty = () => {
  const users = safeRead(STORAGE_KEYS.USERS, []);
  const blogs = safeRead(STORAGE_KEYS.BLOGS, []);
  const categories = safeRead(STORAGE_KEYS.CATEGORIES, []);
  return users.length === 0 && blogs.length === 0 && categories.length === 0;
};

export const clearStorage = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};

export const getUsers = () => safeRead(STORAGE_KEYS.USERS, []);
export const setUsers = (users) => safeWrite(STORAGE_KEYS.USERS, users);

export const getBlogs = () => safeRead(STORAGE_KEYS.BLOGS, []);
export const setBlogs = (blogs) => safeWrite(STORAGE_KEYS.BLOGS, blogs);

export const getCategories = () => safeRead(STORAGE_KEYS.CATEGORIES, []);
export const setCategories = (categories) => safeWrite(STORAGE_KEYS.CATEGORIES, categories);

export const getActiveEmail = () => safeRead(STORAGE_KEYS.ACTIVE_EMAIL);
export const setActiveEmail = (email) => safeWrite(STORAGE_KEYS.ACTIVE_EMAIL, email);

export default {
  STORAGE_KEYS,
  safeRead,
  safeWrite,
  initStorage,
  isStorageEmpty,
  clearStorage,
  getUsers,
  setUsers,
  getBlogs,
  setBlogs,
  getCategories,
  setCategories,
  getActiveEmail,
  setActiveEmail
};
