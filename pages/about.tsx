import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {signIn} from "next-auth/react";

function about() {
  return (
    <>
      <Head>
        <title>About | Citizens Farmers Bank</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-img.png" />
      </Head>

      <main className="mx-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          <ul className="flex mx-5 justify-center space-x-5">
            <Link
              href="/"
              className="cursor-pointer font-bold text-[12px] text-gray-700 hover:text-green-600 "
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer font-bold text-[12px] text-gray-700 hover:text-green-600 "
            >
              Contact Us
            </Link>
            <Link
              href="/login"
              className="cursor-pointer font-bold text-[12px] text-red-700 hover:text-green-600 "
            >
              Login
            </Link>
          </ul>
        </motion.div>
        <img src="/hero1.jpg" alt="Hero image Citizens farmer bank" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="pt-5 text-center text-green-600 text-[40px] underline"
        >
          {" "}
          About CFB
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="pt-10"
        >
          <span className="text-[13px]">
            Citizen Farmers Bank started in 1999, based on the idea of strong
            relationships, excellent service, and the most respected and
            experienced bankers in each market we serve. Building on the idea of
            serving others and enriching lives, we now provide a full range of
            banking and other financial services. Dedicated to a culture of
            caring, we value each employee and member by embracing their diverse
            talents, perspectives, and experiences.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="pt-4 min-w-min"
        >
          <span className="text-[13px]">
            Today, Citizen Farmers Bank operates more than 40 banking offices
            throughout Hampton Roads, Central Virginia, and Northeastern and
            Central North Carolina. As a practical expression of our mission,
            Citizen Farmers Bank is intentional about being a local leader in
            each community—actively promoting Agricultural, social, and economic
            growth.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="pt-4"
        >
          <span className="text-[13px]">
            Citizens Farmers Bank works with each member toward your ultimate
            success. A key to this is experienced local bankers providing
            high-level expertise and personal attention, empowered to make local
            decisions.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="mx-20 p-10 text-center"
        >
          <h1 className="text-[2rem]">We&apos;re strong</h1>
          <span className="text-[13px]">
            With more than 40 locations backed by more than $14 billion in
            assets, over 1200 employees providing exquisite service to each
            member.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="mx-20 p-10 text-center"
        >
          <h1 className="text-[2rem]">We&apos;re experienced</h1>
          <span className="text-[13px]">
            The capabilities of the Towne family of services go beyond banking,
            by providing nationally-recognized services at the local level, such
            as investments, home buying, and insurance.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="mx-20 p-10 text-center"
        >
          <h1 className="text-[2rem]">We&apos;re loyal</h1>
          <span className="text-[13px]">
            CFB provides millions of dollars in local, community reinvestments,
            charitable support, and loans. Expansive Community Involvement is
            evidence that TowneBank is serious about serving others and
            enriching lives.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="text-center space-x-2"
        >
          <span className="font-bold">Have a question?</span>
          <Link href="/contact" className="underline text-blue-400">
            Click here to contact us!
          </Link>
        </motion.div>
      </main>
    </>
  );
}

export default about;
