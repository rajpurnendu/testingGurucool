import { G_GET_ALL_CONSULT_ASTROLOGERS, G_GET_BLOGS, G_GET_SINGLE_BLOGS, G_GET_USER_PROFILE,GET_HOMEPAGE_ASTROLOGERS } from "./apilinks";
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