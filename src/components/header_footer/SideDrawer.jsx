import React from "react";
import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => scrollToElement("featured")}>
            Event starts in
          </ListItem>
          <ListItem button onClick={() => scrollToElement("venuefo")}>
            Venue NFO
          </ListItem>
          <ListItem button onClick={() => scrollToElement("highights")}>
            Highlights
          </ListItem>
          <ListItem button onClick={() => scrollToElement("pricing")}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => scrollToElement("location")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
export default SideDrawer;
