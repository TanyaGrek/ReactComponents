import React from 'react';

type ErrorState = { hasError: boolean };

class ErrorBoundary extends React.Component<{ [key: any]: any}, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (<h1>Oops, Something went wrong.</h1>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
