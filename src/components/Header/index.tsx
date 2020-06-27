import React, {Component} from "react";
import {Link} from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <div>
        <Link href="/">Dashboard</Link>
      </div>
    );
  }
}

export default Header;
