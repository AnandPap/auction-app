import { type ReactNode, type ErrorInfo, Component } from "react";
import { IoMdRefresh } from "react-icons/io";

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
          <div className="back-refresh-button-container">
            <button
              onClick={() => {
                window.history.back();
                setTimeout(() => {
                  window.location.reload();
                }, 100);
              }}
              className="error-boundary-button"
            >
              <span className="arrow-left" />
              Back
            </button>
            <button
              className="error-boundary-button back-button"
              onClick={() => {
                window.location.reload();
              }}
            >
              Refresh
              <IoMdRefresh size={20} />
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
