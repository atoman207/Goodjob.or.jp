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

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <button type="button" onClick={handleLogoClick} className="focus:outline-none">
              <picture>
                <source media="(min-width: 600px)" srcSet={logo} />
                <img
                  src={mobileLogo}
                  alt="東京中央労働組合"
                  className="h-12 mb-4 brightness-1 w-auto object-contain"
                />
              </picture>
            </button>
            <span className="site-title site-title--light mb-4 inline-flex">
              東京<span className="site-title__sword">中</span>央労働組合
            </span>
            <p className="text-sm opacity-80 mb-4">
              東京中央労働組合が運営する退職代行サービス。
              <br />
              弁護士監修のもと、確実で安全な退職をサポートします。
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  退職代行サービス
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:opacity-100 transition-opacity">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="#process" className="hover:opacity-100 transition-opacity">
                  ご利用の流れ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  運営会社
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  特定商取引法
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  個人情報保護方針
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2025 ホワイト退職代行 東京中央労働組合. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Twitter
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Facebook
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
