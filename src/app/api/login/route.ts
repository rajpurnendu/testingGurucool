// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from 'next/server'


// Your actual API logic
const YOUR_INBUILT_API_URL = 'your_inbuilt_api_url';

export async function POST(request:NextRequest) {
  console.log("Exicuted..........");
  const data1=await request.json();
  try {
    console.log("Exicuted..........",data1);
    // Your API logic here

    return NextResponse.json(data1);
  } catch (error) {
    console.error('Error:', error);
    NextResponse.json({ success: false, message: 'Internal Server Error', error: error});
  }
 
}



