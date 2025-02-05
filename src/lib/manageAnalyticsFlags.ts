import { track } from "@vercel/analytics";

const paramsAndFunctions = {
  r: async () => {
    console.log("Thank you for visiting from my resume!");
    track(
      "Website Visit from Resume",
      {
        location: await resolveLocation(),
      },
      { flags: ["referral-from-resume"] },
    );
  },
};

const resolveLocation = async (): Promise<string> => {
  interface IPInfoIO {
    city: string | undefined;
    country: string | undefined;
    ip: string | undefined;
    loc: string | undefined;
    org: string | undefined;
    postal: string | undefined;
    readme: string | undefined;
    region: string | undefined;
    timezone: string | undefined;
  }
  try {
    const response = await fetch("https://ipinfo.io/json");
    const data: IPInfoIO = await response.json();
    return `${data.city}, ${data.region}, ${data.country}, ${data.postal}`;
  } catch {
    return "(Unknown Location)";
  }
};

const removeParamFromWindowLocation = (param: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  urlParams.delete(param);
  const newQueryString = urlParams.toString();
  const newUrl = newQueryString
    ? `${window.location.pathname}?${newQueryString}`
    : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
};

export const manageAnalyticsFlags = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  for (const [param, f] of Object.entries(paramsAndFunctions)) {
    if (urlParams.has(param)) {
      removeParamFromWindowLocation(param);
      f();
    }
  }
};

