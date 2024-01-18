import { G_GET_ALL_CONSULT_ASTROLOGERS,GET_ASTRO_FEEDBACK, G_GET_BLOGS,Get_SINGLE_ASTRO, G_GET_SINGLE_BLOGS, G_GET_USER_PROFILE,GET_ALL_CONSULTATIONS_DETAILS,GET_ALL_FOLLOWING_ASTROLOGERS,GET_ALL_PACKAGES_WALLET,GET_HOMEPAGE_ASTROLOGERS, GET_PAYMENT_DETAILS } from "./apilinks";

// import { setCookie } from 'cookies-next';


export async function getAllblogs(page:number,perPage:number):Promise<any | undefined> {
    try {
      const response = await fetch(
        G_GET_BLOGS(page,perPage), { next: { revalidate: 3600*24 } }
      );
      if (response.ok) {
        const data = await response.json(); 
        // console.log(data);
           
        // setCookie('loginToken', 'kkkkkkkkk');
        return data.blogs.docs;
      } else {
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
        return undefined;
      }
    } catch (error) {
        throw new Error('Failed to fetch Main blog data.');
    }
}

export async function getSingleBlog(query:string):Promise<any | undefined> {
  // console.log(query);
  
    try {
      const response = await fetch(
        G_GET_SINGLE_BLOGS(query), { next: { revalidate: 0 } }
      );
      if (response.ok) {
        const data = await response.json(); 
        // console.log(data);
           
        // setCookie('loginToken', 'kkkkkkkkk');
        return data;
      } else {
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
        return undefined;
      }
    } catch (error) {
        throw new Error('Failed to fetch Single blog data.');
    }
}


export async function getUserprofile(loginToken:string):Promise<any | undefined> {
    try {
      const response = await fetch(
        G_GET_USER_PROFILE,{
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.ok) {
        const data = await response.json(); 
        // console.log(data);
        return data;
      } else {
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
        return undefined;
      }
    } catch (error) {
        throw new Error('Failed to fetch Single blog data.');
    }
}


export async function GET_Spec_Astrologer (query:string):Promise<any | undefined>{
  try {
    const response = await fetch(
      GET_HOMEPAGE_ASTROLOGERS(query),
      { next: { revalidate: 4 }}
    );
    if (response.ok) {
      const data = await response.json(); 
      return data;
    } else {
      console.error(
        "Error fetching data:",
        response.status,
        response.statusText
      );
      return undefined;
    }
  } catch (error) {
      throw new Error('Failed to fetch Single blog data.');
  }
}



// export async function getAllConsultAstrologers() {
  
//     try {
//       const response = await fetch(
//         G_GET_ALL_CONSULT_ASTROLOGERS(), { next: { revalidate: 0 } }
//       );
//       if (response.ok) {
//         const data = await response.json(); 
//         // console.log(data);
           
//         // setCookie('loginToken', 'kkkkkkkkk');
//         return data;
//       } else {
//         console.error(
//           "Error fetching data:",
//           response.status,
//           response.statusText
//         );
//         return undefined;
//       }
//     } catch (error) {
//         throw new Error('Failed to fetch Single blog data.');
//     }
// }

export async function getUserfollowingAstrologers(loginToken:string):Promise<any | undefined> {
  try {
    const response = await fetch(
      GET_ALL_FOLLOWING_ASTROLOGERS,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginToken}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 4 }
      }
    );
    if (response.ok) {
      const data = await response.json(); 
      return data.data;
    } else {
      console.error(
        "Error fetching data:",
        response.status,
        response.statusText
      );
      return undefined;
    }
  } catch (error) {
      throw new Error('Failed to fetch Single blog data.');
  }
}

export async function getUserAllConsultations(loginToken:string,uid:number,consultationType:string):Promise<any | undefined> {
  try {
    const response = await fetch(
      GET_ALL_CONSULTATIONS_DETAILS(uid,consultationType),{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginToken}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 4 }
      }
    );
    if (response.ok) {
      const data = await response.json(); 
      // console.log('====================================');
      // console.log(data);
      // console.log('====================================');
      return data?.consultations.docs;
    } else {
      console.error(
        "Error fetching data:",
        response.status,
        response.statusText
      );
      return undefined;
    }
  } catch (error) {
      throw new Error('Failed to fetch Consultations History data.');
  }
}
export async function Get_Single_Astrologer(params:string) {
  try {
    const response = await fetch(
      Get_SINGLE_ASTRO(params),
      { next: { revalidate: 4 }}
    );
    if (response.ok) {
      const data = await response.json(); 
      return data;
    } else {
      console.error(
        "Error fetching data:",
        response.status,
        response.statusText
      );
      return undefined;
    }
  } catch (error) {
    throw new Error('Failed to fetch Single astrologer data.');
  }
}

export async function getAllWalletPackages(loginToken:string,couponCode?:string){
  try {
    const response = await fetch(
      GET_ALL_PACKAGES_WALLET(couponCode),{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginToken}`,
          'Content-Type': 'application/json',
        }
      }
    );

    if(response.ok){
      const data=await response.json();
      // console.log('====================================');
      // console.log(data);
      // console.log('====================================');
      return data;
    }
    else {
      // console.log('====================================');
      // console.log(response);
      // console.log('====================================');

    throw new Error('Failed to fetch All Wallet Packages data.');

  }
}catch(error){
  throw new Error('Failed to fetch data.');
}}


export async function Get_ASTROLOGER_FEEDBACK(gid:number) {
  try {
    const response = await fetch(
      GET_ASTRO_FEEDBACK(gid),
      { next: { revalidate: 4 }}
    );
    if (response.ok) {
      const data = await response.json(); 
      return data;
    } else {
      console.error(
        "Error fetching data:",
        response.status,
        response.statusText
      );
      return undefined;
    }
  } catch (error) {
    throw new Error('Failed to fetch  astrologer feedback data.');
  }
}

export async function getPaymentdetails(loginToken:string,amount:string,couponCode?:string,removeCoupon?:boolean){
  try {
    const response = await fetch(
      GET_PAYMENT_DETAILS(amount,couponCode,removeCoupon),{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginToken}`,
          'Content-Type': 'application/json',
        }
      }
    );

    if(response.ok){
      const data=await response.json();
      // console.log('====================================');
      // console.log(data);
      // console.log('====================================');
      return data;
    }
    else {
      // console.log('====================================');
      // console.log(response);
      // console.log('====================================');

    throw new Error('Failed to fetch All Wallet Packages data.');

  }
}catch(error){
  throw new Error('Failed to fetch data.');
}}

export const convertToIstDateTime = (isoDateTime:string|undefined) => {
  if (!isoDateTime) {
    return null;
  }

  const inputDate = new Date(isoDateTime);
  const istOptions:any = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const formattedTime = inputDate.toLocaleString('en-US', istOptions);

  const dateOptions:any = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  };
  const formattedDate = inputDate.toLocaleString('en-US', dateOptions);
  return `${formattedTime} ${formattedDate} `;
};