import {connectDB} from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.insertOne(newBooking);
    return NextResponse.json(
      { message: "Service booked successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
  }
};