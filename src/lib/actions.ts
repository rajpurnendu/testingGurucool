"use server";

import { cookies } from "next/headers";
import {
  setCookie,
  deleteCookie,
  hasCookie,
  getCookie,
  getCookies,
} from "cookies-next";
import {
  PUTFOLLOW_ASTRO,
  PUTUNFOLLOW_ASTRO,
  P_PUT_USER_DETAILS,
  P_SEND_LOGIN_OTP,
  P_VERIFY_LOGIN_OTP,
  REGISTER_NEW_USER,
  TESTING_URL,
} from "./apilinks";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";
// setCookie('test', 'purnendu.....', { cookies });

export async function testAction(requestData: {
  code: string;
  phone: string;
  isInternational: boolean;
}): Promise<any | undefined> {
  try {
    const response = await fetch(P_SEND_LOGIN_OTP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
      cache: "no-store",
    });

    if (!response.ok) {
      // Handle non-successful responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    // Handle errors during the fetch or JSON parsing
    console.error("Error:", error);
    // You can throw the error again if you want to propagate it further
    throw error;
  }
}

export async function verifyOtp(requestData: {
  phone: string;
  userOTP: string;
}): Promise<any | undefined> {
  // console.log(requestData);

  try {
    const response = await fetch(P_VERIFY_LOGIN_OTP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
      cache: "no-store",
    });

    const result = await response.json();
    // console.log(result);
    setCookie("loginToken", result?.token, {
      cookies,
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 15,
    });
    setCookie("phone", requestData.phone, { cookies });
    return result;
  } catch (error) {
    // Handle errors during the fetch or JSON parsing
    console.error("Error:", error);
    // You can throw the error again if you want to propagate it further
    // throw error;
    return error
  }
}

export async function logout() {
  cookies().delete("loginToken");
  redirect("/");
}

//This Function is unused,new function is handleRegistration
export async function registerNewUser(requestData: {
  file: File | null;
  firstName: string;
  lastName: string;
  email: string | undefined;
  code: string;
  isInternational: boolean;
  website: string;
  gender: string;
  referralCode: string | undefined;
}): Promise<any | undefined> {
  // console.log(requestData);
  const cookieStore = cookies();

  const phoneNumber = cookieStore.get("phone");
  try {
    const response = await fetch(REGISTER_NEW_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...requestData, phone: phoneNumber?.value }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok!!", await response.json());
    }

    const data = await response.json();
    setCookie("loginToken", data?.token, {
      cookies,
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 60 * 60 * 24,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export async function updateUser(loginToken: string, formData: FormData) {
  try {
    const avatarFile = formData.get("file") as File;
    const hasNewAvatar = avatarFile && avatarFile.size > 0;
    if (!hasNewAvatar) {
      // Remove "avatar" field from FormData
      formData.delete("file");
    }
    const response = await fetch(P_PUT_USER_DETAILS(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loginToken}`,
        // 'Content-Type': 'application/json',
      },
      body: formData,
      // body:hasNewAvatar?formData:JSON.stringify({firstName:formData.get("firstName") as string,lastName:formData.get("lastName") as string,gender:formData.get("gender") as string,email:formData.get("email") as string}),
      cache: "no-store",
    });
    if (!response.ok) {
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

  revalidatePath("/my-profile");
  redirect("/my-profile");
}

export async function FollowAstro(loginToken: string, guruid: string) {
  try {
    const response = await fetch(PUTFOLLOW_ASTRO(), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${loginToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guruId: guruid,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok!!");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  revalidatePath("/astrologer/");
  revalidatePath("/my-profile");
}

export async function UnFollowAstro(loginToken: string, guruid: string) {
  try {
    const response = await fetch(PUTUNFOLLOW_ASTRO(), {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${loginToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guruId: guruid,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok!!");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  revalidatePath("/astrologer/");
  revalidatePath("/my-profile");
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
    const keyResponse = await fetch(`${TESTING_URL}payments/key`);
    const { key } = await keyResponse.json();

    // Fetch checkout details from the server
    const checkoutResponse = await fetch(`${TESTING_URL}payments/checkout`, {
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
      cache: "no-store",
    });
    // console.log('====================================');
    // console.log(checkoutResponse);
    // console.log('====================================');
    const data = await checkoutResponse.json();

    return { checkout: data?.checkout, key: key };
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return undefined;
  }
};

export const handleRegistration = async (formData: FormData) => {
  try {
    const cookieStore = cookies();
    const phoneNumber = cookieStore.get("phone");
    const imageFile = formData.get("file") as File;
    const isPresentImg = imageFile && imageFile.size > 0;
    formData.append("isInternational", String(false));
    phoneNumber?.value && formData.append("phone", phoneNumber?.value);
    formData.append("code", "+91");
    formData.append("website", "gurucool");
    if (!isPresentImg) {
      formData.delete("file");
    }
    formData.delete("email");
    const response = await fetch(REGISTER_NEW_USER, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok!!", await response.json());
    }
    const data = await response.json();
    setCookie("loginToken", data?.token, {
      cookies,
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 60 * 60 * 24,
    });
    // return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  redirect("/");
};

export const phonePeCheckoutHandler = async (
  loginToken: string,
  amount: string | number,
  gst: string | number,
  totalAmount: string | number,
  couponCode: string,
  couponType: string
) => {
  let redirectUrl;
  // console.log(
  //   typeof loginToken,
  //   typeof amount,
  //   typeof gst,
  //   typeof totalAmount,
  //   typeof couponCode,
  //   typeof couponType
  // );
  try {
    const response = await fetch(
      "https://test.gurucool.life/api/v1/payments/phonepayCheckout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${loginToken}`,
        },
        body: JSON.stringify({
          price: amount,
          gst: String(gst),
          offerPrice: totalAmount,
          couponCode: couponCode,
          couponType: couponType,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    redirectUrl = data?.data?.redirectUrl;
    console.log(redirectUrl);
  } catch (error) {
    throw new Error(`There was a problem with the fetch operation:: ${error}`);
  } finally {
    console.log("Request completed");
  }
  redirect(redirectUrl);
};
