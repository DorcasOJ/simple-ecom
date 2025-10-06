// routes.ts
export const ROUTES = {
    // Public
    LANDING: "/",
    USER_LOGIN: "/user/login",
    USER_SIGNUP: "/user/signup",
    USER_FORGOT_PASSWORD: "/user/forgot-password",
    USER_CREATE_PASSWORD: "/user/create-password",
    USERS_HOME: "/user/home",

    NOT_FOUND: "*"
} as const

export type RouteKeys = keyof typeof ROUTES