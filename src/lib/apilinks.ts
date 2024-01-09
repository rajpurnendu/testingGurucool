export const BASE_URL:string = "https://prod.gurucool.life/api/v1/";
export const V2_BASE_URL:string = "https://prod.gurucool.life/api/v2/";
const BLOG_API_URL = "https://prod.gurucool.life/api/v1/blogs";


export const G_GET_BLOGS=(page:number,perPage:number):string=>(`${BASE_URL}blogs/getAllBlogs?page=${page}&perPage=${perPage}`);

export const G_GET_SINGLE_BLOGS=(queryParams:string):string=>(`${BLOG_API_URL}/getBlogs?title=${queryParams}`)

export const P_SEND_LOGIN_OTP =`${BASE_URL}user/sendOTP`;

export const P_VERIFY_LOGIN_OTP =`${BASE_URL}user/verifyOTP`;

export const G_GET_USER_PROFILE = BASE_URL + "user/getProfile";

export const REGISTER_NEW_USER=`${BASE_URL}user/register`;