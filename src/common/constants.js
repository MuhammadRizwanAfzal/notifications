export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;

export const TIMEOUT_VALUE = 60000;

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const INACTIVE = "INACTIVE";

export const LOGGED_IN = "LOGGED_IN";
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const FILTER = "filter";
export const EXPERIENCE = "experience";

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTRY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

export const HTTP_MESSAGE = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  422: "Unprocessable Entity",
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

export const DEVICE_TYPE = {
  MOBILE_ONLY: "mobileOnly",
  TABLET_ONLY: "tabletOnly",
  UP_TO_TABLET: "upToTablet",
  DESKTOP_ONLY: "desktopOnly",
  LARGE_SCREEN_ONLY: "lgOnly",
};

// Notification status
export const STATUS_OK = "ok";
export const STATUS_WARNING = "warning";
export const STATUS_ERROR = "error";
export const STATUS_INFO = "info";
export const ALERT_SUCCESS = "Success";
export const ALERT_ERROR = "Error";
export const TIME_TO_LIVE = 5000;
export const ERROR_TIME_TO_LIVE = 20000;

// polling Interval
export const YES = "Yes";
export const NO = "No";

export const REQUEST_STATE = {
  READY: "READY",
  PROGRESS: "PROGRESS",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
};

export const SEARCH_PAGE_SIZE_PARAM = 24;

export const sliderMobileBreakPoint = 10;

export const sliderResponsiveLayout = (rows = 1, cols) => [
  {
    breakpoint: 5000,
    cols: cols || 4,
    rows,
    loop: true,
  },
  {
    breakpoint: 1500,
    cols: cols || 4,
    rows,
    loop: true,
  },
  {
    breakpoint: 1000,
    cols: cols || 3,
    rows,
    loop: true,
  },
  {
    breakpoint: 767,
    cols: cols || 1,
    loop: true,
  },
  {
    breakpoint: 499,
    cols: cols || 1,
    loop: true,
  },
];

export const TRAVELER = 1;
export const TRAVEL_BUSNIESS = 2;
export const TRAVEL_EXPERT = 3;
