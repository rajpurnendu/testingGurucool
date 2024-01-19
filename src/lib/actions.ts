'use server';

import { cookies } from 'next/headers';
import { setCookie, deleteCookie, hasCookie, getCookie, getCookies } from 'cookies-next';
import { P_PUT_USER_DETAILS, P_SEND_LOGIN_OTP, P_VERIFY_LOGIN_OTP, REGISTER_NEW_USER } from './apilinks';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
 // setCookie('test', 'purnendu.....', { cookies });
export async function testAction(requestData: { code: string, phone: string, isInternational: boolean }): Promise<any | undefined> {
  try {
    const response = await fetch(P_SEND_LOGIN_OTP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
      cache: 'no-store'
    });

    if (!response.ok) {
      // Handle non-successful responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result);
    
    return result;
  } catch (error) {
    // Handle errors during the fetch or JSON parsing
    console.error('Error:', error);
    // You can throw the error again if you want to propagate it further
    throw error;
  }
}

export async function verifyOtp(requestData: {phone: string, userOTP: string }): Promise<any | undefined> {
  // console.log(requestData);
  
  try {
    const response = await fetch(P_VERIFY_LOGIN_OTP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
      cache: 'no-store'
    });

    const result = await response.json();
    // console.log(result);
    setCookie('loginToken', result?.token, { cookies, secure: true, httpOnly: true, sameSite: 'strict',maxAge: 60*60*24*15 });
    setCookie('phone', requestData.phone, { cookies});
    return result;
  } catch (error) {
    // Handle errors during the fetch or JSON parsing
    console.error('Error:', error);
    // You can throw the error again if you want to propagate it further
    throw error;
  }
}

export async function logout() {
  cookies().delete('loginToken');
  redirect('/');

}

export async function registerNewUser(requestData: {
  file: File | null,
  firstName:string,
  lastName: string,
  email: string | undefined,
  code: string,
  isInternational: boolean,
  website: string,
  gender: string,
  referralCode: string | undefined,
}): Promise<any | undefined> {
  // console.log(requestData);
  const cookieStore = cookies();
  const phoneNumber = cookieStore.get("phone");
  try {
    const response=await fetch(REGISTER_NEW_USER,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({...requestData,phone:phoneNumber?.value}),
      cache:'no-store'
    })

    if(!response.ok){
      throw new Error("Network response was not ok!!");
    }
   
    const data=await response.json();
    setCookie('loginToken', data?.token, { cookies, secure: true, httpOnly: true, sameSite: 'strict',maxAge: 60*60*24 });

    return data;
  } catch (error) {
       console.error("There was a problem with the fetch operation:", error);
  }
}

export async function updateUser(
  loginToken:string,
  formData: FormData,
) {
  try {
    const response=await fetch(P_PUT_USER_DETAILS(formData.get("firstName") as string,formData.get("lastName") as string,formData.get("gender") as string,formData.get("email") as string),{
      method:'POST',
      headers: {
        Authorization: `Bearer ${loginToken}`,
        'Content-Type': 'application/json',
      },
      cache:'no-store'
    })

    if(!response.ok){
      throw new Error("Network response was not ok!!");
    }
    // const data=await response.json();

    // console.log('====================================');
    // console.log(data);
    // console.log('====================================');
    // return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  revalidatePath('/my-profile');
  redirect('/my-profile');

}

  export const razorpayCheckoutHandler = async (
    loginToken: string,
    amount: string | number,
    gst: string | number,
    totalAmount: string | number,
    couponCode: string,
    couponType: string
  ) => {
    try {
      // Fetch key from the server
      const keyResponse = await fetch(
        "https://test.gurucool.life/api/v1/payments/key"
      );
      const { key } = await keyResponse.json();

      // Fetch checkout details from the server
      const checkoutResponse = await fetch(
        "https://test.gurucool.life/api/v1/payments/checkout?latestVersion=0.1.8.18",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginToken}`,
          },
          body: JSON.stringify({
            amount: amount,
            gst: gst,
            offerPrice: totalAmount,
            couponCode: couponCode,
            couponType: couponType,
          }),
          cache: 'no-store'
        }
      );
      // console.log('====================================');
      // console.log(checkoutResponse);
      // console.log('====================================');
      const  data  = await checkoutResponse.json();

      return {checkout:data?.checkout,key:key};
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return undefined
    }
  };




