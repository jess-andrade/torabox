import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslations } from "next-intl";

import { SvgIcon } from "@mui/material";
import BrazilFlag from "../../public/flags/brazil.svg";
import UsaFlag from "../../public/flags/usa.svg";
import ItalyFlag from "../../public/flags/italy.svg";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const t = useTranslations("Menu");

  const sections = [
    { name: t("home"), url: "#home" },
    { name: t("about"), url: "#about" },
    { name: t("contact"), url: "#contact" },
  ];
  const languages = [
    { name: "English", flag: UsaFlag, locale: "en-US" },
    { name: "Português", flag: BrazilFlag, locale: "pt-BR" },
    { name: "Italiano", flag: ItalyFlag, locale: "it" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#181b17" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"#home"}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#e8e8e8",
                textDecoration: "none",
              }}
            >
              TORABOX.
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#e8e8e8" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((section) => (
                <MenuItem key={section.name} onClick={handleCloseNavMenu}>
                  <Link href={section.url}>
                    <Typography textAlign="center">{section.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#e8e8e8",
              textDecoration: "none",
            }}
          >
            TORABOX.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map((section) => (
              <Link key={section.name} href={section.url}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {section.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenLanguageMenu} sx={{ p: 0 }}>
                <TranslateIcon sx={{ color: "#e8e8e8" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseLanguageMenu}
            >
              {languages.map((language) => (
                <Link key={language.name} href={"#"} locale={language.locale}>
                  <MenuItem onClick={handleCloseLanguageMenu}>
                    <Image
                      src={language.flag}
                      alt="italy-flag"
                      style={{
                        width: "20px",
                        paddingRight: "6px",
                        marginBottom: "4px",
                        height: "auto",
                      }}
                    />
                    <Typography textAlign="center">{language.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
