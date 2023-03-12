import NextAuth from "next-auth";
import clientPromise from "./lib/mongodb";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
  ]
});
