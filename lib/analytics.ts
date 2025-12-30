export type AnalyticsPayload = Record<string, string | number | boolean | null>;

export const track = (event: string, payload: AnalyticsPayload = {}): void => {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[analytics]", event, payload);
  }
};
