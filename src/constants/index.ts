// ============================================================================
// EXPERIENCE VIETNAM - CONSTANTS
// ============================================================================

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_REFRESH: '/auth/refresh',
  AUTH_VERIFY_EMAIL: '/auth/verify-email',
  AUTH_FORGOT_PASSWORD: '/auth/forgot-password',
  AUTH_RESET_PASSWORD: '/auth/reset-password',

  // User
  USER_PROFILE: '/user/profile',
  USER_UPDATE: '/user/update',
  USER_UPLOAD_PHOTO: '/user/upload-photo',

  // eKYC & Digital Identity
  EKYC_UPLOAD_PASSPORT: '/ekyc/upload-passport',
  EKYC_UPLOAD_SELFIE: '/ekyc/upload-selfie',
  EKYC_SUBMIT: '/ekyc/submit',
  EKYC_STATUS: '/ekyc/status',
  DIGITAL_ID: '/digital-id',

  // Declaration
  DECLARATION_ENTRY: '/declaration/entry',
  DECLARATION_EXIT: '/declaration/exit',
  DECLARATION_HISTORY: '/declaration/history',
  DECLARATION_DETAIL: '/declaration/:id',

  // Tours
  TOURS_SEARCH: '/tours/search',
  TOURS_DETAIL: '/tours/:id',
  TOURS_BOOK: '/tours/book',
  TOURS_MY_BOOKINGS: '/tours/my-bookings',
  TOURS_REVIEWS: '/tours/:id/reviews',
  TOURS_SUBMIT_REVIEW: '/tours/:id/review',

  // VAT Refund
  VAT_SCAN_INVOICE: '/vat/scan-invoice',
  VAT_SUBMIT: '/vat/submit',
  VAT_REQUESTS: '/vat/requests',
  VAT_DETAIL: '/vat/:id',

  // Accommodation & Visa
  RESIDENCE_REGISTER: '/residence/register',
  RESIDENCE_HISTORY: '/residence/history',
  VISA_EXTEND: '/visa/extend',
  VISA_STATUS: '/visa/status',

  // Emergency & Support
  EMERGENCY_CONTACTS: '/emergency/contacts',
  INCIDENT_REPORT: '/incident/report',
  SUPPORT_TICKETS: '/support/tickets',
  SUPPORT_CREATE: '/support/create',

  // Notifications
  NOTIFICATIONS: '/notifications',
  NOTIFICATIONS_READ: '/notifications/:id/read',
  NOTIFICATIONS_SETTINGS: '/notifications/settings',

  // Payment
  PAYMENT_METHODS: '/payment/methods',
  PAYMENT_ADD: '/payment/add',
  PAYMENT_REMOVE: '/payment/:id/remove',
  TRANSACTIONS: '/transactions',

  // Admin
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_USER_DETAIL: '/admin/users/:id',
  ADMIN_DECLARATIONS: '/admin/declarations',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_REPORTS: '/admin/reports',
} as const;

// ============================================================================
// ROUTES
// ============================================================================

export const ROUTES = {
  // Public
  HOME: '/',
  LANDING: '/landing',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Auth
  EMAIL_VERIFICATION: '/verify-email',
  ONBOARDING: '/onboarding',

  // User Dashboard
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  SETTINGS: '/settings',
  ACTIVITY_LOG: '/activity-log',
  PAYMENT_METHODS: '/payment-methods',

  // eKYC & Digital Identity
  EKYC_INTRO: '/ekyc/intro',
  EKYC_PASSPORT: '/ekyc/passport',
  EKYC_SELFIE: '/ekyc/selfie',
  EKYC_REVIEW: '/ekyc/review',
  DIGITAL_ID: '/digital-id',

  // Entry/Exit Declaration
  ENTRY_DECLARATION: '/declaration/entry',
  EXIT_DECLARATION: '/declaration/exit',
  DECLARATION_CONFIRMATION: '/declaration/confirmation/:id',
  DECLARATION_HISTORY: '/declaration/history',

  // Tourism
  TOURS: '/tours',
  TOUR_DETAIL: '/tours/:id',
  TOUR_BOOKING: '/tours/:id/book',
  BOOKING_CONFIRMATION: '/bookings/confirmation/:id',
  MY_BOOKINGS: '/bookings',
  TOUR_REVIEW: '/tours/:id/review',

  // VAT Refund
  VAT_REFUND: '/vat-refund',
  VAT_SCAN: '/vat-refund/scan',
  VAT_REVIEW: '/vat-refund/review',
  VAT_PAYMENT: '/vat-refund/payment',
  VAT_TRACKING: '/vat-refund/tracking',

  // Accommodation & Visa
  RESIDENCE_REGISTRATION: '/residence/register',
  RESIDENCE_CONFIRMATION: '/residence/confirmation/:id',
  VISA_EXTENSION: '/visa/extension',
  VISA_STATUS: '/visa/status',

  // Emergency & Support
  EMERGENCY: '/emergency',
  REPORT_INCIDENT: '/incident/report',
  HELP_SUPPORT: '/help',

  // Admin
  ADMIN_DASHBOARD: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_USER_DETAIL: '/admin/users/:id',
  ADMIN_DECLARATIONS: '/admin/declarations',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_REPORTS: '/admin/reports',
} as const;

