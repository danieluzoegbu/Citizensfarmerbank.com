import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <main className="bg-gray-100 mt-10">
      <div className="bg-gray-200 mt-10 m-auto mv:p-5 min-w-min">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="text-[12px] pb-10"
        >
          <Link className="hover:text-decoration-line:underline" href="#">
            Notice of Data Collection |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            Privacy, Cookies, Security & Legal |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            General Terms of Use |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            Online Access Agreement |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            Diversity and Accessibility |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            Ad Choices |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            Report Fraud |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="/about">
            About Citizens Farmers Bank |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="/about">
            Careers |
          </Link>
          <Link className="hover:text-decoration-line:underline" href="#">
            Sitemap
          </Link>
        </motion.div>

        {/* SOCIAL MEDIA LOGO */}
        <div className="border-solid border-2 rounded border-green-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            className="flex gap-5 p-5 "
          >
            <Image alt="Facebook" src="/facebook.svg" width={30} height={30} />
            <Image
              alt="Instagram"
              src="/instagram.svg"
              width={30}
              height={30}
            />
            <Image
              alt="Pinterest"
              src="/pinterest.svg"
              width={30}
              height={30}
            />
            <Image alt="Linkedin" src="/linkedin.svg" width={30} height={30} />
            {/* SOCIAL MEDIA LOGO ENDS HERE */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0 }}
            className="p-10"
          >
            <p className="text-[12px]">
              1. You must be the primary account holder of an eligible CFB
              consumer account with a FICO® Score available, and enrolled in CFB
              Online®. Eligible CFB consumer accounts include deposit, loan, and
              credit accounts, but other consumer accounts may also be eligible.
              Contact CFB for details. Availability may be affected by your
              mobile carriers coverage area. Your mobile carriers message and
              data rates may apply.
            </p>
            <p className="pt-7 text-[12px]">
              Please note that the score provided under this service is for
              educational purposes and may not be the score used by CFB to make
              credit decisions. CFB looks at many factors to determine your
              credit options; therefore, a specific FICO® Score or CFB credit
              rating does not guarantee a specific loan rate, approval of a
              loan, or an upgrade on a credit card.
            </p>
            <p className="pt-7 text-[12px]">
              CFB and Fair Isaac are not credit repair organizations as defined
              under federal and state law, including the Credit Repair
              Organizations Act. CFB and Fair Isaac do not provide credit repair
              services or advice or assistance with rebuilding or improving your
              credit record, credit history, or credit rating.
            </p>
            <p className="pt-7 text-[12px]">
              FICO is a registered trademark of Fair Isaac Corporation in the
              United States and other countries.
            </p>
            <p className="pt-7 text-[12px]">
              2. Enrollment with Zelle® through CFB Online® or CFB Business
              Online® is required. Terms and conditions apply. U.S. checking or
              savings account required to use Zelle®. Transactions between
              enrolled users typically occur in minutes. For your protection,
              Zelle® should only be used for sending money to friends, family,
              or others you trust. Neither CFB nor Zelle® offers a protection
              program for authorized payments made with Zelle®. The Request
              feature within Zelle® is only available through CFB using a
              smartphone. Payment requests to persons not already enrolled with
              Zelle® must be sent to an email address. To send or receive money
              with a small business, both parties must be enrolled with Zelle®
              directly through their financial institutions online or mobile
              banking experience. For more information, view the Zelle® Transfer
              Service Addendum to the CFB Online Access Agreement. Your mobile
              carriers message and data rates may apply. Account fees (e.g.,
              monthly service, overdraft) may apply to CFB account(s) with which
              you use Zelle®.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0 }}
            className="m-10 border-solid border-2 border-gray-300"
          >
            <h1 className="m-2 font-bold">
              Investment and Insurance Products are:
            </h1>
            <h2 className="m-7 talic">
              Not Insured by the FDIC or Any Federal Government Agency
            </h2>
            <h2 className="m-7 talic">
              Not a Deposit or Other Obligation of, or Guaranteed by, the Bank
              or Any Bank Affiliate
            </h2>
            <h2 className="m-7 talic">
              Subject to Investment Risks, Including Possible Loss of the
              Principal Amount Invested
            </h2>
          </motion.div>
          <h1 className="text-center">© 1999 - 2023 Citizens Farmers Bank.</h1>
        </div>
      </div>
    </main>
  );
};

export default Footer;
