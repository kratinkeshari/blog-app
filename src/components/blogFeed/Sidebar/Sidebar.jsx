import { List, ListItem, ListItemText, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { selectAllCategories, fetchCategories } from "../../../slices/categorySlice";
import { setFilter, clearFilter, selectBlogFilter } from "../../../slices/blogSlice";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WebIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExploreIcon from "@mui/icons-material/Explore";
import { SidebarWrapper, SidebarTitle, StyledListItemButton, StyledListItemIcon, StyledList, StyledDivider } from "./Sidebar.styles";

const iconMap = {
  CodeIcon: <CodeIcon />,
  PsychologyIcon: <PsychologyIcon />,
  WebIcon: <WebIcon />,
  SchoolIcon: <SchoolIcon />,
  WorkIcon: <WorkIcon />,
  TrendingUpIcon: <TrendingUpIcon />,
};


export default function Sidebar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const categories = useSelector(selectAllCategories);
  const filter = useSelector(selectBlogFilter);
  const selectedCategoryId = filter?.categoryId;
  // const isLoading = useSelector(selectCategoriesLoading);
  // const isError = useSelector(selectCategoryError);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched categories:", categories);
  }, [categories]);

  const handleExploreAll = () => {
    dispatch(clearFilter());
  };

  const handleCategoryClick = (categoryId) => {
    dispatch(setFilter({ categoryId }));
  };

  return (
    <SidebarWrapper>
      <SidebarTitle variant="h6">Categories</SidebarTitle>

      <StyledDivider />

      <StyledList>
        <List disablePadding>
          {/* Explore All option */}
          <ListItem disablePadding>
            <Tooltip 
              title={isMdUp ? "" : "Explore All"} 
              placement="right"
              arrow
            >
              <StyledListItemButton 
                isActive={selectedCategoryId === null}
                onClick={handleExploreAll}
              >
                <StyledListItemIcon>
                  <ExploreIcon color={selectedCategoryId === null ? 'primary' : 'inherit'} />
                </StyledListItemIcon>
                {isMdUp && (
                  <ListItemText 
                    primary="Explore All" 
                    primaryTypographyProps={{
                      fontWeight: selectedCategoryId === null ? 600 : 400
                    }}
                  />
                )}
              </StyledListItemButton>
            </Tooltip>
          </ListItem>

          {/* Category list */}
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = selectedCategoryId === cat.id;
            return (
              <ListItem key={cat.id} disablePadding>
                <Tooltip 
                  title={isMdUp ? "" : cat.name} 
                  placement="right"
                  arrow
                >
                  <StyledListItemButton 
                    isActive={isActive}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <StyledListItemIcon>
                      {Icon && React.cloneElement(Icon, { 
                        color: isActive ? 'primary' : 'inherit' 
                      })}
                    </StyledListItemIcon>
                    {isMdUp && (
                      <ListItemText 
                        primary={cat.name}
                        primaryTypographyProps={{
                          fontWeight: isActive ? 600 : 400
                        }}
                      />
                    )}
                  </StyledListItemButton>
                </Tooltip>
              </ListItem>
            )
          })}
        </List>
      </StyledList>
    </SidebarWrapper>
  );
}
