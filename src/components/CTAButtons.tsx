import { Button, Stack, StackProps, SxProps, Theme } from '@mui/material';
import { Phone } from '@mui/icons-material';

interface CTAButtonsProps extends StackProps {
  lineHref?: string;
  phoneHref?: string;
  lineLabel?: string;
  phoneLabel?: string;
  buttonSize?: 'small' | 'medium' | 'large';
  fullWidthButtons?: boolean;
  lineButtonSx?: SxProps<Theme>;
  phoneButtonSx?: SxProps<Theme>;
}

const LineIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" />
  </svg>
);

const CTAButtons = ({
  lineHref = '/contact/line',
  phoneHref = '/contact/phone',
  lineLabel = 'LINEで相談',
  phoneLabel = '電話で相談',
  buttonSize = 'large',
  fullWidthButtons = true,
  lineButtonSx,
  phoneButtonSx,
  direction,
  spacing,
  sx,
  ...rest
}: CTAButtonsProps) => (
  <Stack
    direction={direction ?? { xs: 'column', sm: 'row' }}
    spacing={spacing ?? { xs: 2, sm: 3 }}
    sx={{
      justifyContent: 'center',
      alignItems: 'stretch',
      width: '100%',
      maxWidth: { xs: '100%', sm: '500px' },
      ...sx,
    }}
    {...rest}
  >
    <Button
      component="a"
      href={lineHref}
      target="_blank"
      rel="noreferrer"
      variant="contained"
      size={buttonSize}
      fullWidth={fullWidthButtons}
      sx={{
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
        px: { xs: 3, sm: 4, md: 6 },
        py: { xs: 1.25, sm: 1.5, md: 2 },
        borderRadius: '9999px',
        minHeight: { xs: '48px', md: '56px' },
        bgcolor: '#22c55e',
        color: '#ffffff',
        boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4)',
        '&:hover': {
          bgcolor: '#16a34a',
          boxShadow: '0 12px 32px rgba(34, 197, 94, 0.5)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
        ...lineButtonSx,
      }}
      startIcon={<LineIcon />}
    >
      {lineLabel}
    </Button>

    <Button
      component="a"
      href={phoneHref}
      target="_blank"
      rel="noreferrer"
      variant="contained"
      size={buttonSize}
      fullWidth={fullWidthButtons}
      sx={{
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
        px: { xs: 3, sm: 4, md: 6 },
        py: { xs: 1.25, sm: 1.5, md: 2 },
        borderRadius: '9999px',
        minHeight: { xs: '48px', md: '56px' },
        bgcolor: '#6b7280',
        color: '#ffffff',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          bgcolor: '#4b5563',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
        ...phoneButtonSx,
      }}
      startIcon={<Phone sx={{ flexShrink: 0 }} />}
    >
      {phoneLabel}
    </Button>
  </Stack>
);

export default CTAButtons;

