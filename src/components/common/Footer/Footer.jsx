import { Typography } from "@mui/material";
import {
  FooterWrapper,
  FooterLayout,
  FooterBrand,
  FooterColumn,
  MutedText,
  FooterDivider,
  FooterLink,
  MutedDescription,
  FooterContainer
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <FooterContainer>

        <FooterLayout
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
        >
          {/* Brand */}
          <FooterBrand>
            <Typography variant="h6" fontWeight="bold">
              NotesApp
            </Typography>
            <MutedDescription variant="body2">
              Read, Write, and Share ideas.
            </MutedDescription>
          </FooterBrand>

          {/* Links */}
          <FooterColumn spacing={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              Quick Links
            </Typography>
            <FooterLink href="/" underline="hover">Home</FooterLink>
            <FooterLink href="/blogs" underline="hover">Blogs</FooterLink>
            <FooterLink href="/create" underline="hover">Create Blog</FooterLink>
          </FooterColumn>

          {/* About */}
          <FooterColumn spacing={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              About
            </Typography>
            <MutedText variant="body2">
              Built with passion.
            </MutedText>
          </FooterColumn>

        </FooterLayout>

        <FooterDivider />

        <MutedText variant="body2" align="center">
          © {new Date().getFullYear()} NotesApp. All rights reserved.
        </MutedText>

      </FooterContainer>
    </FooterWrapper>
  );
}
