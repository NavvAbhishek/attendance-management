<style>
  @import
  url(&quot;https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css&quot;)
</style>;
import Image from "next/image";
import avatar1 from "../../public/avatars/avatar1.png";
import avatar2 from "../../public/avatars/avatar2.png";
import avatar3 from "../../public/avatars/avatar3.png";
import avatar4 from "../../public/avatars/avatar4.png";
import avatar5 from "../../public/avatars/avatar5.png";
import avatar6 from "../../public/avatars/avatar6.png";

const Testimonial = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        <div className="w-full bg-white px-5 py-12 md:py-12 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900">
                What people <br />
                are saying.
              </h1>
              <h3 className="text-md mb-5 ">
                Dive into the experiences of our satisfied users. Discover
                firsthand accounts of how our attendance management system is
                transforming the way they handle daily attendance tasks. Real
                stories, real results
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-blue-600 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-blue-600 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-blue-600"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-blue-600 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-blue-600 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image src={avatar1} alt="" width={500} height={500}  className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-dark-blue">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-2xl leading-none italic font-bold text-dark-blue mr-1">
                        &quot;
                      </span>
                      <span className="text-light-blue text-sm font-normal">
                        As a school administrator, this system has been a
                        game-changer. The real-time monitoring and automated
                        reports have drastically reduced our administrative
                        workload, allowing us to focus more on student
                        engagement and less on paperwork.
                      </span>
                      <span className="text-xl leading-none italic font-bold text-dark-blue ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image src={avatar2} alt="" width={500} height={500}  className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-dark-blue">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-xl leading-none italic font-bold text-dark-blue mr-1">
                        &quot;
                      </span>
                      <span className="text-light-blue font-normal">
                        {" "}
                        I was skeptical about switching to a new attendance
                        system, but I&apos;m glad I did. The mobile integration
                        means I can manage my team&apos;s attendance from
                        anywhere. It&apos;s incredibly convenient and
                        user-friendly.
                      </span>

                      <span className="text-xl leading-none italic font-bold text-dark-blue ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image src={avatar3} alt="" width={900} height={900}  className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-dark-blue">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-xl leading-none italic font-bold text-dark-blue mr-1">
                        &quot;
                      </span>
                      <span className="text-light-blue font-normal">
                        {" "}
                        The biometric integration of this system has heightened
                        our security and attendance accuracy.
                      </span>

                      <span className="text-xl leading-none italic font-bold text-dark-blue ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image src={avatar4} alt="" width={500} height={500}  className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-dark-blue">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-xl leading-none italic font-bold text-dark-blue mr-1">
                        &quot;
                      </span>
                      <span className="text-light-blue font-normal">
                        {" "}
                        This platform is a must-have for any growing business.
                        The multi-location support has made it easier for us to
                        expand without worrying about attendance tracking
                        complexities.
                      </span>

                      <span className="text-xl leading-none italic font-bold text-dark-blue ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image src={avatar5} alt="" width={500} height={500}  className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-dark-blue">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-xl leading-none italic font-bold text-dark-blue mr-1">
                        &quot;
                      </span>
                      <span className="text-light-blue font-normal">
                        {" "}
                        As an HR professional, staying compliant with labor laws
                        is crucial. This system not only simplifies attendance
                        tracking but also ensures we&apos;re always compliant.
                        It&apos;s like having an extra team member dedicated to
                        compliance!
                      </span>

                      <span className="text-xl leading-none italic font-bold text-dark-blue ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <Image src={avatar6} alt="" width={500} height={500}  className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-xl uppercase text-dark-blue">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-xl leading-none italic font-bold text-dark-blue mr-1">
                        &quot;
                      </span>
                      <span className="text-light-blue font-normal">
                        {" "}
                        The customizable alerts feature has been a lifesaver for
                        our remote team. We&apos;re instantly notified of any
                        attendance issues, which allows us to address them
                        promptly. This system has truly modernized our
                        attendance management.
                      </span>

                      <span className="text-xl leading-none italic font-bold text-dark-blue ml-1">
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
