const FooterSection = () => {
    return (
      <footer className="bg-slate-800 py-10 px-6 text-center">
        <a href="https://kecua.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            BTKIT Dwarahat
          </a>
        <p className="text-gray-400">© 2025 All Rights Reserved</p>
        {/* <p className="mt-2">Contact: sih@btkit.ac.in | +91 9876543210</p> */}
        <div className="flex justify-center space-x-4 mt-4">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            LinkedIn
          </a> */}
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  