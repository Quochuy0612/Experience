// ============================================================================
// EXPERIENCE VIETNAM - TYPE DEFINITIONS
// ============================================================================

// ============================================================================
// USER & AUTHENTICATION TYPES
// ============================================================================

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  nationality: string;
  nationalityCode: string;
  phone: string;
  phoneCountryCode: string;
  profilePhoto?: string;
  preferredLanguage: 'en' | 'vi' | 'zh' | 'ja' | 'ko';
  accountStatus: 'active' | 'pending' | 'suspended' | 'deleted';
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  phoneCountryCode?: string;
  nationality: string;
  password: string;
  confirmPassword: string;
  preferredLanguage: string;
  agreeToTerms: boolean;
  subscribeToNewsletter?: boolean;
}

export interface OnboardingData {
  purposeOfVisit: 'tourism' | 'business' | 'study' | 'work' | 'family' | 'other';
  primaryDestination: string;
  arrivalDate: string;
  lengthOfStay: number;
  otherCities: string[];
  interests: string[];
  communicationPreferences: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  notificationTypes: {
    visaReminders: boolean;
    tourRecommendations: boolean;
    promotions: boolean;
    safetyAlerts: boolean;
  };
  privacySettings: {
    profileVisibility: 'private' | 'operators' | 'public';
  };
}

// ============================================================================
// DIGITAL IDENTITY & eKYC TYPES
// ============================================================================

export interface DigitalIdentity {
  digitalId: string;
  status: 'pending' | 'verified' | 'rejected';
  issuedDate?: string;
  verificationScore?: number;
  qrCode?: string;
  userId: string;
}

export interface PassportInfo {
  passportNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  issueDate: string;
  expiryDate: string;
  placeOfIssue: string;
  gender: string;
  passportImageUrl?: string;
  ocrConfidence?: number;
}

export interface EkycVerification {
  id: string;
  userId: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  passportInfo?: PassportInfo;
  selfieImageUrl?: string;
  faceMatchScore?: number;
  livenessCheckPassed?: boolean;
  verifiedBy?: string;
  verifiedAt?: string;
  submittedAt: string;
  digitalIdentity?: DigitalIdentity;
}

// ============================================================================
// ENTRY/EXIT DECLARATION TYPES
// ============================================================================

export interface EntryDeclaration {
  id: string;
  referenceNumber: string;
  userId: string;
  digitalId?: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';

  // Flight Information
  arrivalDate: string;
  arrivalPort: string;
  flightNumber: string;
  seatNumber?: string;
  departureCountry: string;

  // Purpose of Visit
  purposeOfVisit: string;
  intendedStayDuration: number;
  additionalDetails?: string;

  // Accommodation
  accommodationName: string;
  accommodationAddress: string;
  accommodationPhone: string;

  // Health Declaration
  healthSymptoms: string[];
  healthDetails?: string;

  // Customs Declaration
  cashAmount?: number;
  hasGoodsTodeclare: boolean;
  goodsDetails?: string;

  // System
  qrCode?: string;
  submittedAt: string;
  approvedAt?: string;
  approvedBy?: string;
}

export interface ExitDeclaration {
  id: string;
  referenceNumber: string;
  userId: string;
  digitalId: string;
  flightNumber: string;
  departureDate: string;
  departurePort: string;
  destinationCountry: string;
  stayDuration: number;
  vatRefundsProcessed: number;
  totalVatRefundAmount: number;
  status: 'pending' | 'cleared';
  clearedAt?: string;
  submittedAt: string;
}

// ============================================================================
// TOURISM & TOURS TYPES
// ============================================================================

export interface Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  destination: string;
  category: string[];
  images: string[];
  duration: string;
  durationInDays: number;

  // Pricing
  priceAdult: number;
  priceChild: number;
  priceInfant: number;
  currency: 'VND';

  // Ratings
  rating: number;
  reviewCount: number;
  bookingCount: number;

  // Inclusions
  included: string[];
  notIncluded: string[];

  // Itinerary
  itinerary: TourItineraryDay[];

  // Logistics
  pickupLocation: string;
  pickupTime: string;
  maxGroupSize: number;
  languages: string[];
  accessibility: string;

  // Operator
  operatorId: string;
  operatorName: string;
  operatorRating: number;
  operatorPhone: string;
  operatorEmail: string;

  // Policies
  cancellationPolicy: string;
  importantInfo: string[];
  whatToBring: string[];

  // Availability
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  activities: TourActivity[];
}

export interface TourActivity {
  time: string;
  description: string;
}

export interface TourBooking {
  id: string;
  confirmationNumber: string;
  userId: string;
  tourId: string;
  tour: Tour;

  // Booking Details
  tourDate: string;
  numAdults: number;
  numChildren: number;
  numInfants: number;

