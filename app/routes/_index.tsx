import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { Fragment } from "react";

import portfolio from "~/styles/routes/portfolio.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix App | Hands On" }];
};

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: portfolio,
    },
  ];
};

const toggleClick = () => {
  const sec = document.getElementById("sec");
  sec?.classList.toggle("active");

  const nav = document.getElementById("navigation");
  nav?.classList.toggle("active");
};

export default function Index() {
  return (
    <Fragment>
      <section id="sec" className="banner">
        <header>
          <a href="" className="logo">
            Coding ignite soul & spirit
            <br />
            <span>embrace creative freedom & discover the joy within!</span>
          </a>
          <div id="toggle" onClick={toggleClick}></div>
        </header>
        <div className="content">
          <h2>
            Hello World,
            <br />
            I'm <span>Hsu Chun Chu</span>, but you can call me{" "}
            <span>Sam Hsu</span>
          </h2>
          <p>
            A C# wizard with a knack for crafting top-notch MVC websites and
            APIs using Entity Framework Core in Code First pattern. I'm all
            about creating efficient and scalable applications that follow the
            best coding practices and design patterns. When I'm not coding, I'm
            out exploring the world and capturing its beauty through my lens.
            I'm also a React, Remix, and Tailwind CSS enthusiast with 2 years of
            experience in creating stunning and responsive user interfaces. I'm
            constantly learning and exploring new technologies to stay ahead of
            the curve. If you're looking for a skilled developer who values
            creativity, good coding practices, and continuous learning, I'm your
            guy. Let's connect and create something amazing together!
          </p>
          <a href="">Know More</a>
        </div>
        <ul className="sci">
          <li>
            <a href="">
              <svg viewBox="71 71 370 370">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg viewBox="0 0 512 512">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
              </svg>
            </a>
          </li>
        </ul>
      </section>
      <div id="navigation">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
