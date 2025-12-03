import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import contactImage from "@/assets/contact.jpg";
import CTAButtons from "@/components/CTAButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      className="contact-section-custom"
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: '#ffffff',
        py: { xs: 5, md: 7 },
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

          {/* Contact Form */}
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', md: '600px' },
              mt: { xs: 4, md: 6 },
              mb: { xs: 4, md: 6 },
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: 'background.paper',
                p: { xs: 3, md: 4 },
                borderRadius: '0.25rem',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: '#001F3F',
                  mb: { xs: 2, md: 3 },
                  textAlign: 'center',
                }}
              >
                お問い合わせフォーム
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    お名前 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className="w-full"
                  />
                </Box>

                <Box>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    メールアドレス <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full"
                  />
                </Box>

                <Box>
                  <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    電話番号
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="090-1234-5678"
                    className="w-full"
                  />
                </Box>

                <Box>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    ご相談内容 <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="気になる点をご自由にご記載ください"
                    className="min-h-[140px] w-full"
                  />
                </Box>

                {submitStatus === 'success' && (
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: '#d1fae5',
                      color: '#065f46',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      textAlign: 'center',
                    }}
                  >
                    お問い合わせありがとうございます。1〜3営業日以内にご返信いたします。
                  </Box>
                )}

                {submitStatus === 'error' && (
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: '#fee2e2',
                      color: '#991b1b',
                      borderRadius: '0.25rem',
                      fontSize: '0.875rem',
                      textAlign: 'center',
                    }}
                  >
                    送信に失敗しました。しばらくしてから再度お試しください。
                  </Box>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </Button>

                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    textAlign: 'center',
                    display: 'block',
                  }}
                >
                  送信によりプライバシーポリシーに同意したものとみなされます。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
