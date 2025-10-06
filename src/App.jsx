import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// New TypeScript Pages - Auth & Landing
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import EmailVerification from './pages/auth/EmailVerification';
import ForgotPassword from './pages/auth/ForgotPassword';
import OnboardingWizard from './pages/auth/OnboardingWizard';

// New TypeScript Pages - eKYC & Identity
import EkycIntroduction from './pages/identity/EkycIntroduction';
import PassportUpload from './pages/identity/PassportUpload';
import SelfieVerification from './pages/identity/SelfieVerification';
import ReviewSubmit from './pages/identity/ReviewSubmit';

// New TypeScript Pages - Declaration
import EntryDeclarationForm from './pages/declaration/EntryDeclarationForm';
import DeclarationConfirmation from './pages/declaration/DeclarationConfirmation';
import DeclarationHistory from './pages/declaration/DeclarationHistory';

// New TypeScript Pages - Tourism
import TourSearch from './pages/tourism/TourSearch';
import TourDetail from './pages/tourism/TourDetail';
import BookingForm from './pages/tourism/BookingForm';
import BookingConfirmation from './pages/tourism/BookingConfirmation';
import MyBookings from './pages/tourism/MyBookings';
import TourReview from './pages/tourism/TourReview';

// New TypeScript Pages - VAT Refund
import VatRefundScan from './pages/vat/VatRefundScan';
import VatRefundReview from './pages/vat/VatRefundReview';
import VatRefundPayment from './pages/vat/VatRefundPayment';
import VatRefundTracking from './pages/vat/VatRefundTracking';
import DutyFreeMap from './pages/vat/DutyFreeMap';
import VatClaimLocations from './pages/vat/VatClaimLocations';

// New TypeScript Pages - Visa & Residence
import ResidenceRegistration from './pages/visa/ResidenceRegistration';
import ResidenceConfirmation from './pages/visa/ResidenceConfirmation';
import VisaExtension from './pages/visa/VisaExtension';
import VisaExtensionStatus from './pages/visa/VisaExtensionStatus';

// Old JSX Pages (keeping for backward compatibility)
import Landing from './pages/tourist/Landing';
import Login from './pages/tourist/Login';
import Register from './pages/tourist/Register';
import EKYCPassport from './pages/tourist/EKYCPassport';
import EKYCFace from './pages/tourist/EKYCFace';
import Dashboard from './pages/tourist/Dashboard';
import VisaApply from './pages/tourist/VisaApply';
import VATRefund from './pages/tourist/VATRefund';
import EntryDeclaration from './pages/tourist/EntryDeclaration';
import EntryQRCode from './pages/tourist/EntryQRCode';
import AccommodationRegister from './pages/tourist/AccommodationRegister';
import MapExplore from './pages/tourist/MapExplore';
import TourBooking from './pages/tourist/TourBooking';
import EmergencySOS from './pages/tourist/EmergencySOS';
import Profile from './pages/tourist/Profile';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import Database from './pages/admin/Database';

function App() {
  return (
    <Router>
      <Routes>
        {/* New Landing & Auth Routes (TypeScript) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login-new" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/onboarding" element={<OnboardingWizard />} />

        {/* eKYC & Digital Identity Routes (TypeScript) */}
        <Route path="/ekyc" element={<EkycIntroduction />} />
        <Route path="/ekyc/passport" element={<PassportUpload />} />
        <Route path="/ekyc/selfie" element={<SelfieVerification />} />
        <Route path="/ekyc/review" element={<ReviewSubmit />} />

        {/* Entry/Exit Declaration Routes (TypeScript) */}
        <Route path="/declaration/entry" element={<EntryDeclarationForm />} />
        <Route path="/declaration/confirmation" element={<DeclarationConfirmation />} />
        <Route path="/declaration/history" element={<DeclarationHistory />} />

        {/* Tourism Routes (TypeScript) */}
        <Route path="/tours-new" element={<TourSearch />} />
        <Route path="/tours-new/:id" element={<TourDetail />} />
        <Route path="/tours-new/book" element={<BookingForm />} />
        <Route path="/tours-new/confirmation" element={<BookingConfirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/tours-new/review" element={<TourReview />} />

        {/* VAT Refund Routes (TypeScript) */}
        <Route path="/vat/scan" element={<VatRefundScan />} />
        <Route path="/vat/review" element={<VatRefundReview />} />
        <Route path="/vat/payment" element={<VatRefundPayment />} />
        <Route path="/vat/tracking" element={<VatRefundTracking />} />
        <Route path="/vat-refund/duty-free-map" element={<DutyFreeMap />} />
        <Route path="/vat-refund/claim-locations" element={<VatClaimLocations />} />

        {/* Visa & Residence Routes (TypeScript) */}
        <Route path="/residence/register" element={<ResidenceRegistration />} />
        <Route path="/residence/confirmation" element={<ResidenceConfirmation />} />
        <Route path="/visa/extension" element={<VisaExtension />} />
        <Route path="/visa/status" element={<VisaExtensionStatus />} />

        {/* Old Tourist Routes (JSX - keeping for compatibility) */}
        <Route path="/old" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ekyc-passport" element={<EKYCPassport />} />
        <Route path="/ekyc-face" element={<EKYCFace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/visa-apply" element={<VisaApply />} />
        <Route path="/vat-refund" element={<VATRefund />} />
        <Route path="/entry-declaration" element={<EntryDeclaration />} />
        <Route path="/entry-qr" element={<EntryQRCode />} />
        <Route path="/accommodation" element={<AccommodationRegister />} />
        <Route path="/map" element={<MapExplore />} />
        <Route path="/tours" element={<TourBooking />} />
        <Route path="/emergency" element={<EmergencySOS />} />
        <Route path="/profile" element={<Profile />} />

        {/* Placeholder routes */}
        <Route path="/hotels" element={<TourBooking />} />
        <Route path="/transport" element={<MapExplore />} />
        <Route path="/restaurants" element={<MapExplore />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/database" element={<Database />} />
        <Route path="/admin/reports" element={<AdminDashboard />} />
        <Route path="/admin/settings" element={<AdminDashboard />} />
        <Route path="/admin/support" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
