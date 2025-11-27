import { Box, Container } from '@mui/material';
import CTAButtons from "@/components/CTAButtons";
import heroImagePC from "@/assets/hero_bg.jpg";
import heroImageMobile from "@/assets/mhero_bg.png";

const HeroSection = () => {
  return (
    <Box
      id="hero"
      component="section"
      className="hero-banner-section"
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Image Container - Responsive */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Hero Image - PC/TABLET */}
        <Box
          component="img"
          src={heroImagePC}
          alt="Hero Banner"
          sx={{
            marginTop: '60px',
            display: { xs: 'none', md: 'block' },
            width: '1080px',
            height: 'auto',
            objectFit: 'cover',
          }}
        />

        {/* Hero Image - Mobile */}
        <Box
          component="img"
          src={heroImageMobile}
          alt="Hero Banner"
          sx={{
            display: { xs: 'block', md: 'none' },
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />

        {/* CTA Buttons Overlay */}
        <Container
          sx={{
            position: 'absolute',
            bottom: { xs: '20px', md: '40px' },
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <CTAButtons
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2, md: 3 }}
              sx={{
                maxWidth: { xs: '90%', sm: '500px', md: '600px' },
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;

