import Image from "next/image";
import image from "../../public/sectionOne.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Instant Updates and Reporting",
    description:
      "Track attendance in real-time with instant updates. Our system ensures that attendance data is always correct.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL Encryption for Data Security",
    description:
      "We prioritize the security of student data. Our application is secured with SSL encryption, ensuring that all attendance records are kept confidential and safe from unauthorized access.",
    icon: LockClosedIcon,
  },
  {
    name: "Reliable Database Management",
    description:
      "With automated database backups, our system guarantees the integrity and availability of attendance records.",
    icon: ServerIcon,
  },
];

export default function FeatureSec() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-full py-8 px-8 lg:px-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Picture of the author"
              width={1000}
              height={1000}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Efficient Attendance Managment
              </p>
              <p className="mt-6 text-md  text-gray-700">
                Our attendance management app ensures quick and efficient
                tracking of student attendance. Designed to streamline the
                attendance process, it provides a seamless experience for both
                educators and students.
              </p>
              <dl className="mt-6 max-w-xl space-y-6 text-base  text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-dark-blue">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt><br />
                    <dd className="inline text-sm">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
