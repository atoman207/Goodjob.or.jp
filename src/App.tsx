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
import NewsDetail from "./pages/NewsDetail";
import NewsItemDetail from "./pages/NewsItemDetail";
import AdminPage from "./pages/AdminPage";
import ServiceRetirementContact from "./pages/ServiceRetirementContact";
import ServiceNegotiation from "./pages/ServiceNegotiation";
import ServiceJobChange from "./pages/ServiceJobChange";

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
            <Route path="/news" element={<NewsDetail />} />
            <Route path="/news/:id" element={<NewsItemDetail />} />
            <Route path="/service/retirement-contact" element={<ServiceRetirementContact />} />
            <Route path="/service/negotiation" element={<ServiceNegotiation />} />
            <Route path="/service/job-change" element={<ServiceJobChange />} />
            <Route path="/addinfo" element={<AdminPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
