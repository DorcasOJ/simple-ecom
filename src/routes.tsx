// routes.ts
export const ROUTES = {
    // Public
    LANDING: "/",
    USER_LOGIN: "/user/login",
    USER_SIGNUP: "/user/signup",
    USER_FORGOT_PASSWORD: "/user/forgot-password",
    USER_CREATE_PASSWORD: "/user/create-password",
    USERS_HOME: "/user/home",
    USERS_ORDERS: "/user/orders",
    USERS_SUPPORT: "/user/support",
    USERS_PROFILE: "/user/profile",

    DISPATCH_HOME: "/dispatch/home",
    DISPATCH_LOGIN: "/dispatch/login",
    DISPATCH_SIGNUP: "/dispatch/signup",
    DISPATCH_FORGOT_PASSWORD: "/dispatch/forgot-password",
    DISPATCH_CREATE_PASSWORD: "/dispatch/create-password",

    NOT_FOUND: "*"
} as const

export type RouteKeys = keyof typeof ROUTES