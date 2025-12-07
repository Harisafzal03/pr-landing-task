import React, { useState } from "react";
import { NavbarContent } from "../../types/content";
import Logo from "../../assets/logo";
import { Button } from "../ui/Button";
import TrustpilotLogo from "../../assets/trustpilot";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC<{ data: NavbarContent }> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Get first letter of email for avatar
  const getInitial = () => {
    if (currentUser?. email) {
      return currentUser.email.charAt(0).toUpperCase();
    }
    return "";
  };

  return (
    <header className="w-full">
      {data. contactBar && (
        <div className="w-full bg-[#0B2540] text-white text-xs md:text-base py-[9px]">
          <div className="max-w-[1280px] max-xl:mx-4 mx-auto flex items-center justify-end max-md:justify-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2. 73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2. 23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7. 69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10. 4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14. 6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13. 1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14. 2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17. 8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z"
                fill="white"
              />
            </svg>
            <span>
              {data.contactBar.label}: {data.contactBar.phone}
            </span>
          </div>
        </div>
      )}
      <nav className="bg-white relative">
        <div className="max-w-[1290px] max-xl:mx-4 mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-14">
            <Logo />
            <ul className="hidden md:flex items-center gap-9">
              {data.links. map((l) => (
                <li key={l.label}>
                  <a
                    className="text-slate-700 hover:text-slate-900"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-32">
            <div className="max-lg:hidden">
              <TrustpilotLogo />
            </div>
            <div className="flex items-center gap-4 max-md:gap-2">
              {currentUser ? (
                // Logged in state - Show Dashboard button and Avatar
                <>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="inline-flex items-center justify-center rounded-md text-base max-md:text-xs py-4 max-md:py-2 px-8 max-md:px-4 font-medium bg-[#FFE03E] hover:bg-[#F8D12E] transition-colors"
                  >
                    Dashboard
                  </button>
                  <div className="flex items-center justify-center w-10 h-10 max-md:w-8 max-md:h-8 rounded-full bg-[#FFE03E] text-[#0B2540] font-bold text-lg max-md:text-base">
                    {getInitial()}
                  </div>
                </>
              ) : (
                // Logged out state - Show Login/Sign Up buttons
                <>
                  {data.rightCtas?.map((cta) => (
                    <a 
                      key={cta. label} 
                      href={
                        cta.label.toLowerCase() === 'login' 
                          ? '/login' 
                          : cta.label.toLowerCase() === 'sign up' 
                          ? '/signup' 
                          : cta.href
                      }
                    >
                      <button
                        className={`inline-flex items-center justify-center rounded-md text-base max-md:text-xs py-4 max-md:py-2 px-8 max-md:px-4 font-medium ${
                          cta.variant === "primary"
                            ? "bg-[#FFE03E] hover:bg-[#F8D12E]"
                            : "border border-[#F8D12E] hover:bg-[#FFF9E6]"
                        } transition-colors`}
                      >
                        {cta. label}
                      </button>
                    </a>
                  ))}
                </>
              )}
              <div className="max-md:block hidden">
                <div
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <div className="relative w-6 h-6">
                    {/* Line 1 */}
                    <span
                      className={`absolute left-0 top-1 block h-[2px] w-full bg-[#0B2540] transition-all duration-300 ${
                        open ?  "rotate-45 translate-y-2" : ""
                      }`}
                    />

                    {/* Line 2 */}
                    <span
                      className={`absolute left-0 top-[10px] block h-[2px] w-full bg-[#0B2540] transition-all duration-300 ${
                        open ?  "opacity-0" : ""
                      }`}
                    />

                    {/* Line 3 */}
                    <span
                      className={`absolute left-0 top-[16px] block h-[2px] w-full bg-[#0B2540] transition-all duration-300 ${
                        open ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="absolute top-full z-10 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col gap-4 text-xs px-4 py-6">
              {data.links.map((l) => (
                <li key={l.label}>
                  <a
                    className="text-slate-700 hover:text-slate-900 block"
                    href={l.href}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Section */}
            {currentUser ?  (
              <div className="px-4 pb-6 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFE03E] text-[#0B2540] font-bold text-lg">
                    {getInitial()}
                  </div>
                  <div className="flex-1">
                    <button
                      onClick={() => {
                        navigate('/dashboard');
                        setOpen(false);
                      }}
                      className="w-full py-2 px-4 bg-[#FFE03E] text-[#0B2540] rounded-md font-medium hover:bg-[#F8D12E] transition-colors"
                    >
                      Dashboard
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-4 pb-6 border-t border-gray-200 pt-4">
                <div className="flex gap-3">
                  {data.rightCtas?.map((cta) => (
                    <a
                      key={cta.label}
                      href={
                        cta.label.toLowerCase() === 'login'
                          ? '/login'
                          : cta.label. toLowerCase() === 'sign up'
                          ? '/signup'
                          : cta.href
                      }
                      className="flex-1"
                      onClick={() => setOpen(false)}
                    >
                      <button
                        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                          cta.variant === "primary"
                            ? "bg-[#FFE03E] hover:bg-[#F8D12E]"
                            : "border border-[#F8D12E] hover:bg-[#FFF9E6]"
                        }`}
                      >
                        {cta.label}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};