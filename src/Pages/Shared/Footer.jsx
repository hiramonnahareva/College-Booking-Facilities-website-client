import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";



      const Year = new Date().getFullYear();
      const Footer = () => {
      
      
          return (
              <footer className="bg-primary text-gray-100 text-center pt-20 pb-6">
                          <div className="flex justify-center py-4 space-x-4">
                                  <a 
                                      className=" transform border-b-2 border-primary 
                                      transition-all duration-700 ease-in-out" href="/">
                                      Home
                                  </a>
                                  <a
                                      className=" transform border-b border-primary
                                   transition-all duration-700 ease-in-out" href="/colleges">colleges
                                  </a>
                                  <a
                                      className="transform border-b border-primary
                                   transition-all duration-700 ease-in-out" href="/admission">
                                    Admission
                                  </a>
                          </div>
                              <div className="flex justify-center py-4 space-x-4">
                                  <a 
                                      className=" transform hover:scale-150
                                      transition-all duration-700 ease-in-out" target="_blank" href="https://github.com/hiramonnahareva">
                                      <FaGithub className='text-2xl' />
                                  </a>
                                  <a
                                      className=" transform hover:scale-150
                                   transition-all duration-700 ease-in-out" target="_blank" href="https://www.linkedin.com/in/deveva">
                                      <FaLinkedinIn className='text-2xl' />
                                  </a>
                                  <a
                                      className="hover transform hover:scale-150
                                   transition-all duration-700 ease-in-out" target="_blank" href="https://www.instagram.com/hiramonnahareva/">
                                      <FaInstagram className='text-2xl' />
                                  </a> 
                          </div>
                      <h6 className="text-center">&copy; College Booking Facilities {Year}</h6>
              </footer>
    );
};

export default Footer;