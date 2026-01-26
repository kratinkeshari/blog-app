import NavbarWrapper from "./helperComponents/NavbarWrapper";
import Brand from "./helperComponents/Brand";
import CenterText from "./helperComponents/CenterText";
import SearchBox from "./helperComponents/SearchBox";
import SearchIconWrapper from "./helperComponents/SearchIconWrapper";
import StyledInput from "./helperComponents/StyledInput";
import HeaderActions from "./helperComponents/HeaderActions";
import NavbarToolbar from "./helperComponents/NavbarToolbar";
import StyledCenterBox from "./helperComponents/StyledCenterBox";
import StyledIconButton from "./helperComponents/StyledIconButton";
import MobileSearchTextField from "./helperComponents/MobileSearchTextField";
import MobileSearchBox from "./helperComponents/MobileSearchBox";
import BrandBox from "./helperComponents/BrandBox";
import DesktopOnlyBox from "./helperComponents/DesktopOnlyBox";
import MobileOnlyBox from "./helperComponents/MobileOnlyBox";
import MainNavStack from "./helperComponents/MainNavStack";
import { Typography, Button, Stack, InputAdornment } from "@mui/material";
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

        <MobileSearchBox isOpen={isMobileSearchOpen}>
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

        {/* Normal Navbar Layout - Hidden when mobile search is open */}
        <MainNavStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          isMobileSearchOpen={isMobileSearchOpen}
        >
          {/* Left Section - Brand (always visible) */}
          <BrandBox>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Brand>
                NotesApp
              </Brand>
            </Link>
          </BrandBox>

          {/* Center Section - Tagline */}
          {/* RESPONSIVE: Hidden on mobile (xs), visible from md+ */}
          <StyledCenterBox>
            <CenterText>
              <Typography component="span">Learn · Write · Share Ideas</Typography>
            </CenterText>
          </StyledCenterBox>

          {/* Right Section - Search + Auth Actions */}
          <HeaderActions>
            <Stack direction="row" spacing={1} alignItems="center">
              {/* Desktop Search Box */}
              <DesktopOnlyBox>
                <SearchBox>
                  <SearchIconWrapper>
                    <SearchIcon fontSize="small" />
                  </SearchIconWrapper>
                  <StyledInput placeholder="Search…" />
                </SearchBox>
              </DesktopOnlyBox>

              {/* Mobile Search Icon */}
              {/* RESPONSIVE: Visible on mobile (xs), hidden from md+ */}
              <MobileOnlyBox>
                <StyledIconButton 
                  aria-label="search"
                  onClick={handleOpenMobileSearch}
                >
                  <SearchIcon />
                </StyledIconButton>
              </MobileOnlyBox>

              {/* Desktop Login/Logout Button */}
              {/* RESPONSIVE: Hidden on mobile (xs), visible from md+ */}
              <DesktopOnlyBox>
                <Button
                  variant={isAuthenticated ? "outlined" : "contained"}
                  onClick={isAuthenticated ? () => dispatch(logout()) : handleOpenLogin}
                >
                  {isAuthenticated ? "Logout" : "Login"}
                </Button>
              </DesktopOnlyBox>

              {/* Mobile Login/Logout Icon */}
              {/* RESPONSIVE: Visible on mobile (xs), hidden from md+ */}
              <MobileOnlyBox>
                <StyledIconButton 
                  onClick={isAuthenticated ? () => dispatch(logout()) : handleOpenLogin}
                  aria-label={isAuthenticated ? "logout" : "login"}
                >
                  {isAuthenticated ? <LogoutIcon /> : <AccountCircleIcon />}
                </StyledIconButton>
              </MobileOnlyBox>
            </Stack>
          </HeaderActions>
        </MainNavStack>
      </NavbarToolbar>

      <LoginModal open={openLoginModal} handleClose={handleCloseLogin} />
    </NavbarWrapper>
  );
}
