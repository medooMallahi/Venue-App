import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: true
  };
  toggleDrawer = value => {
    this.setState({ drawerOpen: value });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 0) this.setState({ headerShow: true });
    else this.setState({ headerShow: false });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#000000" : "transparent",
          color: "#00ffff",
          boxShadow: "none",
          padding: "0 10px 0 0",
          height: "7%"
        }}
      >
        <Toolbar>
          {/* The main purpose of Toolbar is to display its children with an inline display .. something Appbar doesn't do
           The AppBar component uses display: flex and flex-direction: column, that means direct descendants are stacked on top of each other
           On the other hand Toolbar uses display: flex too, but doesn't set flex-direction,
            which means it uses its default value: row. That being said, the Button component uses display: inline-block. 
            Thats the reason why elements are placed next to each other inside Toolbar components.*/}
          <div className="header_logo">
            <div className="font_righteous header_logo_venue ">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            size="medium"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
