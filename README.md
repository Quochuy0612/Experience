# Experience Vietnam - Web App Demo

Digital companion platform for foreigners visiting and living in Vietnam.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📱 Demo Routes

### Tourist Flow
- `/` - Landing page
- `/register` - User registration
- `/ekyc-passport` - Passport verification
- `/ekyc-face` - Face verification
- `/dashboard` - Tourist dashboard
- `/visa-apply` - e-Visa application
- `/vat-refund` - VAT refund management

### Admin Portal
- `/admin` - Admin dashboard
- `/admin/database` - Foreigners database
- `/admin/reports` - Reports & analytics

## 🎨 Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **State:** React Hooks + LocalStorage

## 🎯 Features Implemented

### Tourist Features
✅ User registration with eKYC
✅ Passport OCR simulation
✅ Face verification
✅ Digital ID generation
✅ e-Visa application
✅ VAT refund tracking
✅ Service booking dashboard

### Admin Features
✅ Dashboard with statistics
✅ Foreigners database with search
✅ User detail view
✅ Activity tracking
✅ Alert system

## 🎨 Design System

### Colors
- Primary: `#0066CC` (Blue)
- Accent: `#FFD700` (Gold)
- Success: `#28A745`
- Warning: `#FFC107`
- Danger: `#DC3545`

### Components
- Reusable button styles (`.btn-primary`, `.btn-secondary`)
- Form inputs (`.input-field`)
- Card containers (`.card`)

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── AdminSidebar.jsx
│   ├── tourist/
│   └── admin/
├── pages/
│   ├── tourist/
│   │   ├── Landing.jsx
│   │   ├── Register.jsx
│   │   ├── EKYCPassport.jsx
│   │   ├── EKYCFace.jsx
│   │   ├── Dashboard.jsx
│   │   ├── VisaApply.jsx
│   │   └── VATRefund.jsx
│   └── admin/
│       ├── AdminDashboard.jsx
│       └── Database.jsx
├── App.jsx
└── main.jsx
```

## 🔐 Demo Credentials

### Tourist Flow
- Email: `john@example.com`
- Password: `password123`
- Digital ID will be auto-generated: `#12345`

### Admin Access
- Navigate to `/admin`
- View dashboard and database

## 📸 Screenshots

### Tourist Flow
1. **Landing Page** - Welcome screen with language selection
2. **Registration** - User signup with social login options
3. **eKYC Passport** - Passport scanning with OCR
4. **eKYC Face** - Face verification
5. **Dashboard** - Main user dashboard
6. **Visa Apply** - e-Visa application form
7. **VAT Refund** - Invoice management

### Admin Portal
1. **Admin Dashboard** - Statistics and overview
2. **Database** - Search and manage foreigners
3. **Detail View** - User profile and activities

## 🌐 Internationalization

Currently supports:
- English (EN)
- Vietnamese (VI)
- Chinese (中文)
- Japanese (日本語)
- Korean (한국어)

## 📝 Notes

- This is a **UI demo only** - no backend integration
- Data is stored in **localStorage** for demo purposes
- OCR and face verification are **simulated**
- All images are placeholders from Unsplash

## 🔄 Next Steps

To make this production-ready:

1. ✅ Connect to real backend APIs
2. ✅ Implement real eKYC with government systems
3. ✅ Add payment gateway integration
4. ✅ Implement real-time notifications
5. ✅ Add multilingual support (i18n)
6. ✅ Mobile responsive optimization
7. ✅ Security enhancements (JWT, OAuth)
8. ✅ Performance optimization
9. ✅ Accessibility improvements
10. ✅ Unit & E2E testing

## 📄 License

Copyright © 2025 Experience Vietnam Platform
