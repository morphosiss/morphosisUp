import Link from "next/link";
import React from "react";

interface ProfileCardProps {
  name: string;
  description: string;
  imageUrl: string;
  func: string;
  linkedinLink: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  imageUrl,
  func,
  linkedinLink,
}) => {
  return (
    <div className="bg-white p-5 shadow-lg rounded-2xl">
      <header className="flex items-center border-b border-zinc-200 pb-2 gap-3">
        <div
          className={`w-10 flex h-10 rounded-full ${imageUrl} bg-top bg-cover`}
        ></div>
        <div className="flex flex-col">
          <Link
            href={linkedinLink}
            target="_blank"
            className="text-lg transition-all hover:underline flex items-center gap-1  font-medium leading-none"
          >
            {name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon size-4 text-indigo-500 icon-tabler icons-tabler-outline icon-tabler-circles-relation"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
              <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
            </svg>
          </Link>
          <p className="text-[14px] font-[480]   text-indigo-500">
            {func}
          </p>
        </div>
      </header>
      <div className="mt-3">
        <p className=" text-[15px] font-[450] text-zinc-700">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
