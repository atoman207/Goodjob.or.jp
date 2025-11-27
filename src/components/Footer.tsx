import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/footerlogo.png";
import mobileLogo from "@/assets/m-footerlogo.png";

const Footer = () => {
  const handleLogoClick = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { 
      icon: FaXTwitter, 
      href: "https://twitter.com", 
      label: "Twitter",
      color: "hover:text-[#000000] dark:hover:text-[#ffffff]"
    },
    { 
      icon: FaFacebook, 
      href: "https://facebook.com", 
      label: "Facebook",
      color: "hover:text-[#1877F2]"
    },
    { 
      icon: FaInstagram, 
      href: "https://instagram.com", 
      label: "Instagram",
      color: "hover:text-[#E4405F]"
    },
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]"
    },
    { 
      icon: FaYoutube, 
      href: "https://youtube.com", 
      label: "YouTube",
      color: "hover:text-[#FF0000]"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#001F3F] via-[#003366] to-[#001F3F] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button 
              type="button" 
              onClick={handleLogoClick} 
              className="focus:outline-none mb-6 transition-transform hover:scale-105"
            >
              <picture>
                <source media="(min-width: 600px)" srcSet={logo} />
                <img
                  src={mobileLogo}
                  alt="東京中央労働組合"
                  className="h-14 md:h-16 w-auto object-contain brightness-1"
                />
              </picture>
            </button>

            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed max-w-md">
              東京中央労働組合が運営する退職代行サービス。
              <br />
              弁護士監修のもと、確実で安全な退職をサポートします。
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">Follow us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                      flex items-center justify-center
                      text-gray-300 transition-all duration-300
                      ${social.color}
                      hover:bg-white/20 hover:scale-110 hover:rotate-3
                      border border-white/20
                    `}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>in Tokyo</span>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-blue-600">
              サービス
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  退職代行サービス
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  料金プラン
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  ご利用の流れ
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  利用者レビュー
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-blue-600">
              会社情報
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  運営会社
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  特定商取引法
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  個人情報保護方針
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-400 leading-relaxed">
                〒103-0022
                <br />
                東京都中央区日本橋室町1丁目11番12号
                <br />
                日本橋水野ビル7F
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400 text-center">
              © 2025 <span className="text-white font-semibold">ホワイト退職代行</span> 東京中央労働組合. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
