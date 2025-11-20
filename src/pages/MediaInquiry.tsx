import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';
import { Newspaper, ArrowRight } from '@mui/icons-material';

const MediaInquiry = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          pt: { xs: 10, md: 12 },
          pb: { xs: 6, md: 8 },
          bgcolor: 'background.default',
        }}
      >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
              px: 2,
              py: 1,
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            <Newspaper />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              メディア取材依頼
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            取材依頼フォーム
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            メディア関係者の皆様、取材のご依頼は下記フォームよりお願いいたします。
            <br />
            お問い合わせ内容を確認後、担当者よりご連絡させていただきます。
          </Typography>
        </Box>

        <Box
          component="form"
          sx={{
            bgcolor: 'background.paper',
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="お名前（必須）"
              variant="outlined"
              fullWidth
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />

            <TextField
              label="メールアドレス（必須）"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />

            <TextField
              label="電話番号"
              type="tel"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />

            <TextField
              label="メディア名・所属（必須）"
              variant="outlined"
              fullWidth
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />

            <TextField
              label="取材内容・ご質問（必須）"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={6}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowRight />}
              sx={{
                mt: 2,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
              }}
            >
              送信する
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            お急ぎの場合は、お電話でもお受けしております。
            <br />
            お気軽にお問い合わせください。
          </Typography>
        </Box>
      </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default MediaInquiry;

