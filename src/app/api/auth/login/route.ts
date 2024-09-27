// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../libs/mongodb';
import User from '../../../../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const POST = async(req: Request, res: NextApiResponse)=> {
  await connectToDatabase();

  if (req.method === 'POST') {
    const body = await req.json();
    const { email, password } = body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Check the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return NextResponse.json(
      { message: 'Login successful', token },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }
}
