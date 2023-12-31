import "./Mentorship.css";
import Image from "next/image";
import mentorshipImage from "../../../public/assets/images/mentorship.png";
import Button from "../button/Button";
import AnimateContent from "../AnimateContent";

const Mentorship = () => {
  return (
    <div className="mentorship-section relative flex-col md:flex-row py-15">
      <div className="content-width mentorship-left mb-10 md:w-1/2 md:pr-10">
        <AnimateContent>
          <h2 className="heading-2 text-blue-950 pt-16 pb-3">
            Get Career Guidance. <br /> Avoid Frustration.
          </h2>
        </AnimateContent>
        <AnimateContent>
          <p>
            We have experienced the frustration of being a junior developer.
          </p>
        </AnimateContent>
        <AnimateContent>
          <p>
            Receive a person-to-person support and career guidance from senior
            developers who have gotten to where you want to be.
          </p>
        </AnimateContent>
        <AnimateContent>
          <Button
            name={"Sign Up Now"}
            svg={
              <svg
                className="inline"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.5 12H17"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                  <path
                    d="M12.9117 8L17.5 12L12.9117 16"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            }
            link={"/sign-up"}
          />
        </AnimateContent>
      </div>
      <div className="content-width mentorship-right pb-16 md:w-1/2">
        <AnimateContent>
          <Image
            className="w-full h-auto mt-10"
            src={mentorshipImage}
            alt="picture_of_the_author"
          />
        </AnimateContent>
      </div>
    </div>
  );
};

export default Mentorship;
