export const API_ENDPOINTS_TL = {
    GET_OTP: '/user/auth/signup/sendOtp',
    VERIFY_OTP: '/user/auth/signup/verifyOtp',
    USER_SIGNUP: '/user/auth/signup',
    USER_SIGNUP2: '/user/auth/signup2',
    USER_LOGIN: '/user/auth/login',
    BUY_PACKAGE : '/user/invest/buyPackage',
    BUY_TLT_PAYMENT : '/user/invest/place_tlt_order',
    PORTFOLIO:'/user/portfolio/getDetails',
    PORTFOLIO_HOLDINGS:'/user/invest/getUserPackages',
    GET_ALL_PACKAGES:"/user/invest/getPackages",
    GET_WALLET_BALANCE:"/user/wallet/balance",
    GET_CURRENT_STAGE:"/user/invest/getCurrentStage",
    GET_PURCHASE_HISTORY:"/user/portfolio/getTransactionHistory",
    GET_TRANSACTION_HISTORY:"/user/transaction/user",
    GET_USER_DETAILS:"/user/auth/getuserbytoken",
    GET_USER_PORTFOLIO_DETAILS:"/user/portfolio/getUserWholeDetails",
    PAYMENT_BY_QR:"/user/invest/qr_payment",
    VERIFY_QR_PAYMENT:"/user/invest/qr_verify_payment",
    USER_FEEDBACK:"/contactUs/api/feedback/add",
    ADMIN_LOGIN:"/admin/login",
    ADMIN_PANEL_ALL_USERS:"/admin/getUserDetails",
    CLAIM_COUPON_CODE:"/user/invest/applyCoupon",
    GET_REFERRAL_HISTORY:"/user/auth/refferedList",
    GET_REFERRAL_CODE:"/user/auth/refferealcode",
    LOGIN_WITH_GOOGLE_SUCCESS:"/user/auth/verifyGoogle/protected",
  };