import { FaMobileAlt } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { BiSolidBellRing } from "react-icons/bi";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { TbDeviceMobileSearch } from "react-icons/tb";
import { LuMonitorCheck } from "react-icons/lu";

const FeatureSecTwo = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-normal-blue dark:text-white">
            Next-Gen Attendance Management
          </h2>
          <p className="text-light-blue font-semibold text-md ">
            Step into the future of attendance tracking with our advanced
            system. Tailored for those who value precision, speed, and
            innovation.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <LuMonitorCheck className='w-[24px] h-[24px] text-indigo-600'/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Real-Time Monitoring
            </h3>
            <p className="text-light-blue dark:text-gray-400">
              Instantly track attendance with real-time updates, ensuring
              up-to-date records and timely responses.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <FaMobileAlt className='w-[24px] h-[24px] text-indigo-600'/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Mobile Integration
            </h3>
            <p className="text-light-blue">
              Access attendance data on-the-go with our mobile-friendly
              platform, offering convenience and flexibility.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <TbReport className='w-[24px] h-[24px] text-indigo-600'/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Automated Reporting
            </h3>
            <p className="text-light-blue">
              Generate detailed attendance reports automatically, saving time
              and reducing manual errors.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <BiSolidBellRing className='w-[24px] h-[24px] text-indigo-600'/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Customizable Alerts
            </h3>
            <p className="text-light-blue">
              Audit-proof software built for critical financial operations like
              Receive tailored alerts for attendance anomalies, helping you stay
              informed and proactive.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <BsCloudArrowUpFill className='w-[24px] h-[24px] text-indigo-600'/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Cloud-Based Platform
            </h3>
            <p className="text-light-blue">
              Enjoy secure, scalable, and accessible attendance data storage on
              the cloud.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <TbDeviceMobileSearch className='w-[24px] h-[24px] text-indigo-600'/>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              User-Friendly Interface
            </h3>
            <p className="text-light-blue">
              Navigate easily with an intuitive interface designed for users of
              all technical levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSecTwo;
