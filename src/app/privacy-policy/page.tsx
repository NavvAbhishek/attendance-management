import Navbar from "@/components/Navbar";
import Image from "next/image";
import privacyPolicyImg from "../../../public/privacy-policy.png";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-8 flex flex-col justify-center items-center cursor-pointer">
        <h1 className="text-4xl font-bold text-light-blue p-2 rounded-md  ">
          Privacy Policy
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-start  mx-10 sm:mx-32 gap-20 mt-10">
        <Image
          src={privacyPolicyImg}
          alt="About us image"
          width={425}
          height={425}
          className="mt-6"
        />
        <div className="description">
          <p>
            At <span className="text-dark-blue font-bold">Attendix</span>, we
            are committed to protecting your privacy and ensuring the security
            of your personal information. Our Privacy Policy is designed to help
            you understand how we collect, use, and safeguard the data you
            provide to us and to assist you in making informed decisions when
            using our site and our services.
          </p>
          <h2 className="text-light-blue text-2xl font-bold mt-5 mb-2">Information Collection and Use</h2>
          <p>
            We collect information from you when you register on our site,
            subscribe to our newsletter, fill out a form, or use our attendance
            management system. This information may include your name, email
            address, workplace details, and other relevant data. We use this
            information to personalize your experience, improve our website, and
            provide you with relevant information.
          </p>
          <h2 className="text-light-blue text-2xl font-bold mt-5 mb-2">Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. Our systems are designed to protect
            your data from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <h2 className="text-light-blue text-2xl font-bold mt-5 mb-2">Sharing of Information</h2>
          <p>
          <span className="text-dark-blue font-bold">Attendix</span> does not sell, trade, or otherwise transfer to
            outside parties your personally identifiable information. This does
            not include trusted third parties who assist us in operating our
            website, conducting our business, or servicing you, so long as those
            parties agree to keep this information confidential.
          </p>
          <h2 className="text-light-blue text-2xl font-bold mt-5 mb-2">Cookies and Tracking Technology</h2>
          <p>
            Our website may use cookies to enhance your experience and gather
            information about visitors and visits to our website. This
            information is used for analytics and site improvement purposes.
          </p>
          <h2 className="text-light-blue text-2xl font-bold mt-5 mb-2">Consent</h2>
          <p>By using our site, you consent to our privacy policy.</p>
          <h2 className="text-light-blue text-2xl font-bold mt-5 mb-2">Changes to our Privacy Policy</h2>
          <p>
            If we decide to change our privacy policy, we will update the
            Privacy Policy modification date below. We encourage users to
            frequently check this page for any changes to stay informed about
            how we are helping to protect the personal information we collect. <br /> <br />
          </p>
          <p className="mb-10">
            This policy was last modified on <span className="text-dark-blue font-bold">25-11-2023. </span> <br /> <br />
            If you have any questions or concerns regarding this privacy policy,
            please contact us at +94 452224567. Your privacy is of
            utmost importance to us, and we are committed to safeguarding your
            personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
