import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: ObjectId(params.id),
    });
    return NextResponse.json({
      message: "deleted the booking",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
