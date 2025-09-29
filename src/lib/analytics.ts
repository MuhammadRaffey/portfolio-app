// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID!, {
      page_path: url,
    });
  }
};

// Log specific events happening
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    const eventData: Record<string, string | number> = {
      event_category: category,
    };

    if (label !== undefined) {
      eventData.event_label = label;
    }

    if (value !== undefined) {
      eventData.value = value;
    }

    window.gtag("event", action, eventData);
  }
};

// Log custom events for portfolio interactions
export const logPortfolioEvent = (
  eventName: string,
  properties?: Record<string, string | number>
) => {
  event({
    action: eventName,
    category: "Portfolio",
    label: properties?.label as string,
    value: properties?.value as number,
  });
};
