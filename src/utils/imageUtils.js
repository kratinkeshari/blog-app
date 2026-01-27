// Helper function to generate srcSet for responsive images
export const getImageSrcSet = (categoryName) => {
  const name = categoryName.toLowerCase();
  const sizes = [320, 480, 640, 768, 1024];
  return sizes.map(size => `/images/categories/${name}-${size}w.avif ${size}w`).join(', ');
};

// Helper function to generate WebP fallback srcSet
export const getWebPSrcSet = (categoryName) => {
  const name = categoryName.toLowerCase();
  const sizes = [320, 480, 640, 768, 1024];
  return sizes.map(size => `/images/categories/${name}-${size}w.webp ${size}w`).join(', ');
};

// Sizes attribute based on actual display sizes
export const imageSizes = "(max-width: 600px) 280px, (max-width: 900px) 320px, (max-width: 1200px) 380px, 455px";
