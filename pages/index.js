import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import emailjs from "@emailjs/browser";

// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs.sendForm(
      "service_v7y5z3a",
      "template_8e5csda",
      e.target,
      "UVffs7m_eqNjxDqhb"
    );
    e.target.reset();
  };
  return (
    <div>
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
        <div className="laptop:mt-20 laptop:mb-3 laptop:pl-0 mob:mt-10 mob:mb-3 mob:pl-3 mt-10 mb-3 pl-3">
          <h1 className="mt-5 text-3xl mob:text-3xl laptop:text-8xl mob:pr-10 text-bold w-4/5 mob:w-full laptop:w-4/5">
            <div className="header">
              {data.headerTaglineOne}
              <img
                className="header-image w-20 mob:w-20 laptop:w-36"
                src={data.headerImage}
                alt="my-image"
              />
            </div>
            {data.headerTaglineTwo}
          </h1>
        </div>
        {/* resume button start */}
        <div className="center">
          <a
            href="https://drive.google.com/file/d/1aO8nyjhuI5rG3UZUj34eIPl948WnoXs8/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn">
              <svg viewBox="0 0 180 60" className="border">
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  className="hl-line"
                />
              </svg>
              <span>Download Resume</span>
            </button>
          </a>
        </div>
        {/* resume button end */}
        <div className="laptop:mt-20 mt-2 pl-2 mob:p-2 laptop:p-0">
          <Socials />
        </div>
        <div
          className="mt-10 mob:mt-10 laptop:mt-28 mob:p-2 laptop:p-0"
          ref={workRef}
        >
          <h1 className="mob:text-2xl laptop:text-5xl text-bold pl-2">
            Project.
          </h1>
          <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-1 mob:grid-cols-1 laptop:grid-cols-3 gap-4">
            {data.projects.map((project, index) => (
              <WorkCard
                key={index}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        {/* Contact Start */}
        <section
          className="mt-28 mob:mt-10 laptop:mt-28 mob:p-2 laptop:p-0 py-6"
          ref={contactRef}
        >
          <h1 className="mob:text-2xl laptop:text-5xl text-bold pl-2">
            Contact.
          </h1>
          <div className="mt-10 mob:mt-5 laptop:mt-10 grid max-w-6xl grid-cols-1 px-6 mx-auto laptop:px-8 laptop:grid-cols-2 laptop:items-center">
            <img
              src="https://i.postimg.cc/KvJcK3BJ/Mail-sent-rafiki.png"
              alt=""
            />
            <form
              onSubmit={handelSubmit}
              className="flex flex-col py-6 space-y-6 laptop:py-0 laptop:px-6"
            >
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Abdullah Al Safayet"
                  className="block w-full rounded-md shadow-sm focus:ring-opacity-75 focus:ring-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="abdullah.safayet@gmail.com"
                  className="block w-full rounded-md shadow-sm focus:ring-opacity-75 focus:ring-gray-800"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  name="message"
                  rows="3"
                  className="block w-full rounded-md shadow-sm focus:ring-opacity-75 focus:ring-gray-800"
                ></textarea>
              </label>
              <button
                type="submit"
                value="send"
                className="self-center px-8 py-3 text-lg rounded bg-transplant border text-gray-900 hover:ring-gray-600"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <div
          className="mt-40 mob:mt-2 laptop:mt-28 mob:p-2 laptop:p-0"
          ref={aboutRef}
        >
          <h1 className="mob:text-2xl laptop:text-5xl text-bold pl-2">
            About.
          </h1>
          <section>
            <div className="container flex flex-col justify-center p-6 mx-auto laptop:flex-row laptop:justify-between laptop:items-center">
              <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
                {data.aboutpara}
              </p>
              <img
                src="https://i.postimg.cc/yx1fdyJT/ID-Card-bro.png"
                alt=""
                className="object-contain h-72 laptop:h-[600px]"
              />
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-gray-900 pt-4 mob:pt-5 mob:pb-5 laptop:pt-5 laptop:pb-5">
        <div className="text-white text-medium mob:text-sm laptop:text-medium text-center py-8">
          © 2022 - Present Abdullah Al Safayet. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
