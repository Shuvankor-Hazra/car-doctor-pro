import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const services = await servicesCollection.find().toArray();
    console.log(services);
    return NextResponse.json(services);
  } catch (error) {
    console.log(error);
  }
};