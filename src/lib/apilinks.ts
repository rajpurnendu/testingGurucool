export const BASE_URL:string = "https://prod.gurucool.life/api/v1/";
export const TESTING_URL:string="https://test.gurucool.life/api/v1/"


export const G_GET_BLOGS=(page:number,perPage:number):string=>(`${TESTING_URL}blogs/getAllBlogs?page=${page}&perPage=${perPage}`);
export const G_GET_Trending_BLOGS=():string=>(`${TESTING_URL}blogs/getAllBlogs?trending=true`);

export const G_GET_SINGLE_BLOGS=(queryParams:string):string=>(`${TESTING_URL}blogs/getBlogs?title=${queryParams}`)

export const P_SEND_LOGIN_OTP =`${TESTING_URL}user/sendOTP`;

export const P_VERIFY_LOGIN_OTP =`${TESTING_URL}user/verifyOTP`;

export const G_GET_USER_PROFILE = TESTING_URL + "user/getProfile";

export const REGISTER_NEW_USER=`${TESTING_URL}user/register`;

export const G_GET_SINGLE_ASTROLOGER_BY_TOKEN = (guruID:string) =>
  `${TESTING_URL}guru/getSingleGuru?guruId=${guruID}`;

export const GET_HOMEPAGE_ASTROLOGERS = (queryParams:string):string => {
    if(queryParams==="All"){
        return `${TESTING_URL}guru/astrologersDetails?specialization&perPage=10`;
    }
    else {
        return `${TESTING_URL}guru/astrologersDetails?specialization=${queryParams}&perPage=10`;
    }
}

export const GET_HOMEPAGE_ASTROLOGERS2 = (queryParams:string):string => {
    if(queryParams==="All"){
        return `${TESTING_URL}guru/astrologersDetails?specialization&perPage=300`;
    }
    else {
        return `${TESTING_URL}guru/astrologersDetails?specialization=${queryParams}&perPage=300`;
    }
}




export const G_GET_ALL_CONSULT_ASTROLOGERS = TESTING_URL + `guru/astrologersDetails`;

export const P_PUT_USER_DETAILS = () =>`${TESTING_URL}user/editProfile`;

export const GET_ALL_FOLLOWING_ASTROLOGERS=TESTING_URL+"user/getUserFollowing";

export const GET_ALL_CONSULTATIONS_DETAILS=(uid:number,consultationType:string)=>{
    if(consultationType===""){
        return `${TESTING_URL}user/getUserConsultationRecord?uid=${uid}&perPage=100`;
    }
    else {
        return `${TESTING_URL}user/getUserConsultationRecord?uid=${uid}&consultationType=${consultationType}`;
    }
}

export const Get_SINGLE_ASTRO = (userName:string) =>  `${TESTING_URL}guru/getSingleGuru?userName=${userName}`;
// export const Get_SINGLE_ASTRO2 = (userName:string) =>  `${TESTING_URL}guru/getSingleGuru?userName=${userName}`;

export const GET_ALL_PACKAGES_WALLET=(couponCode?:string)=>`${TESTING_URL}payments/getPackages?mode=website${couponCode?"&couponCode="+couponCode:""}`;

export const GET_ASTRO_FEEDBACK =(gid:Number,sort?:string,userId?:string|undefined)=>`${TESTING_URL}guru/getFeedbackForAstroProfileApp?gid=${gid} ${sort?"&sort="+sort:""} ${userId?"&userId="+userId:""}`
export const GET_SIMILAR_ASTRO =(gid:Number)=>`${TESTING_URL}guru/recommendedAstrologers?gid=${gid}`;

export const GET_PAYMENT_DETAILS=(amount:string,couponCode?:string,removeCoupon?:boolean)=>`${TESTING_URL}payments/getPaymentsDetailPage?amount=${amount}${couponCode?"&couponCode="+couponCode:""}${removeCoupon?"&removeCoupon="+removeCoupon:""}`;

export const GET_ALL_COUPONS_USER=(forAmounts?:number|string)=>`${TESTING_URL}admin/getCoupons${forAmounts?"?forAmounts="+forAmounts:""}`;

export const GET_ALL_EXPIRED_COUPONS_USER=()=>`${TESTING_URL}admin/userandExpireCoupons`;

export const PUTFOLLOW_ASTRO = ()=>`${TESTING_URL}user/followGuru`
export const PUTUNFOLLOW_ASTRO = ()=>`${TESTING_URL}user/unfollowGuru`

export const PAYMENT_STATUS=(paymentID:string)=>`${TESTING_URL}payments/get_payment_info?paymentID=${paymentID}`;

export const GET_ALL_WEB_STORIES =
  `${TESTING_URL}user/getAllWebStories`;

export const GET_SINGLE_WEB_STORY = (queryParams: string): string =>
  `${TESTING_URL}user/getSingleWebStories?title=${queryParams}`;
