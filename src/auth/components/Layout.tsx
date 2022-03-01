// import backgroundArt from "@assets/images/login-background.svg";
import MainLogo from "@assets/images/mainicon.png";
import backgroundArt from "@assets/images/rose-perfums.jpg";
import { makeStyles } from "@saleor/macaw-ui";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    logo: {
      display: "block",
      height: 40,
      marginBottom: theme.spacing(4)
    },
    mainPanel: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2)
      },
      background: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      padding: theme.spacing(6),
      width: "100%"
    },
    mainPanelContent: {
      [theme.breakpoints.up("xs")]: {
        width: "100%"
      },
      [theme.breakpoints.up("sm")]: {
        width: 328
      },
      "@media (min-width: 1440px)": {
        width: 464
      },
      margin: "auto",
      width: "100%"
    },
    root: {
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "376px 1fr"
      },
      "@media (min-width: 1440px)": {
        gridTemplateColumns: "730px 1fr"
      },
      display: "grid",
      gridTemplateColumns: "1fr",
      height: "100vh",
      overflow: "hidden",
      width: "100vw"
    },
    sidebar: {
      [theme.breakpoints.up("lg")]: {
        display: "block"
      },
      display: "none"
    },
    sidebarArt: {
      "& svg": {
        width: "100%"
      }
    }
  }),
  {
    name: "Layout"
  }
);

const Layout: React.FC = props => {
  const { children } = props;

  const classes = useStyles(props);

    return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        {/* <SVG className={classes.sidebarArt} src={backgroundArt} />*/}
          <img className={classes.sidebarArt} src={backgroundArt} alt={'backgroundArt'}/>

      </div>
      <div className={classes.mainPanel}>
        <div className={classes.mainPanelContent}>
          {/* <SVG*/}
          {/*  className={classes.logo}*/}
          {/*  // src={themeType === "dark" ? saleorDarkLogo : saleorLightLogo}*/}
          {/*  src={MainLogo}*/}

          {/*/ >*/}
            <img className={classes.logo} src={MainLogo} alt={'MainLogo'}/>

            {children}
        </div>
      </div>
    </div>
  );
};

Layout.displayName = "Layout";
export default Layout;
