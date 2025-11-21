import { Box, Container, Typography, Chip, Button, Stack } from '@mui/material';
import { CheckCircle, Shield, CreditCard, Phone } from '@mui/icons-material';
import type { IconType } from "react-icons";
import {
  FaRegCommentDots,
  FaFeather,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";
import heroImage from "@/assets/hero-bg.jpeg";
import serviceLogo from "@/assets/slogo.jpg";

const heroAccents: { Icon: IconType; sx: any }[] = [
  { Icon: FaRegCommentDots, sx: { position: 'absolute', top: '15%', left: '8%', fontSize: '1.8rem', color: 'rgba(255,255,255,0.5)', animation: 'float 3s ease-in-out infinite' } },
  { Icon: FaFeather, sx: { position: 'absolute', top: '55%', right: '12%', fontSize: '1.4rem', color: 'rgba(255,255,255,0.4)', animation: 'float 4s ease-in-out infinite' } },
  { Icon: FaHandsHelping, sx: { position: 'absolute', bottom: '25%', left: '15%', fontSize: '1.6rem', color: 'rgba(255,255,255,0.5)', animation: 'float 3.5s ease-in-out infinite' } },
];

const HeroSection = () => {
  return (
    <Box
      id="hero"
      component="section"
      className="hero-banner-section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
        overflow: 'hidden',
      }}
    >
      {/* Background Image - Full Screen */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '4rem', md: '5rem' },
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: { xs: 'calc(100% - 4rem)', md: 'calc(100% - 5rem)' },
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt="Professional consultant"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: { xs: 'center 30%', md: 'center center' },
            opacity: 1,
            filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
          }}
        />
        {heroAccents.map(({ Icon, sx }, index) => (
          <Icon key={index} style={sx} aria-hidden="true" />
        ))}
      </Box>

      {/* Male Speech Bubble - Left Side */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '5%', md: '8%' },
          top: { xs: '25%', md: '30%' },
          zIndex: 15,
          maxWidth: { xs: '45%', md: '35%' },
        }}
      >
        <Box
          className="hero-speech-bubble hero-speech-bubble--male"
          sx={{
            bgcolor: '#facc15',
            color: '#ffffff',
            borderRadius: '50%',
            padding: { xs: '1rem 1.25rem', md: '1.5rem 2rem' },
            position: 'relative',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            transform: 'rotate(-5deg)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              left: { xs: '20%', md: '25%' },
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '20px solid #facc15',
              transform: 'rotate(15deg)',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem', lg: '1.4rem' },
              fontWeight: 800,
              lineHeight: 1.4,
              textAlign: 'center',
              textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            もう悩まなくていいんです。
            <br />
            今こそ決断！
          </Typography>
        </Box>
      </Box>

      {/* Female Speech Bubble - Right Side */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '5%', md: '8%' },
          top: { xs: '35%', md: '40%' },
          zIndex: 15,
          maxWidth: { xs: '45%', md: '35%' },
        }}
      >
        <Box
          className="hero-speech-bubble hero-speech-bubble--female"
          sx={{
            bgcolor: '#dc2626',
            color: '#facc15',
            borderRadius: '50%',
            padding: { xs: '1rem 1.25rem', md: '1.5rem 2rem' },
            position: 'relative',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            transform: 'rotate(5deg)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              right: { xs: '20%', md: '25%' },
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '20px solid #dc2626',
              transform: 'rotate(-15deg)',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem', lg: '1.4rem' },
              fontWeight: 800,
              lineHeight: 1.4,
              textAlign: 'center',
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            上司に会わず、会社に行かず、
            <br />
            サヨナラを！
          </Typography>
        </Box>
      </Box>

      <Container sx={{ position: 'relative', zIndex: 10, py: { xs: 4, md: 6 } }}>
        <Box className="hero-banner-content" sx={{ maxWidth: { xs: '100%', md: '900px' }, mx: 'auto' }}>

          {/* Service Name Badge */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 2, md: 3 } }}>
            <Box className="hero-service-badge">
              <Box
                component="img"
                src={serviceLogo}
                alt="ホワイト退職代行"
                sx={{
                  height: { xs: '60px', sm: '80px', md: '100px' },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
                }}
              />
            </Box>
          </Box>

          {/* Trust Line */}
          <Typography
            className="hero-trust-line"
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' },
              fontWeight: 600,
              color: '#ffffff',
              textAlign: 'center',
              mb: { xs: 2, md: 2.5 },
              textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            安心と信頼で選ぶなら、東京都労働委員会が正式認証した
            <br />
            <Box component="span" sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' }, fontWeight: 700 }}>
              東京中央労働組合にお任せください。
            </Box>
          </Typography>

          {/* Features Row */}
          <Box className="hero-features-row" sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2, md: 3 }, mb: { xs: 2, md: 3 }, flexWrap: 'wrap' }}>
            <Chip
              icon={<CheckCircle sx={{ color: '#22c55e !important' }} />}
              label="カンタン、カードOK"
              className="hero-feature-chip hero-feature-chip--simple"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                fontWeight: 700,
                height: { xs: '32px', md: '40px' },
                px: { xs: 1.5, md: 2 },
              }}
            />
            <Chip
              icon={<Shield sx={{ color: '#3b82f6 !important' }} />}
              label="信頼"
              className="hero-feature-chip hero-feature-chip--trust"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                fontWeight: 700,
                height: { xs: '32px', md: '40px' },
                px: { xs: 1.5, md: 2 },
              }}
            />
            <Chip
              icon={<FaCheckCircle style={{ color: '#facc15' }} />}
              label="安心"
              className="hero-feature-chip hero-feature-chip--safe"
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                fontWeight: 700,
                height: { xs: '32px', md: '40px' },
                px: { xs: 1.5, md: 2 },
              }}
            />
          </Box>

          {/* Benefits Row */}
          <Box className="hero-benefits-row" sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 1.5, md: 2 }, mb: { xs: 2.5, md: 3 }, flexWrap: 'wrap' }}>
            <Chip
              label="LINEで完結"
              className="hero-benefit-chip hero-benefit-chip--line"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                fontWeight: 600,
                height: { xs: '28px', md: '36px' },
                px: { xs: 1, md: 1.5 },
              }}
            />
            <Chip
              label="返金保証"
              className="hero-benefit-chip hero-benefit-chip--refund"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                fontWeight: 600,
                height: { xs: '28px', md: '36px' },
                px: { xs: 1, md: 1.5 },
              }}
            />
            <Chip
              icon={<CreditCard sx={{ fontSize: '1rem !important' }} />}
              label="後払いOK"
              className="hero-benefit-chip hero-benefit-chip--payment"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                fontWeight: 600,
                height: { xs: '28px', md: '36px' },
                px: { xs: 1, md: 1.5 },
              }}
            />
          </Box>

          {/* Price Section */}
          <Box className="hero-price-section" sx={{ textAlign: 'center', mt: { xs: 2, md: 3 } }}>
            <Typography
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                color: '#ffffff',
                mb: { xs: 0.5, md: 1 },
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              料金は下記だけ（追加一切なし）
            </Typography>
            <Typography
              className="hero-price-amount"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 900,
                color: '#facc15',
                textShadow: '3px 3px 8px rgba(0,0,0,0.6), 0 0 20px rgba(250,204,21,0.5)',
                lineHeight: 1,
                fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
              }}
            >
              ￥２４,０００
              <Box component="span" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, ml: 0.5 }}>
                （税込）
              </Box>
            </Typography>
          </Box>

          {/* CTA Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 4 } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', sm: 'auto' } }}>
              <Button
                component="a"
                href="/contact/line"
                target="_blank"
                rel="noreferrer"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1.125rem' },
                  fontWeight: 700,
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: '9999px',
                  boxShadow: '0 8px 24px rgba(67, 160, 71, 0.4)',
                  '&:hover': {
                    boxShadow: '0 12px 32px rgba(67, 160, 71, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                startIcon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"/>
                  </svg>
                }
              >
                LINEで相談
              </Button>
              <Button
                component="a"
                href="/contact/phone"
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                size="large"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1.125rem' },
                  fontWeight: 700,
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: '9999px',
                  borderWidth: 2,
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(255, 255, 255, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
                startIcon={<Phone />}
              >
                無料相談
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