  // Contact
  leadTravelerName: string;
  leadTravelerEmail: string;
  leadTravelerPhone: string;
  pickupLocation: string;
  specialRequests?: string;

  // Pricing
  subtotal: number;
  discount: number;
  serviceFee: number;
  total: number;

  // Payment
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;

  // Status
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  qrCode?: string;
  eTicketUrl?: string;

  // Timestamps
  bookedAt: string;
  cancelledAt?: string;
  completedAt?: string;
}

export interface TourReview {
  id: string;
  tourId: string;
  bookingId: string;
  userId: string;
  userName: string;
  userNationality?: string;

  // Ratings
  overallRating: number;
  valueForMoney: number;
  tourGuide: number;
  foodQuality: number;
  accommodation: number;
  overallExperience: number;

  // Review Content
  title: string;
  content: string;
  photos: string[];

  // Recommendations
  wouldRecommend: boolean;
  wouldBookAgain: boolean;

  // Metadata
  displayName: string;
  displayNationality: boolean;
  helpfulCount: number;

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

// ============================================================================
// VAT REFUND TYPES
// ============================================================================

export interface VatRefundRequest {
  id: string;
  referenceNumber: string;
  userId: string;
  digitalId: string;

  // Invoice Details
  invoiceNumber: string;
  invoiceDate: string;
  invoiceImageUrl: string;

  // Merchant Details
  merchantName: string;
  merchantTaxCode: string;
  merchantAddress: string;

  // Purchase Items
  items: VatRefundItem[];

  // Amounts
  subtotal: number;
  vatAmount: number;
  totalAmount: number;
  refundAmount: number;
  serviceFee: number;

  // Refund Method
  refundMethod: 'bank_transfer' | 'cash_airport' | 'credit_card';
  bankDetails?: BankDetails;

  // Status & Timeline
  status: 'pending' | 'documents_verified' | 'customs_review' | 'customs_approved' | 'processing_payment' | 'completed' | 'rejected';
  timeline: VatRefundTimeline[];

  // Timestamps
  submittedAt: string;
  approvedAt?: string;
  completedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;
}

export interface VatRefundItem {
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  accountName: string;
  swiftCode?: string;
  accountCurrency: string;
}

export interface VatRefundTimeline {
  status: string;
  timestamp: string;
  description: string;
  completed: boolean;
}

export interface DutyFreeStore {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  categories: string[];
  distance?: number;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface VatClaimLocation {
  id: string;
  airport: string;
  airportCode: string;
  city: string;
  terminal: string;
  location: string;
  floor: string;
  area: string;
  hours: string;
  description: string;
  procedures: string[];
  requiredDocuments: string[];
  processingTime: string;
  contactPhone: string;
  tips: string[];
  mapUrl?: string;
}

// ============================================================================
// ACCOMMODATION & VISA TYPES
// ============================================================================

export interface ResidenceRegistration {
  id: string;
  registrationNumber: string;
  userId: string;
  digitalId: string;

  // Accommodation Details
  accommodationType: 'hotel' | 'apartment' | 'homestay' | 'friend_family';
  accommodationName: string;
  roomNumber?: string;
  fullAddress: string;
  ward: string;
  district: string;
  city: string;

  // Contact
  phone: string;

  // Stay Period
  checkInDate: string;
  checkOutDate?: string;

  // Police Station
  policeStation: string;
  policeOfficer?: string;

  // Status
  status: 'pending' | 'confirmed' | 'expired';
  qrCode?: string;

  // Timestamps
  submittedAt: string;
  confirmedAt?: string;
  confirmedBy?: string;
}

export interface VisaExtension {
  id: string;
  referenceNumber: string;
  userId: string;
  digitalId: string;

  // Current Visa
  currentVisaType: string;
  currentExpiryDate: string;

  // Extension Request
  extensionDuration: number; // days
  extensionReason: 'tourism' | 'business' | 'family' | 'medical' | 'other';
  additionalDetails?: string;

  // Accommodation
  currentAccommodation: string;
  currentAccommodationAddress: string;

  // Documents
  documents: string[];

  // Fee
  extensionFee: number;
  serviceFee: number;
  totalFee: number;

  // Payment
  paymentStatus: 'pending' | 'completed' | 'failed';
  transactionId?: string;

  // New Visa Details
  newExpiryDate?: string;
  approvalLetter?: string;

  // Status & Timeline
  status: 'pending' | 'under_review' | 'documents_verified' | 'approved' | 'rejected';
  timeline: VisaExtensionTimeline[];

  // Officer
  reviewedBy?: string;
  approvedBy?: string;

