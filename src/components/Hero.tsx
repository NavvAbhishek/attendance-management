import Image from "next/image";
import heroImg from "../../public/hero image.png";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto pb-6">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight dark-normal-blue sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-light-blue">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="yellow-button"
              >
                Get started
              </a>
              <a
                href="#"
                className="blue-button"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              src={heroImg}
              alt="Picture of the author"
              //width={500}
              //height={500}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
