import profilePic from "../assets/tekraj.png";

import { PROFILE_INFO, SOCIAL_LINKS } from "../constants/home.ts";

const Home: React.FC = () => {
  return (
    <section id="home" className="pt-10 max-w-5xl mx-auto px-6 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <h1 className="text-4xl font-bold">{PROFILE_INFO.name}</h1>
          <p className="text-gray-600 mt-1">{PROFILE_INFO.title}</p>

          <div className="flex gap-3 mt-4">
            {SOCIAL_LINKS.map(({ name, url, icon: Icon, showText }) => (
              <a
                key={name}
                href={url}
                className="flex items-center gap-1 px-3 py-2 border rounded-md hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} />
                {showText && <span>CV</span>}
              </a>
            ))}
          </div>
        </div>

        <img
          src={profilePic}
          alt="Profile"
          className="w-36 h-36 rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
