// pages/api/verifyToken.ts
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const POST = async(req: Request, res: NextApiResponse)=> {
    const body = await req.json()
  const { token  } :any = body;

//   console.log(token);
  

  if (!token) {
   
    return NextResponse.json(
        { message: 'Token is required' },
        { status: 400 }
      );

  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    return NextResponse.json(
        { valid: true, decodedToken },
        { status: 200 }
      );
  } catch (error) {
    return NextResponse.json(
        { valid: false, message:"Invalid token" },
        { status: 401 }
      );
  }
}