// ============================================================================
// NATIONALITIES
// ============================================================================

export const NATIONALITIES = [
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
] as const;

// ============================================================================
// LANGUAGES
// ============================================================================

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
] as const;

// ============================================================================
// VIETNAM CITIES & PORTS
// ============================================================================

export const VIETNAM_CITIES = [
  { code: 'HAN', name: 'Hanoi', type: 'city' },
  { code: 'SGN', name: 'Ho Chi Minh City', type: 'city' },
  { code: 'DAD', name: 'Da Nang', type: 'city' },
  { code: 'HPH', name: 'Hai Phong', type: 'city' },
  { code: 'CXR', name: 'Nha Trang', type: 'city' },
  { code: 'PQC', name: 'Phu Quoc', type: 'island' },
  { code: 'HLB', name: 'Halong Bay', type: 'tourist' },
  { code: 'HOI', name: 'Hoi An', type: 'tourist' },
  { code: 'HUE', name: 'Hue', type: 'tourist' },
  { code: 'SAP', name: 'Sapa', type: 'tourist' },
] as const;

export const ENTRY_PORTS = [
  { code: 'HAN', name: 'Noi Bai International Airport', city: 'Hanoi', type: 'airport' },
  { code: 'SGN', name: 'Tan Son Nhat International Airport', city: 'Ho Chi Minh', type: 'airport' },
  { code: 'DAD', name: 'Da Nang International Airport', city: 'Da Nang', type: 'airport' },
  { code: 'CXR', name: 'Cam Ranh International Airport', city: 'Nha Trang', type: 'airport' },
  { code: 'PQC', name: 'Phu Quoc International Airport', city: 'Phu Quoc', type: 'airport' },
] as const;

// ============================================================================
// PURPOSE OF VISIT
// ============================================================================

export const VISIT_PURPOSES = [
  { value: 'tourism', label: 'Tourism', icon: '✈️', description: 'Explore & enjoy Vietnam' },
  { value: 'business', label: 'Business', icon: '💼', description: 'Work & meetings' },
  { value: 'study', label: 'Study', icon: '🎓', description: 'Education & training' },
  { value: 'work', label: 'Work', icon: '💼', description: 'Employment' },
  { value: 'family', label: 'Family Visit', icon: '👨‍👩‍👧', description: 'Visiting relatives' },
  { value: 'other', label: 'Other', icon: '📋', description: 'Other purposes' },
] as const;

// ============================================================================
// TOUR CATEGORIES
// ============================================================================

export const TOUR_CATEGORIES = [
  { value: 'cultural', label: 'Cultural heritage', icon: '🏛️' },
  { value: 'adventure', label: 'Adventure sports', icon: '⛰️' },
  { value: 'food', label: 'Food & cuisine', icon: '🍜' },
  { value: 'nature', label: 'Nature & beaches', icon: '🏖️' },
  { value: 'shopping', label: 'Shopping', icon: '🛍️' },
  { value: 'nightlife', label: 'Nightlife', icon: '🌃' },
  { value: 'photography', label: 'Photography', icon: '📸' },
  { value: 'wellness', label: 'Wellness & spa', icon: '💆' },
  { value: 'historical', label: 'Historical', icon: '🏰' },
  { value: 'cruise', label: 'Cruise & boat', icon: '🚢' },
] as const;

