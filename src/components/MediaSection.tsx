import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import fujiLogo from "@/assets/media image/huji-e1715413548344.jpg";
import tvAsahiLogo from "@/assets/media image/terebiasahi.png";
import nhkLogo from "@/assets/media image/NHK.svg_.png";
import tbsLogo from "@/assets/media image/03.png";
import nipponTvLogo from "@/assets/media image/nittere-e1715413590783.png";
import tvTokyoLogo from "@/assets/media image/tvtokyo.png";
import tokyoMxLogo from "@/assets/media image/tokyomx-e1715410167441.png";
import hbcLogo from "@/assets/media image/hokaido-e1715664829156.png";
import homeTvLogo from "@/assets/media image/hirosimarogo-e1715182945222.png";
import newsZeroLogo from "@/assets/media image/nnn.png";
import zipLogo from "@/assets/media image/zip.jpg";
import mezamashiLogo from "@/assets/media image/mezamashi8.jpg";
import miyaneLogo from "@/assets/media image/miyane.png";
import hatoriLogo from "@/assets/media image/hatori.png";
import jChannelLogo from "@/assets/media image/jchannel.jpg";
import abemaLogo from "@/assets/media image/ogp-e1715152877505.png";
import bsFujiLogo from "@/assets/media image/head_logo_bsf.png";
import plusLogo from "@/assets/media image/plus-e1715664872404.png";
import metereLogo from "@/assets/media image/metere.png";
import kyodoLogo from "@/assets/media image/06.png";
import nikkeiLogo from "@/assets/media image/10495639.webp";
import yomiuriLogo from "@/assets/media image/yomiuri.png";
import channelsLogo from "@/assets/media image/channels.jpg";

const topLogos = [
  { src: fujiLogo, alt: "フジテレビ" },
  { src: tvAsahiLogo, alt: "テレビ朝日" },
  { src: nhkLogo, alt: "NHK" },
  { src: tbsLogo, alt: "TBS" },
  { src: nipponTvLogo, alt: "日本テレビ" },
  { src: tokyoMxLogo, alt: "TOKYO MX" },
  { src: tvTokyoLogo, alt: "テレビ東京" },
  { src: hbcLogo, alt: "北海道放送" },
  { src: homeTvLogo, alt: "広島ホームテレビ" },
  { src: abemaLogo, alt: "ABEMA" },
  { src: newsZeroLogo, alt: "news zero" },
  { src: mezamashiLogo, alt: "めざまし8" },
  { src: zipLogo, alt: "ZIP!" },
  { src: miyaneLogo, alt: "ミヤネ屋" },
  { src: hatoriLogo, alt: "羽鳥慎一モーニングショー" },
  { src: jChannelLogo, alt: "スーパーJチャンネル" },
];

const bottomLogos = [
  { src: bsFujiLogo, alt: "BSフジ" },
  { src: plusLogo, alt: "日テレプラス" },
  { src: metereLogo, alt: "メ〜テレ" },
  { src: kyodoLogo, alt: "共同通信" },
  { src: nikkeiLogo, alt: "日本経済新聞" },
  { src: yomiuriLogo, alt: "読売新聞" },
  { src: channelsLogo, alt: "街録チャンネル" },
];

const MediaSection = () => {
  return (
    <section className="media-section py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="media-section__header mb-10">
          <div className="media-section__title-group">
            <span className="media-section__badge">
              <Newspaper className="media-section__badge-icon" aria-hidden="true" />
              MEDIA
            </span>
            <span className="media-section__note">
              国内主要メディアで多数掲載されています
            </span>
          </div>
          <Button variant="outline" className="media-section__cta">
            取材依頼はこちら →
          </Button>
        </div>

        <div className="media-grid">
          <div className="media-row media-row--slow-left">
            <div className="media-row__mask" aria-hidden="true" />
            {[0, 1].map((index) => (
              <div key={`top-track-${index}`} className="media-row__track">
                {topLogos.map(({ src, alt }, logoIndex) => (
                  <figure key={`top-${logoIndex}-${index}`} className="media-logo">
                    <img src={src} alt={alt} className="media-logo__img" loading="lazy" />
                  </figure>
                ))}
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default MediaSection;


