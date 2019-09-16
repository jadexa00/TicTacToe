import React from "react"
import { NavLink, } from "react-router-dom";
import { Menu, Segment, } from "semantic-ui-react";

const Nav = () => (
  <>
    <Segment>
      <div>
        <Menu style={{fontSize: "32px", background: "black"}}>
          <Menu.Item>
            <NavLink
              exact
              to='/'
              activeStyle={styles.active}
              >
              Home
          </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
            exact
            to='/game'
            activeStyle={styles.active}
            >
              Game
          </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Segment>
  </>
);

const styles = {
  active: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  }
};

export default Nav;