import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Phone } from '@mui/icons-material';
import contactBackground from "@/assets/contact.jpg";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      component="section"
      className="contact-section-custom"
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', md: '80vh' },
        py: { xs: 6, md: 0 },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center', md: 'left center' },
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      
      {/* Overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: { xs: 'rgba(255, 255, 255, 0.85)', md: 'rgba(0, 0, 0, 0.3)' },
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <Container sx={{ 
        position: 'relative', 
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-start', md: 'flex-end' },
        alignItems: 'center',
        py: { xs: 4, md: 6 },
      }}>
        <Box sx={{ 
          maxWidth: { xs: '100%', sm: '48rem' }, 
          mx: 'auto', 
          textAlign: 'center',
          pt: { xs: 2, md: 0 },
          pb: { xs: 4, md: 8 },
          width: '100%',
          px: { xs: 2, sm: 3 },
        }}>
          <Typography 
            variant="h2" 
            className="section-title"
            sx={{ 
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: { xs: '#001F3F', md: '#ffffff' },
              textShadow: { xs: 'none', md: '2px 2px 8px rgba(0,0,0,0.5)' },
              lineHeight: 1.2,
            }}
          >
            まずは無料相談
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem', lg: '1.4rem' },
              color: { xs: '#001F3F', md: '#ffffff' },
              textShadow: { xs: 'none', md: '1px 1px 4px rgba(0,0,0,0.5)' },
              lineHeight: 1.6,
            }}
          >
            LINEまたは電話でお気軽にご相談ください
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 2, sm: 3 }} 
            sx={{ 
              justifyContent: 'center',
              alignItems: 'stretch',
              width: '100%',
              maxWidth: { xs: '100%', sm: '500px' },
            }}
          >
            <Button
              component="a"
              href="/contact/line"
              target="_blank"
              rel="noreferrer"
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 1.25, sm: 1.5, md: 2 },
                borderRadius: '9999px',
                minHeight: { xs: '48px', md: '56px' },
              }}
              startIcon={
                <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
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
              variant="contained"
              size="large"
              fullWidth
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 1.25, sm: 1.5, md: 2 },
                borderRadius: '9999px',
                minHeight: { xs: '48px', md: '56px' },
                bgcolor: '#6b7280',
                color: '#ffffff',
                '&:hover': {
                  bgcolor: '#4b5563',
                },
              }}
              startIcon={<Phone sx={{ flexShrink: 0 }} />}
            >
              電話で相談
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
