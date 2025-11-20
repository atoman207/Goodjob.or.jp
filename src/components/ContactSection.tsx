import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Phone, Mail } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Box sx={{ maxWidth: '48rem', mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            まずは無料相談
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            LINEまたは電話で気軽にご相談ください
            <br />
            24時間365日対応・秘密厳守
          </Typography>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'secondary.main',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"/>
                    </svg>
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    LINE相談
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    24時間受付・最短即日対応
                  </Typography>
                  <Button
                    component="a"
                    href="/contact/line"
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                  >
                    LINEで相談する
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: 'primary.main',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <Phone />
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    電話相談
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    平日 9:00〜21:00（土日祝も対応）
                  </Typography>
                  <Button
                    component="a"
                    href="/contact/phone"
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ borderWidth: 2 }}
                  >
                    0120-XXX-XXX
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                <Mail color="primary" />
                <Typography variant="h6">メールでのお問い合わせ</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                お急ぎでない方はメールフォームからもご相談いただけます
              </Typography>
              <Button
                component="a"
                href="/contact/mail"
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                color="primary"
                sx={{ borderWidth: 2 }}
              >
                メールフォームへ
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
