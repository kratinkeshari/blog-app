import { List, ListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, memo, useCallback, useMemo } from "react";
import React from "react";
import { selectAllCategories, fetchCategories } from "../../../../slices/categorySlice";
import { setFilter, clearFilter, selectBlogFilter } from "../../../../slices/blogSlice";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WebIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExploreIcon from "@mui/icons-material/Explore";
import SidebarWrapper from "./helperComponents/SidebarWrapper";
import SidebarTitle from "./helperComponents/SidebarTitle";
import StyledListItemButton from "./helperComponents/StyledListItemButton";
import StyledListItemIcon from "./helperComponents/StyledListItemIcon";
import StyledList from "./helperComponents/StyledList";
import StyledDivider from "./helperComponents/StyledDivider";
import ResponsiveListItemText from "./helperComponents/ResponsiveListItemText";
import ResponsiveTooltip from "./helperComponents/ResponsiveTooltip";
import ErrorComponent from "../../../common/ErrorComponent/ErrorComponent";

const iconMap = {
  CodeIcon: <CodeIcon />,
  PsychologyIcon: <PsychologyIcon />,
  WebIcon: <WebIcon />,
  SchoolIcon: <SchoolIcon />,
  WorkIcon: <WorkIcon />,
  TrendingUpIcon: <TrendingUpIcon />,
};


function Sidebar() {
  const dispatch = useDispatch();
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

  const handleExploreAll = useCallback(() => {
    dispatch(clearFilter());
  }, [dispatch]);

  const handleCategoryClick = useCallback((categoryId) => {
    dispatch(setFilter({ categoryId }));
  }, [dispatch]);

  // Handle null/undefined categories
  if (!categories) {
    return (
      <SidebarWrapper>
        <SidebarTitle variant="h6">Categories</SidebarTitle>
        <StyledDivider />
        <ErrorComponent />
      </SidebarWrapper>
    );
  }

  // Memoize category list items
  const categoryItems = useMemo(() => {
    return categories.map((cat) => {
      if (!cat || !cat.id) return null;
      const Icon = iconMap[cat.icon];
      const isActive = selectedCategoryId === cat.id;
      return (
        <ListItem key={cat.id} disablePadding>
          <ResponsiveTooltip
            title={cat.name}
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
              <ResponsiveListItemText
                primary={cat.name}
                primaryTypographyProps={{
                  fontWeight: isActive ? 600 : 400
                }}
              />
            </StyledListItemButton>
          </ResponsiveTooltip>
        </ListItem>
      );
    });
  }, [categories, selectedCategoryId, handleCategoryClick]);

  return (
    <SidebarWrapper>
      <SidebarTitle variant="h6">Categories</SidebarTitle>

      <StyledDivider />

      <StyledList>
        <List disablePadding>
          {/* Explore All option */}
          <ListItem disablePadding>
            <ResponsiveTooltip
              title="Explore All"
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
                <ResponsiveListItemText
                  primary="Explore All"
                  primaryTypographyProps={{
                    fontWeight: selectedCategoryId === null ? 600 : 400
                  }}
                />
              </StyledListItemButton>
            </ResponsiveTooltip>
          </ListItem>

          {/* Category list */}
          {categoryItems}
        </List>
      </StyledList>
    </SidebarWrapper>
  );
}

// Wrap with memo to prevent unnecessary re-renders
export default memo(Sidebar);
