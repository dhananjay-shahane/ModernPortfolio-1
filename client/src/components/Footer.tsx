const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-light py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white flex items-center justify-center md:justify-start">
              <span className="text-primary">&lt;</span>
              <span>John Doe</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-slate-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400">&copy; {currentYear} John Doe. All rights reserved.</p>
            <p className="text-slate-500 text-sm mt-1">
              Built with <span className="text-primary">React</span> and <span className="text-primary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
