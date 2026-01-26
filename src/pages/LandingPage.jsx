import { useEffect, useState, lazy, Suspense, useMemo, useCallback } from "react";
import { Box, Typography} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories, selectCategoriesLoading, selectCategoryError, fetchCategories } from "../slices/categorySlice";
import { setFilter } from "../slices/blogSlice";
import Loader from "../components/common/Loader/Loader";
import ErrorComponent from "../components/common/ErrorComponent/ErrorComponent";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Section from "../components/pages/landingPage/Section";
import CategoryCard, { CardImage, CardOverlay } from "../components/pages/landingPage/CategoryCard";
import CardContent from "../components/pages/landingPage/CardContent";
import CategoryRow from "../components/pages/landingPage/CategoryRow";
import CardsContainer from "../components/pages/landingPage/CardsContainer";
import CardWrapper from "../components/pages/landingPage/CardWrapper";
import NavigationButton from "../components/pages/landingPage/NavigationButton";
import ExploreWrapper from "../components/pages/landingPage/ExploreWrapper";
import ExploreButton from "../components/pages/landingPage/ExploreButton";
import { getPreviousIndex, getNextIndex, getVisibleItems } from "../utils/carouselUtils";
import { useAutoScroll } from "../hooks/useAutoScroll";

// Helper function to generate srcSet for responsive images
const getImageSrcSet = (categoryName) => {
  const name = categoryName.toLowerCase();
  const sizes = [320, 480, 640, 768, 1024];
  return sizes.map(size => `/images/categories/${name}-${size}w.avif ${size}w`).join(', ');
};

// Helper function to generate WebP fallback srcSet
const getWebPSrcSet = (categoryName) => {
  const name = categoryName.toLowerCase();
  const sizes = [320, 480, 640, 768, 1024];
  return sizes.map(size => `/images/categories/${name}-${size}w.webp ${size}w`).join(', ');
};

// Sizes attribute based on actual display sizes
const imageSizes = "(max-width: 600px) 280px, (max-width: 900px) 320px, (max-width: 1200px) 380px, 455px";

/* ---------------- component ---------------- */
export default function LandingPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(selectCategoriesLoading);
  const isError = useSelector(selectCategoryError);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = useCallback((categoryId) => {
    dispatch(setFilter({ categoryId }));
    navigate('/blogs');
  }, [dispatch, navigate]);


  const handlePrev = useCallback(() => {
    if (!categories || categories.length === 0) return;
    setStartIndex((prevIndex) => getPreviousIndex(prevIndex, categories.length));
  }, [categories]);

  const handleNext = useCallback(() => {
    if (!categories || categories.length === 0) return;
    setStartIndex((prevIndex) => getNextIndex(prevIndex, categories.length));
  }, [categories]);

  // Auto-scroll every 5 seconds using custom hook
  useAutoScroll(handleNext, categories, isPaused, 5000);


  const visibleCategories = useMemo(() => {
    return getVisibleItems(categories, startIndex, 5);
  }, [categories, startIndex]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);


  return (
    <Section>
      {
        isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorComponent />
        ) : (
          <CategoryRow
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            <NavigationButton onClick={handlePrev} aria-label="Swipe left">
              <ArrowBackIosNewIcon />
            </NavigationButton>

            <CardsContainer>
              {visibleCategories.map((cat) => {
                if (!cat || !cat.id || !cat.name) return null;
                const isLCP = cat.name === 'Technology';
                const categoryName = cat.name.toLowerCase();
                
                return (
                  <CardWrapper key={`${cat.id}-${cat.position}`} position={cat.position}>
                    <CategoryCard 
                      onClick={() => handleCategoryClick(cat.id)}
                      position={cat.position}
                    >
                      <picture>
                        <source
                          type="image/avif"
                          srcSet={getImageSrcSet(categoryName)}
                          sizes={imageSizes}
                        />
                        <source
                          type="image/webp"
                          srcSet={getWebPSrcSet(categoryName)}
                          sizes={imageSizes}
                        />
                        <CardImage
                          src={`/images/categories/${categoryName}-640w.avif`}
                          srcSet={getImageSrcSet(categoryName)}
                          sizes={imageSizes}
                          alt={`${cat.name} category`}
                          fetchpriority={isLCP ? "high" : undefined}
                          loading={isLCP ? undefined : "lazy"}
                        />
                      </picture>
                      <CardOverlay className="card-overlay" />
                      <CardContent>
                        <Typography variant="h5" fontWeight={400} mb={2}>
                          {cat.name}
                        </Typography>
                      </CardContent>
                    </CategoryCard>
                  </CardWrapper>
                );
              })}
            </CardsContainer>

            <NavigationButton onClick={handleNext} aria-label="Swipe right">
              <ArrowForwardIosIcon />
            </NavigationButton>

          </CategoryRow>
        )
      }

      <ExploreWrapper>
        <ExploreButton
          component={Link}
          to="/blogs"
          variant="contained"
          color="primary"
        >
          Explore
        </ExploreButton>
      </ExploreWrapper>
    </Section>
  );
}
