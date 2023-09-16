declare global {
  interface Window {
    gtag: any;
  }
}

// analytics
export const GA_TRACKING_ID = process.env.G_ANALYTICS_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: any) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const GAEvent = ({ action, category, label, value }: any) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// adsense
export const GA_ADSENSE_ID = process.env.GA_ADSENSE_ID;
