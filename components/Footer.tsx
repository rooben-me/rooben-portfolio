import Image from "next/image";
import { InterLinks } from "./Navbar";

const social = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ruban-kumar-b-6701b2126/",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
        width="18"
        height="18"
      >
        <path d="M0 5h3.578v11H0zm13.324.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 00-.145-.028A3.207 3.207 0 0012.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 00-2.676-3.448z"></path>
        <circle cx="1.75" cy="1.75" r="1.75"></circle>
      </svg>
    ),
  },
  {
    name: "Uxcel",
    href: "https://app.uxcel.com/ux/7FO2GP57JJ14",
    icon: (props) => (
      <svg fill="currentColor" viewBox="3 3 24 24" {...props}>
        <path d="M6.46387 11.8377C6.46387 11.6512 6.66579 11.5345 6.82738 11.6278L12.5233 14.9139C12.6734 15.0005 12.7658 15.1605 12.7658 15.3338V23.3599C12.7658 23.5465 12.5639 23.6631 12.4023 23.5699L6.70639 20.2838C6.55632 20.1972 6.46387 20.0371 6.46387 19.8639V17.443C6.46387 17.3502 6.5639 17.2918 6.64469 17.3375L9.99959 19.2337C10.0804 19.2794 10.1804 19.221 10.1804 19.1282V16.6159C10.1804 16.4994 10.1177 16.3919 10.0163 16.3345L6.7101 14.4658C6.55795 14.3798 6.46387 14.2186 6.46387 14.0438V11.8377ZM21.6937 11.6278C21.8553 11.5345 22.0572 11.6512 22.0572 11.8377V14.0438C22.0572 14.2186 21.9631 14.3798 21.811 14.4658L18.5048 16.3345C18.4034 16.3919 18.3407 16.4994 18.3407 16.6159V19.1282C18.3407 19.221 18.4407 19.2794 18.5215 19.2337L21.8764 17.3375C21.9572 17.2918 22.0572 17.3502 22.0572 17.443V19.8639C22.0572 20.0371 21.9648 20.1972 21.8147 20.2838L16.1187 23.5699C15.9572 23.6631 15.7552 23.5465 15.7552 23.3599V15.3338C15.7552 15.1605 15.8477 15.0005 15.9978 14.9139L21.6937 11.6278ZM13.7808 7.20706C14.0782 7.03775 14.4429 7.03775 14.7402 7.20707L19.4276 9.87579C19.5903 9.96843 19.591 10.2027 19.4289 10.2963L17.086 11.6493C16.9873 11.7063 16.8658 11.7071 16.7664 11.6513L14.4186 10.3351C14.3204 10.2801 14.2007 10.2801 14.1025 10.3351L11.7547 11.6513C11.6553 11.7071 11.5338 11.7063 11.4351 11.6493L9.09218 10.2963C8.93004 10.2027 8.93076 9.96843 9.09346 9.87579L13.7808 7.20706Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/rooben-me",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.247a10 10 0 00-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 00-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 011.538 1.025 2.137 2.137 0 002.912.825 2.104 2.104 0 01.638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 011.025-2.688 3.594 3.594 0 01.1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 015 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 01.1 2.65 3.869 3.869 0 011.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 01.675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0012 2.247z"></path>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 flex flex-col items-center gap-6">
        <InterLinks isFooter />
        <div className="mt-4 md:mt-6 flex justify-center space-x-10">
          {social.map((item) => (
            <a
              rel="noopener noreferrer"
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-link hover:text-primary-main transition-colors ease-in-out duration-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Signature */}
        <img src="/image/signature.png" className="w-72 mt-24" />
      </div>
    </footer>
  );
}
