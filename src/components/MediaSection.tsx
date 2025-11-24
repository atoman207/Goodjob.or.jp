import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

// Import all media images
import media1 from "@/assets/media image/media (1).png";
import media2 from "@/assets/media image/media (2).png";
import media3 from "@/assets/media image/media (3).png";
import media4 from "@/assets/media image/media (4).png";
import media5 from "@/assets/media image/media (5).png";
import media6 from "@/assets/media image/media (6).png";
import media7 from "@/assets/media image/media (7).png";
import media8 from "@/assets/media image/media (8).png";
import media9 from "@/assets/media image/media (9).png";
import media10 from "@/assets/media image/media (10).png";
import media11 from "@/assets/media image/media (11).png";
import media12 from "@/assets/media image/media (12).png";
import media13 from "@/assets/media image/media (13).png";
import media14 from "@/assets/media image/media (14).png";
import media15 from "@/assets/media image/media (15).png";
import media16 from "@/assets/media image/media (16).png";
import media17 from "@/assets/media image/media (17).png";
import media18 from "@/assets/media image/media (18).png";
import media19 from "@/assets/media image/media (19).png";
import media20 from "@/assets/media image/media (20).png";
import media21 from "@/assets/media image/media (21).png";
import media22 from "@/assets/media image/media (22).png";
import media23 from "@/assets/media image/media (23).png";
import media24 from "@/assets/media image/media (24).png";
import media25 from "@/assets/media image/media (25).png";
import media26 from "@/assets/media image/media (26).png";
import media27 from "@/assets/media image/media (27).png";
import media28 from "@/assets/media image/media (28).png";
import media29 from "@/assets/media image/media (29).png";
import media30 from "@/assets/media image/media (30).png";
import media31 from "@/assets/media image/media (31).png";
import media32 from "@/assets/media image/media (32).png";
import media33 from "@/assets/media image/media (33).png";
import media35 from "@/assets/media image/media (35).png";
import media1Jpg from "@/assets/media image/media (1).jpg";
import media2Jpg from "@/assets/media image/media (2).jpg";
import media3Jpg from "@/assets/media image/media (3).jpg";
import media4Jpg from "@/assets/media image/media (4).jpg";
import media5Jpg from "@/assets/media image/media (5).jpg";
import media6Jpg from "@/assets/media image/media (6).jpg";
import media7Jpg from "@/assets/media image/media (7).jpg";
import media8Jpg from "@/assets/media image/media (8).jpg";
import media9Jpg from "@/assets/media image/media (9).jpg";
import media11Jpg from "@/assets/media image/media (11).jpg";
import media1Webp from "@/assets/media image/media (1).webp";
import media3Webp from "@/assets/media image/media (3).webp";

// Create array of all media images
const allMediaImages = [
  media1, media2, media3, media4, media5, media6, media7, media8, media9, media10,
  media11, media12, media13, media14, media15, media16, media17, media18, media19, media20,
  media21, media22, media23, media24, media25, media26, media27, media28, media29, media30,
  media31, media32, media33, media35,
  media1Jpg, media2Jpg, media3Jpg, media4Jpg, media5Jpg, media6Jpg, media7Jpg, media8Jpg, media9Jpg, media11Jpg,
  media1Webp, media3Webp,
];

// Create media logos array with alt text
const createMediaLogos = (images: (string | typeof media1)[]) => {
  return images.map((src, index) => ({
    src,
    alt: `メディア ${index + 1}`,
  }));
};

// Shuffle array function using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create seamless infinite scroll with multiple copies
const createInfiniteLogos = (logos: ReturnType<typeof createMediaLogos>, copies: number = 3) => {
  return Array(copies).fill(null).flatMap((_, copyIndex) =>
    logos.map((logo, logoIndex) => ({
      ...logo,
      key: `logo-${copyIndex}-${logoIndex}`
    }))
  );
};

const MediaSection = () => {
  // Randomly select a subset of images (between 20-30 images) for variety
  const selectedImages = useMemo(() => {
    const shuffled = shuffleArray([...allMediaImages]);
    const count = Math.floor(Math.random() * 11) + 20; // Random count between 20-30
    return shuffled.slice(0, count);
  }, []);
  
  // Create media logos from randomly selected images
  const mediaLogos = useMemo(() => createMediaLogos(selectedImages), [selectedImages]);
  
  // Shuffle the logos for random order
  const shuffledLogos = useMemo(() => shuffleArray(mediaLogos), [mediaLogos]);
  
  // Create enough copies to ensure seamless scrolling with random order
  const infiniteLogos = useMemo(() => createInfiniteLogos(shuffledLogos, 3), [shuffledLogos]);

  return (
    <section className="media-section py-16 md:py-24 bg-white">
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
          <Button
            variant="outline"
            className="media-section__cta"
            asChild
          >
            <Link to="/media/inquiry">
              取材依頼はこちら →
            </Link>
          </Button>
        </div>

        <div className="media-grid">
          <div className="media-row media-row--slow-left">
            <div className="media-row__mask" aria-hidden="true" />
            <div className="media-row__track">
              {infiniteLogos.map(({ src, alt, key }) => (
                <figure key={key} className="media-logo">
                  <img src={src} alt={alt} className="media-logo__img" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;


