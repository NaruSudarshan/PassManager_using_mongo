import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md border-t border-gray-700 shadow-inner py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-2 md:mb-0 font-mono">
          © {new Date().getFullYear()} <span className="text-blue-400 font-bold">PassManager</span> App. All rights reserved.
        </p>
        <a
          href="https://github.com/NaruSudarshan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
        >
          <FaGithub className="mr-2 text-xl" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
