import BlogCard from "./BlogCard"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Blogs() {

  useGSAP(() => {

    gsap.from(".blog", {
      opacity: 0,
      y: -400,
      duration: 2,
      scrollTrigger: {
        trigger: ".blog",
        start: 'top +=300',
        end: '+=350',
        scrub: 2,
      },
    });
  });
  return (
    <div className="flex flex-col px-5 py-24 lg:px-8 xl:px-8  w-full bg-orange-100 overflow-hidden ">
      <div className="blog flex flex-col items-center">
        <p className="font-['Goldman'] text-xl font-bold text-gray-800">Read Out My</p>
        <p className="font-['Goldman'] text-4xl font-bold text-rose-400">Blogs</p>
      </div>
      <div className="flex flex-wrap gap-5 py-10 justify-center">
      <BlogCard blogname="Comprehensive Steps to Kick Off Global Hack Week" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1727336530106/d113424b-dc13-4bb5-befe-2bbe68a67596.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/comprehensive-steps-to-kick-off-global-hack-week" />
<BlogCard blogname="Build a To-Do List App with Vanilla JS✍️" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1719566824236/a4903e9a-9666-4f8c-84b4-e37bac8382a0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/build-a-to-do-list-app-with-vanilla-js" />
<BlogCard blogname="How to Begin Learning C Programming" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1719557732308/32b28e4f-a8f1-4bdf-b837-6017715bf4a8.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/how-to-begin-learning-c-programming" />
<BlogCard blogname="Basics of Computer Networking in Software Development" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1719558532616/fc3a13b6-e906-4d0b-9287-592cdeb596fc.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/basics-of-computer-networking-in-software-development" />
<BlogCard blogname="Node.js for Beginners: An Easy Guide" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1719079637893/1335cbcb-e46d-4e21-abef-c5d5b7b97557.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/nodejs-for-beginners-an-easy-guide" />
<BlogCard blogname="MongoDB: The Ideal Non-SQL Database" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1719592680015/5fb35266-d4c5-45ab-b884-2e6c08f3b0c3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/mongodb-the-ideal-non-sql-database" />
<BlogCard blogname="Weather App Tutorial: Easy Steps to Follow" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1718894743711/57ca33d3-1f46-426c-873d-0a18c17691e3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/weather-app-tutorial-easy-steps-to-follow" />
<BlogCard blogname="Understanding JavaScript: The Essential Browser Language" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1717220811340/3e2c92cf-ba8f-4552-a2b2-06423330759c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/understanding-javascript-the-essential-browser-language" />
<BlogCard blogname="Mastering C++: How to Start Learning Programming" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1718969106060/b3336e44-0743-40a6-8379-b1a5e467a7be.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/mastering-c-how-to-start-learning-programming" />
<BlogCard blogname="Unlocking the Power of API" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1710910830673/0da37bd3-ff16-435f-bd0d-2e97f1ffba03.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/unlocking-the-power-of-api" />
<BlogCard blogname="DATABASE : Store your Web-app data here" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1695650818295/e3c294bc-3475-44f6-b9c3-bdf6a5a42577.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/database-store-your-web-app-data-here"/>
<BlogCard blogname="GIT & GITHUB : Start Before Your Code Get Bugs🐛" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1691248071725/0e580f46-2c88-48bd-8684-dae03a83db44.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/git-github-start-before-your-code-get-bugs" />
<BlogCard blogname="Web Development: all you know before Start" blogdesc="" img="https://cdn.hashnode.com/res/hashnode/image/upload/v1688800293773/57fd96a1-4360-4230-85d8-e69891a6b971.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" link="https://nehalblogs.hashnode.dev/web-development-all-you-know-before-start" />

      </div>
    </div>
  )
}

export default Blogs