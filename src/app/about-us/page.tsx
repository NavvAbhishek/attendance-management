import Navbar from "@/components/Navbar";
import Image from "next/image";
import aboutUsImg from "../../../public/about-us.png";

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-8 flex flex-col justify-center items-center cursor-pointer">
        <h1 className="text-4xl font-bold text-light-blue p-2 rounded-md  ">
          About Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-10 sm:mx-32 gap-20 mt-10">
        <Image
          src={aboutUsImg}
          alt="About us image"
          width={425}
          height={425}
          className="mt-6"
        />
        <div className="description">
          <p>
            Welcome to <span className="text-dark-blue font-bold">Attendix</span>, where innovation meets efficiency in attendance
            management. Founded in 2023, our mission is to simplify and
            revolutionize the way organizations handle attendance tracking. With
            a team of dedicated professionals, we blend expertise in technology,
            human resources, and education to create a system that is not just a
            tool, but a solution. Our journey began when we noticed a gap in the
            market for a user-friendly, reliable, and comprehensive attendance
            management system.
        
            We set out to fill that gap, and today, we
            proudly offer a platform that is trusted by businesses, educational
            institutions, and various organizations worldwide. Our system is
            more than just software. <br /> <br />
             it&apos;s a testament to our commitment to
            quality, innovation, and customer satisfaction. We believe in
            constantly evolving and adapting to the ever-changing needs of our
            clients, ensuring that we are always at the forefront of attendance
            management technology. At <span className="text-dark-blue font-bold">Attendix</span>, we value the trust our clients
            place in us. We are dedicated to maintaining the highest standards
            of data security and privacy, ensuring that your information is
            always protected. Our support team is passionate about helping you
            get the most out of our system, offering personalized assistance
            whenever you need it. Join us in our journey as we continue to
            redefine attendance management. Discover the power of simplicity and
            efficiency with <span className="text-dark-blue font-bold">Attendix</span>. Together, let&apos;s make every minute count.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
