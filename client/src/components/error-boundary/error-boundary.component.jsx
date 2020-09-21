import React, { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>Sorry... A dog ate this page!!!!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
