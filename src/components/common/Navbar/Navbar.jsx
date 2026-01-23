import {
  NavbarWrapper,
  Brand,
  CenterText,
  SearchBox,
  SearchIconWrapper,
  StyledInput,
  HeaderActions,
  NavbarToolbar,
  StyledCenterBox,
  StyledIconButton,
  MobileSearchBox,
  MobileSearchTextField
} from "./Navbar.styles";
import { Typography, Button, useTheme, useMediaQuery, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import { useSelector } from "react-redux";
import { logout, selectIsAuthenticated } from "../../../slices/userSlice";
import { useDispatch } from "react-redux";


export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const mobileSearchInputRef = useRef(null);

  const handleOpenLogin = () => setOpenLoginModal(true);
  const handleCloseLogin = () => setOpenLoginModal(false);

  const handleOpenMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  const handleCloseMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  // Auto-focus the mobile search input when it opens
  useEffect(() => {
    if (isMobileSearchOpen && mobileSearchInputRef.current) {
      mobileSearchInputRef.current.focus();
    }
  }, [isMobileSearchOpen]);

  return (
    <NavbarWrapper position="fixed">
      <NavbarToolbar>
        {/* Show normal layout when mobile search is closed */}
        {!isMobileSearchOpen || isMdUp ? (
          <>
            {/* Left - Brand */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Brand>
                NotesApp
              </Brand>
            </Link>

            {/* Center - Learn | Write | Share (Hidden on small screens) */}
            <StyledCenterBox>
              <CenterText>
                <Typography component="span">Learn · Write · Share Ideas</Typography>
              </CenterText>
            </StyledCenterBox>

            {/* Right - Search + Login */}
            <HeaderActions>
              {/* Full Search Box on medium+ screens */}
              {isMdUp ? (
                <SearchBox>
                  <SearchIconWrapper>
                    <SearchIcon fontSize="small" />
                  </SearchIconWrapper>
                  <StyledInput placeholder="Search…" />
                </SearchBox>
              ) : (
                // Search Icon Button on small screens
                <StyledIconButton 
                  aria-label="search"
                  onClick={handleOpenMobileSearch}
                >
                  <SearchIcon />
                </StyledIconButton>
              )}

              {/* Full Login/Logout Button on medium+ screens */}
              {isMdUp ? (
                <Button
                  variant={isAuthenticated ? "outlined" : "contained"}
                  onClick={isAuthenticated ? () => dispatch(logout()) : handleOpenLogin}
                >
                  {isAuthenticated ? "Logout" : "Login"}
                </Button>
              ) : (
                // Login/Logout Icon Button on small screens
                <StyledIconButton 
                  onClick={isAuthenticated ? () => dispatch(logout()) : handleOpenLogin}
                  aria-label={isAuthenticated ? "logout" : "login"}
                >
                  {isAuthenticated ? <LogoutIcon /> : <AccountCircleIcon />}
                </StyledIconButton>
              )}
            </HeaderActions>
          </>
        ) : (
          /* Mobile Search Expanded View */
          <MobileSearchBox>
            {/* Close button */}
            <StyledIconButton
              onClick={handleCloseMobileSearch}
              aria-label="close search"
            >
              <CloseIcon />
            </StyledIconButton>

            {/* Expanded search TextField */}
            <MobileSearchTextField
              inputRef={mobileSearchInputRef}
              placeholder="Search…"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </MobileSearchBox>
        )}
      </NavbarToolbar>

      <LoginModal open={openLoginModal} handleClose={handleCloseLogin} />
    </NavbarWrapper>
  );
}
