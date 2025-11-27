import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a5f', // Navy blue
      light: '#4a6fa5',
      dark: '#0f1f3a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#22c55e', // Green
      light: '#4ade80',
      dark: '#16a34a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
    h1: {
      fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Sawarabi Mincho", "Hiragino Mincho ProN", "Yu Mincho", serif',
      fontWeight: 700,
      color: '#1e3a5f',
    },
    h3: {
      fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
    },
    body2: {
      fontFamily: '"Noto Sans JP", "Yu Gothic", "Meiryo", sans-serif',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.25rem',
          fontWeight: 600,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 640px)': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          },
        },
      },
    },
  },
});

export default theme;

