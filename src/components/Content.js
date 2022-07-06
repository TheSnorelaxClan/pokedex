import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Content extends React.Component {

  render() {
    console.log(this.props.auth0.user);
    return (
      <h3>Content Page</h3>

   );
  }
}

export default withAuth0(Content);