// ============================================================================
// PAYMENT METHODS
// ============================================================================

export const PAYMENT_METHODS = [
  { value: 'vnpay', label: 'VNPay', description: 'Visa/Mastercard/JCB', icon: '💳' },
  { value: 'bank_transfer', label: 'Bank Transfer', description: 'Direct bank transfer', icon: '🏦' },
  { value: 'paypal', label: 'PayPal', description: 'International payments', icon: '💰' },
] as const;

// ============================================================================
// EMERGENCY CONTACTS
// ============================================================================

export const EMERGENCY_NUMBERS = [
  { type: 'police', number: '113', name: 'Police', icon: '🚓' },
  { type: 'ambulance', number: '115', name: 'Ambulance', icon: '🚑' },
  { type: 'fire', number: '114', name: 'Fire Department', icon: '🚒' },
] as const;

// ============================================================================
// STATUS COLORS
// ============================================================================

export const STATUS_COLORS = {
  // General
  pending: 'yellow',
  approved: 'green',
  rejected: 'red',
  completed: 'blue',
  active: 'green',
  inactive: 'gray',

  // eKYC
  verified: 'green',
  in_progress: 'yellow',
  failed: 'red',

  // Booking
  confirmed: 'green',
  cancelled: 'red',

  // Payment
  paid: 'green',
  unpaid: 'red',
  refunded: 'orange',
} as const;

// ============================================================================
// FILE UPLOAD
// ============================================================================

export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ACCEPTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/jpg'],
  ACCEPTED_DOCUMENT_TYPES: ['application/pdf', 'image/jpeg', 'image/png'],
} as const;

// ============================================================================
// REGEX PATTERNS
// ============================================================================

export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
  PASSPORT: /^[A-Z0-9]{6,9}$/,
  POSTAL_CODE: /^\d{5,6}$/,
} as const;

// ============================================================================
// VALIDATION MESSAGES
// ============================================================================

export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_PASSPORT: 'Please enter a valid passport number',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_MUST_MATCH: 'Passwords must match',
  TERMS_REQUIRED: 'You must agree to the terms and conditions',
} as const;

// ============================================================================
// DATE FORMATS
// ============================================================================

export const DATE_FORMATS = {
  DISPLAY: 'DD MMM YYYY',
  DISPLAY_LONG: 'DD MMMM YYYY',
  DISPLAY_WITH_TIME: 'DD MMM YYYY, HH:mm',
  API: 'YYYY-MM-DD',
  API_WITH_TIME: 'YYYY-MM-DDTHH:mm:ss',
} as const;

// ============================================================================
// PAGINATION
// ============================================================================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  LIMIT_OPTIONS: [10, 25, 50, 100],
} as const;

// ============================================================================
// LOCAL STORAGE KEYS
// ============================================================================

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'evn_auth_token',
  REFRESH_TOKEN: 'evn_refresh_token',
  USER: 'evn_user',
  LANGUAGE: 'evn_language',
  THEME: 'evn_theme',
} as const;

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

// ============================================================================
// LOYALTY TIERS
// ============================================================================

export const LOYALTY_TIERS = [
  { tier: 'bronze', name: 'Bronze', minPoints: 0, color: '#CD7F32' },
  { tier: 'silver', name: 'Silver', minPoints: 500, color: '#C0C0C0' },
  { tier: 'gold', name: 'Gold', minPoints: 1000, color: '#FFD700' },
  { tier: 'platinum', name: 'Platinum', minPoints: 5000, color: '#E5E4E2' },
] as const;

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  ROUTES,
  NATIONALITIES,
  LANGUAGES,
  VIETNAM_CITIES,
  ENTRY_PORTS,
  VISIT_PURPOSES,
  TOUR_CATEGORIES,
  PAYMENT_METHODS,
  EMERGENCY_NUMBERS,
  STATUS_COLORS,
  FILE_UPLOAD,
  REGEX_PATTERNS,
  VALIDATION_MESSAGES,
  DATE_FORMATS,
  PAGINATION,
  STORAGE_KEYS,
  NOTIFICATION_TYPES,
  LOYALTY_TIERS,
};
