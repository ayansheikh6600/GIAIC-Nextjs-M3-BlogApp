// pages/api/auth/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../libs/mongodb';
import User from '../../../../models/User';

export const POST = async (req: Request, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    const body = await req.json();
    const { username, email, password } = body;

    console.log(username, email, password);

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }
};
