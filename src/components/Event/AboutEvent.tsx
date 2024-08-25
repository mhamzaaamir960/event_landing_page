import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

function AboutEvent() {
  return (
    <div className="w-full max-w-[450px] md:max-w-[800px] mt-5 flex flex-col items-center gap-x-4">
      <span className="text-lg text-gray-700 font-medium self-start">
        About Event
      </span>
      <div className="w-full bg-gray-400 h-0.5 " />
      <section className="prose prose-p:text-lg  prose-li:text-lg prose-h4:text-lg flex flex-col justify-center w-full mt-5 ">
        <p>
          Join us for a captivating session with Sourav Bera, a renowned
          Solution Architect at Microsoft and a distinguished SIH 2020 Winner.
          This exclusive event offers a unique opportunity to delve into the
          winning strategies that propelled Sourav to victory in one of India
          most prestigious hackathons.
        </p>
        <p>
          Discover the secrets behind Sourav success as he shares his
          invaluable insights on problem-solving, team collaboration, and
          technical innovation. Learn how to approach Hackathon challenges with
          a winning mindset and gain practical tips on crafting innovative
          solutions.
        </p>
        <ul className="list-disc marker:text-hexColor">
          <h4>Key Takeaways:</h4>
          <li>
            {" "}
            Problem-solving techniques: Master the art of identifying and
            addressing complex challenges.
          </li>
          <li>
            {" "}
            Teamwork and collaboration: Learn how to effectively work with
            diverse teams to achieve common goals.
          </li>{" "}
          <li>
            Technical expertise: Gain insights into the latest technologies and
            tools used in Hackathons.
          </li>
          <li>
            Innovative thinking: Discover how to generate creative and impactful
            ideas.
          </li>
        </ul>
        <p>
          Bonus: All participants will receive{" "}
          <strong>certificates of participation</strong>, recognizing their
          commitment to learning and development.
        </p>
        <p>
          Whether you are a seasoned Hackathon participant or just starting your
          journey, this event provides an invaluable opportunity to learn from a
          proven expert. Do not miss this chance to gain the competitive edge and
          achieve your Hackathon aspirations.
        </p>
        <p>
          For more queries and event updates, join the SoarX Network on{" "}
          <Link
            href={"https://chat.whatsapp.com/FCwHXkhoOwaJkjlyzRq1RG"}
            className="flex items-center no-underline text-green-500"
          >
            Whatts App{" "}
            <span className=" -rotate-[45deg] ">
              <IoIosArrowRoundForward className="font-bold text-2xl" />
            </span>
          </Link>
        </p>
      </section>
    </div>
  );
}

export default AboutEvent;
