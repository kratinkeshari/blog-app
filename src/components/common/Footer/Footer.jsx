import FooterWrapper from "./helperComponents/FooterWrapper";
import FooterLayout from "./helperComponents/FooterLayout";
import FooterBrand from "./helperComponents/FooterBrand";
import FooterColumn from "./helperComponents/FooterColumn";
import MutedText from "./helperComponents/MutedText";
import FooterDivider from "./helperComponents/FooterDivider";
import FooterLink from "./helperComponents/FooterLink";
import MutedDescription from "./helperComponents/MutedDescription";
import FooterContainer from "./helperComponents/FooterContainer";
import SubtitleTypography from "./helperComponents/SubtitleTypography";
import TitleTypography from "./helperComponents/TitleTypography";

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
            <TitleTypography>
              NotesApp
            </TitleTypography>
            <MutedDescription variant="body2">
              Read, Write, and Share ideas.
            </MutedDescription>
          </FooterBrand>

          {/* Links */}
          <FooterColumn spacing={1}>
            <SubtitleTypography>
              Quick Links
            </SubtitleTypography>
            <FooterLink href="/" underline="hover">Home</FooterLink>
            <FooterLink href="/blogs" underline="hover">Blogs</FooterLink>
            <FooterLink href="/create" underline="hover">Create Blog</FooterLink>
          </FooterColumn>

          {/* About */}
          <FooterColumn spacing={1}>
            <SubtitleTypography>
              About
            </SubtitleTypography>
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
