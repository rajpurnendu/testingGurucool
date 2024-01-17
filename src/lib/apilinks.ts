export const BASE_URL:string = "https://prod.gurucool.life/api/v1/";
export const BASE_URL5:string = "https://prod.gurucool.life/api/v5/";
export const V2_BASE_URL:string = "https://prod.gurucool.life/api/v2/";
export const TESTING_URL:string="https://test.gurucool.life/api/v5/"
const BLOG_API_URL = "https://prod.gurucool.life/api/v1/blogs";


export const G_GET_BLOGS=(page:number,perPage:number):string=>(`${BASE_URL}blogs/getAllBlogs?page=${page}&perPage=${perPage}`);

export const G_GET_SINGLE_BLOGS=(queryParams:string):string=>(`${BLOG_API_URL}/getBlogs?title=${queryParams}`)

export const P_SEND_LOGIN_OTP =`${BASE_URL}user/sendOTP`;

export const P_VERIFY_LOGIN_OTP =`${BASE_URL}user/verifyOTP`;

export const G_GET_USER_PROFILE = BASE_URL + "user/getProfile";

export const REGISTER_NEW_USER=`${BASE_URL}user/register`;



export const GET_HOMEPAGE_ASTROLOGERS = (queryParams:string):string => {
    if(queryParams==="All"){
        return `${BASE_URL}guru/astrologersDetails?specialization&perPage=400`;
    }
    else {
        return `${BASE_URL}guru/astrologersDetails?specialization=${queryParams}&perPage=300`;
    }
}

export const G_GET_ALL_CONSULT_ASTROLOGERS = BASE_URL + `guru/astrologersDetails`;

export const P_PUT_USER_DETAILS = (firstName:string, lastName:string, gender:string, email:string|undefined) =>
  `${BASE_URL}user/editProfile?firstName=${firstName}&lastName=${lastName}&gender=${gender}&email=${email}`;


export const GET_ALL_FOLLOWING_ASTROLOGERS=BASE_URL+"user/getUserFollowing";

export const GET_ALL_CONSULTATIONS_DETAILS=(uid:number,consultationType:string)=>{
    if(consultationType===""){
        return `${BASE_URL}user/getUserConsultationRecord?uid=${uid}&perPage=100`;
    }
    else {
        return `${BASE_URL}user/getUserConsultationRecord?uid=${uid}&consultationType=${consultationType}`;
    }
}


export const Get_SINGLE_ASTRO = (userName:string) =>   BASE_URL5+`guru/getSingleGuru?userName=${userName}`;


export const GET_ALL_PACKAGES_WALLET=(couponCode?:string)=>`${TESTING_URL}payments/getPackages${couponCode?"?couponCode="+couponCode:""}`;


export const GET_ASTRO_FEEDBACK =(gid:Number)=>`${BASE_URL}guru/getFeedbackForAstroProfile?gid=${gid}`