  // Timestamps
  submittedAt: string;
  approvedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;
}

export interface VisaExtensionTimeline {
  status: string;
  timestamp: string;
  description: string;
  completed: boolean;
}

// ============================================================================
// EMERGENCY & SUPPORT TYPES
// ============================================================================

export interface EmergencyContact {
  id: string;
  name: string;
  type: 'police' | 'ambulance' | 'fire' | 'embassy' | 'hospital';
  phone: string;
  address?: string;
  hours?: string;
  emergencyHours?: string;
  distance?: number;
  available24x7: boolean;
}

export interface IncidentReport {
  id: string;
  referenceNumber: string;
  userId: string;
  digitalId: string;

  // Incident Details
  incidentType: 'theft' | 'accident' | 'fraud' | 'assault' | 'property_damage' | 'other';
  incidentDate: string;
  incidentTime: string;
  location: string;
  description: string;

  // Lost/Stolen Items
  items: IncidentItem[];
  totalLoss: number;

  // Evidence
  photos: string[];

  // Witness
  witnessName?: string;
  witnessContact?: string;

  // User Contact
  userPhone: string;
  userEmail: string;
  currentLocation: string;

  // Assistance Needed
  needPolice: boolean;
  needEmbassy: boolean;
  needMedical: boolean;

  // Status
  status: 'submitted' | 'under_review' | 'police_contacted' | 'resolved' | 'closed';
  assignedOfficer?: string;

  // Timestamps
  submittedAt: string;
  resolvedAt?: string;
}

export interface IncidentItem {
  description: string;
  estimatedValue: number;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  userId: string;
  subject: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'waiting_user' | 'resolved' | 'closed';
  messages: TicketMessage[];
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface TicketMessage {
  id: string;
  from: 'user' | 'support';
  content: string;
  attachments?: string[];
  timestamp: string;
}

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

export interface Notification {
  id: string;
  userId: string;
  type: 'visa_expiry' | 'tour_reminder' | 'payment' | 'vat_refund' | 'emergency' | 'system';
  title: string;
  message: string;
  actionUrl?: string;
  actionLabel?: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  readAt?: string;
}

export interface NotificationSettings {
  channels: {
    push: boolean;
    email: boolean;
    sms: boolean;
  };
  types: {
    visaReminders: boolean;
    tourReminders: boolean;
    paymentConfirmations: boolean;
    vatRefundUpdates: boolean;
    emergencyAlerts: boolean;
    loyaltyRewards: boolean;
    marketing: boolean;
    platformUpdates: boolean;
  };
  quietHours: {
    enabled: boolean;
    startTime: string;
    endTime: string;
  };
}

// ============================================================================
// LOYALTY & REWARDS TYPES
// ============================================================================

export interface LoyaltyProgram {
  userId: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  totalPoints: number;
  pointsToNextTier: number;
  benefits: string[];
  memberSince: string;
}

// ============================================================================
// PAYMENT TYPES
// ============================================================================

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'bank_account';
  isDefault: boolean;

  // Card Details (masked)
  cardLast4?: string;
  cardBrand?: string;
  cardExpiry?: string;
  cardholderName?: string;

  // Bank Details (masked)
  bankName?: string;
  accountLast4?: string;
  swiftCode?: string;

  addedAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'tour_booking' | 'visa_extension' | 'service_fee';
  amount: number;
  currency: 'VND';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  description: string;
  createdAt: string;
}

// ============================================================================
// ADMIN TYPES
// ============================================================================

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin' | 'operator' | 'support';
  department: string;
  permissions: string[];
  isActive: boolean;
  createdAt: string;
}

export interface AdminDashboardStats {
  totalUsers: number;
  newUsersToday: number;
  totalArrivals: number;
  arrivalsToday: number;
  totalResidenceRegistrations: number;
  residenceToday: number;
  totalDigitalIds: number;
  digitalIdsToday: number;
  totalVatRefunds: number;
  vatRefundsToday: number;
  emergencyAlertsToday: number;
  pendingActions: number;
}

export interface AdminAnalytics {
  userGrowth: DataPoint[];
  topNationalities: CountryData[];
  popularDestinations: DestinationData[];
  revenue: RevenueData;
}

export interface DataPoint {
  date: string;
  value: number;
}

export interface CountryData {
  country: string;
  countryCode: string;
  count: number;
  percentage: number;
}

export interface DestinationData {
  destination: string;
  visitors: number;
}

export interface RevenueData {
  tourBookings: number;
  visaExtensions: number;
  serviceFees: number;
  total: number;
  growth: number;
}

// ============================================================================
// UI & FORM TYPES
// ============================================================================

export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}

export interface FilterState {
  [key: string]: any;
}

export interface PaginationState {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface SortState {
  field: string;
  order: 'asc' | 'desc';
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationState;
}

export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  mimeType: string;
}
