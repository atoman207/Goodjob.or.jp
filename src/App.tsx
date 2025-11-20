import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactLine from "./pages/ContactLine";
import ContactPhone from "./pages/ContactPhone";
import ContactMail from "./pages/ContactMail";
import MediaInquiry from "./pages/MediaInquiry";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact/line" element={<ContactLine />} />
            <Route path="/contact/phone" element={<ContactPhone />} />
            <Route path="/contact/mail" element={<ContactMail />} />
            <Route path="/media/inquiry" element={<MediaInquiry />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
