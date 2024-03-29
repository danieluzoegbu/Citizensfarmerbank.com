import React from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

function contact() {
  return (
    <>
      <Head>
        <title>Contact | Citizens Farmers Bank</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-img.png" />
      </Head>
      <main>
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
              href="/about"
              className="cursor-pointer font-bold text-[12px] text-gray-700 hover:text-green-600 "
            >
              About Us
            </Link>
            
            <Link
              href="/login"
              className="cursor-pointer font-bold text-[12px] text-red-700 hover:text-green-600 "
            >
              Login
            </Link>
          </ul>
        </motion.div>
        {/* mobile menu ends here */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="pt-5 text-center text-green-600 text-[40px] underline"
        >
          {" "}
          Contact Us
        </motion.h1>
        {/* CONTACT US TITLE ENDS HERE */}
        <div className="min-w-min m-auto p-10 bg-gray-100 justify-center">
          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0 }}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
              />
              <p className="text-gray-500 text-xs italic">Contacting CFB.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </motion.form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 CitizensFarmerBank. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}

export default contact;
