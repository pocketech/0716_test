import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    menuButton: {
      width: "3.5em", height: "3.5em",
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    "buttonMenu": {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      }
    },
    "menuicon": { width: "3.5em", height: "3.5em" },
    "appBar": { width: "100vw", boxSizing: "border-box" },
    "myBar": { backgroundColor: "#282c34", height: "120px", },
    "title": { fontWeight: "bold" },
    "listText": { fontSize: "40px" },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    }
  })
);

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link
          activeClass="active"
          to="slider"
          spy={true}
          smooth={true}
          offset={-130}
          duration={800}
        >
          <ListItem button>
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText primary="Slider" />
          </ListItem>
        </Link>
        <Link
          activeClass="active"
          to="modal"
          spy={true}
          smooth={true}
          offset={-130}
          duration={800}
        >
          <ListItem button>
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText primary="Modal" />
          </ListItem>
        </Link>
        <Link
          activeClass="active"
          to="accordion"
          spy={true}
          smooth={true}
          offset={-130}
          duration={800}
        >
          <ListItem button>
            <ListItemIcon>
              <EmojiEmotionsIcon />
            </ListItemIcon>
            <ListItemText primary="Accordion" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.myBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon className={classes.menuicon} />
          </IconButton>
          <Typography variant="h2" noWrap className={classes.title}>
            My Task
          </Typography>
          <ButtonGroup
            variant="text"
            edge="end"
            color="inherit"
            size="large"
            className={classes.buttonMenu}
            aria-label="text primary button group"
          >
            <Button> <Link
              activeClass="active"
              to="slider"
              spy={true}
              smooth={true}
              offset={-130}
              duration={800}
            >Slider</Link> </Button>
            <Button><Link
              activeClass="active"
              to="modal"
              spy={true}
              smooth={true}
              offset={-130}
              duration={800}
            >Modal</Link></Button>
            <Button><Link
              activeClass="active"
              to="accordion"
              spy={true}
              smooth={true}
              offset={-130}
              duration={800}
            >Accordion</Link></Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func
};

export default ResponsiveDrawer;