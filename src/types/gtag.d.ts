declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?:
        | Record<string, string | number>
        | {
            page_path?: string;
            event_category?: string;
            event_label?: string;
            value?: number;
          }
    ) => void;
  }
}

export {};
