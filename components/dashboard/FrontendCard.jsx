import Link from "next/link";

const FrontendCard = () => {
  return (
    <div className="">
      <article className="mt-24 w-[320px] bg-blue-950 text-white p-3 pl-5 rounded-lg sm:w-[500px] lg:w-[700px]">
        <h3 className="mb-4 font-bold md:text-2xl">
          Frontend Development Internship
        </h3>
        <p className="mb-4 md:text-lg">
          You have opted in to join the Frontend Web Development internship. The
          details about this internship has been sent to your email. To get
          enrolled:
        </p>
        <ol className="list-decimal text-left">
          <li className="mb-4">
            Complete the assessment now in order to get started quickly.{" "}
            <a
              href="https://forms.gle/MeL8zdUg3rfbCimQ8"
              className="text-red-100"
            >
              Click here to get started now!
            </a>
          </li>
          <li className="mb-4">
            Also, join our discord server, where you will get to meet your
            mentor for the first time! And also meet you AI coding Assistant.{" "}
            <a href="https://discord.gg/pZr9zZPayf" className="text-red-100">
              Click here to join now!
            </a>
          </li>
          <li className="mb-4">
            You will also need to pay $3 for your certification two weeks into
            the internship. (Note: You don't need to do this right now).
          </li>
          <li className="mb-4">
            <strong>Optional but recommended:</strong> Help other developers get
            mentored and grow! Refer junior developers to sign up and win prizes
            (up to $100).{" "}
            <a
              href="https://www.xperiencedtekie.pro/refer"
              className="text-red-100"
            >
              Click here to refer now!
            </a>
          </li>
        </ol>
        <strong className="text-red-100">
          {" "}
          Once all these is completed, we will contact you very soon regarding
          your application status. Contact admin@xperiencedtekie.pro if you have
          any issues.{" "}
        </strong>
      </article>
    </div>
  );
};

export default FrontendCard;
