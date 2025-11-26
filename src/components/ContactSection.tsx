import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Phone } from '@mui/icons-material';
import contactImage from "@/assets/contact.jpg";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      component="section"
      className="contact-section-custom"
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: '#ffffff',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 1, md: 1.5 },
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 700,
              color: '#001F3F',
              lineHeight: 1.2,
            }}
          >
            まずは無料相談
          </Typography>

          {/* Subheading */}
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
              fontWeight: 400,
              color: '#6b7280',
              lineHeight: 1.6,
            }}
          >
            LINEまたは電話でお気軽にご相談ください
          </Typography>

          {/* Contact Image */}
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
              mb: { xs: 3, md: 4 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={contactImage}
              alt="相談スタッフ"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                maxWidth: { xs: '100%', md: '1200px' },
              }}
            />
          </Box>

          {/* CTA Buttons */}
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
              size="large"
              fullWidth
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 1.25, sm: 1.5, md: 2 },
                borderRadius: '9999px',
                minHeight: { xs: '48px', md: '56px' },
                bgcolor: '#22c55e',
                color: '#ffffff',
                '&:hover': {
                  bgcolor: '#16a34a',
                },
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
