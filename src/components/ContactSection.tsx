import { Box, Container, Typography } from '@mui/material';
import contactImage from "@/assets/contact.jpg";
import CTAButtons from "@/components/CTAButtons";

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

          <CTAButtons />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
