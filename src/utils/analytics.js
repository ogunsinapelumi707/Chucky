import ReactGA from "react-ga4";

// Initialize Google Analytics with your GA4 Measurement ID
export const initGA = () => {
  ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your GA4 Measurement ID
};

// Track page views
export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

// Track custom events
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
