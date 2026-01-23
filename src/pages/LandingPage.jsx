import { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCategories, selectCategoriesLoading, selectCategoryError, fetchCategories } from "../slices/categorySlice";
import { setFilter } from "../slices/blogSlice";
import Loader from "../components/common/Loader/Loader";
import ErrorComponent from "../components/common/ErrorComponent/ErrorComponent";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3),
  gap: theme.spacing(3),
  width: "100%",
  maxWidth: "100%",
}));

const CategoryCard = styled(Box)(({ theme, bg }) => ({
  height: "100%",
  minHeight: "280px",
  width: "100%",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
  [theme.breakpoints.up('md')]: {
    minHeight: "320px",
  },
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: theme.shadows[6],
  },
}));

const CardContent = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "#ffffffcc",
}));

  const CategoryRow = styled(Box, {
    name: "CategoryRow",
    slot: "Root",
  })(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
    width: '100%',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
  }));

  const CardsContainer = styled(Box, {
    name: "CardsContainer",
    slot: "Root",
  })(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: 'nowrap',
    width: '100%',
    maxWidth: '1400px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      maxWidth: '500px',
      gap: theme.spacing(2),
    },
  }));

  const CardWrapper = styled(Box, {
    name: "CardWrapper",
    slot: "Root",
  })(({ theme }) => ({
    flex: '1 1 0',
    minWidth: 0,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flex: '0 0 auto',
      width: '100%',
    },
  }));

  const NavigationButton = styled(IconButton)(({ theme }) => ({
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  /* Explore button container */
  const ExploreWrapper = styled(Box, {
    name: "ExploreWrapper",
    slot: "Root",
  })(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }));

  const ExploreButton = styled(Button)(({ theme }) => ({
    minWidth: '200px',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      minWidth: '280px',
      fontSize: '1.1rem',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '350px',
      fontSize: '1.2rem',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  }));

/* ---------------- component ---------------- */
export default function LandingPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(selectCategoriesLoading);
  const isError = useSelector(selectCategoryError);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    dispatch(setFilter({ categoryId }));
    navigate('/blogs');
  };


  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? categories.length - 1 : newIndex;
    });
  }

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      return (prevIndex + 1) % categories.length;
    });
  }

  const getVisibleCategories = () => {
    if (categories.length === 0) return [];
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % categories.length;
      visible.push(categories[index]);
    }
    return visible;
  };

  const visibleCategories = getVisibleCategories();

  return (
    <Section>
      {
        isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorComponent />
        ) : (
          <CategoryRow>

            <NavigationButton onClick={handlePrev} aria-label="Swipe left">
              <ArrowBackIosNewIcon />
            </NavigationButton>

            <CardsContainer>
              {visibleCategories.map((cat) => (
                <CardWrapper key={cat.id}>
                  <CategoryCard bg={cat.bg} onClick={() => handleCategoryClick(cat.id)}>
                    <CardContent>
                      <Typography variant="h5" fontWeight={400} mb={2}>
                        {cat.name}
                      </Typography>
                    </CardContent>
                  </CategoryCard>
                </CardWrapper>
              ))}
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
