import { type ReactNode, type ErrorInfo, Component } from "react";
import BackButton from "../components/BackButton";
import RefreshButton from "../components/RefreshButton";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  handlePageReload = () => {};

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h1 className="error-boundary-title">Oops! Something unexpected has happened 🤔</h1>
          <p>Not to worry! You can always go back or try refreshing the page</p>
          <div className="error-boundary-buttons-container">
            <BackButton />
            <RefreshButton />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
