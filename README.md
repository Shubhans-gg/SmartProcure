<div align="center">

# 🌾 SmartProcure

### Digital Procurement Queue & Status Platform

**Smart India Hackathon 2026 · Problem Statement 26032 · Team Yuva Codes**

[![Live Demo](https://img.shields.io/badge/Live_Demo-smartprocure--beryl.vercel.app-black?logo=vercel)](https://smartprocure-beryl.vercel.app)
![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.1-000000?logo=flask)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase&logoColor=white)

</div>

---

## 📌 The Problem

At government MSP procurement centres (mandis), farmers often queue for hours, with no visibility into when their turn will come, what their crop will be paid, or when the money will reach their account. Centre staff, in turn, have no clean way to manage crowding, record weighment and quality, or issue payment documents.

## 💡 The Solution

**SmartProcure** lets farmers book a procurement slot in advance, get a digital token, track their live position in the queue, and follow their crop from weighment to payment. Centre operators get a counter-wise dashboard to call tokens, record weight and moisture, and generate a J-Form receipt with the MSP-based payable amount.

**🔗 Live demo:** https://smartprocure-beryl.vercel.app

---

## ✨ Features

### 👨‍🌾 For farmers
- **OTP login** with mobile number (via Fast2SMS) and a quick registration flow (name, village, district, bank/UPI details, Aadhaar)
- **Nearest-centre finder** using GPS coordinates (Haversine distance), with congestion level, estimated wait and a Google Maps directions link
- **Slot booking** fixed daily time windows with per-slot capacity checks
- **Unique digital token** (format `DOCA-26-P001`) issued per booking
- **Check-in and live queue position** with estimated waiting time
- **Booking and payment tracker** by phone number or token
- **Bilingual SMS notifications** (English + Hindi templates) at every stage
- **Printable J-Form receipt** at `/receipt/<receipt_no>`

### 🧑‍💼 For centre operators and DoCA admins
- **Password-based admin login**, with a super-admin (HQ) and per-centre operator roles
- **Call-next-token** to a specific counter desk (auto-picks the next checked-in farmer)
- **Procurement recording:** gross/tare weight → net weight (quintals), moisture %, quality grade
- **Automatic payable calculation:** MSP + Grade A bonus − moisture penalty
- **DBT / PFMS payout dispatch** (simulated), generating a UTR and notifying the farmer
- **Analytics summary** endpoint for a DoCA-level dashboard

### 📺 Public display
- `/display` — a mandi-side screen showing the live queue and called tokens

---

## 🔄 How It Works

```
Farmer                                   Centre / Operator
──────                                   ─────────────────
Login via OTP / Register
        │
Find nearest centre → pick crop & slot
        │
Book slot ──► Token generated + SMS
        │
Arrive at mandi → Check-in ──► Queue position + SMS
        │                              │
        │                        Call next token to a desk ──► SMS "proceed to Counter N"
        │                              │
        │                        Weighment + moisture + grade
        │                              │
        │                        J-Form receipt generated ──► SMS with payable amount
        │                              │
        └──────────────────────  DBT/PFMS payout ──► SMS with UTR
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, Flask, Flask-CORS |
| Database & Auth | Supabase (PostgreSQL, Supabase Auth) |
| SMS | Fast2SMS (falls back to console logging when no API key is set) |
| Frontend | Jinja2 templates + static assets |
| Hosting | Vercel |

---

## 📁 Project Structure

```
Yuva_Codes-SIH26/
├── api/                 # Vercel serverless entry point (api/index.py)
├── static/              # CSS, JS, images
├── templates/           # landing, farmer_login, farmer_signup, farmer_dashboard,
│                        # admin_login, admin_dashboard, display, receipt
├── app.py               # Flask app: page routes + REST API
├── config.py            # Environment-driven configuration
├── database.py          # Supabase data layer + seed data (centres, crops, desks, demo users)
├── sms.py               # SMS templates (EN/HI) and Fast2SMS integration
├── requirements.txt
├── Procfile             # Gunicorn start command
└── vercel.json          # Vercel build & routing config
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- A [Supabase](https://supabase.com) project
- *(Optional)* A [Fast2SMS](https://www.fast2sms.com) API key for real SMS

### 1. Clone and install

```bash
git clone https://github.com/Shubhans-gg/Yuva_Codes-SIH26.git
cd Yuva_Codes-SIH26

python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
# Required
SUPABASE_URL=https://<your-project>.supabase.co
SUPABASE_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>

# Recommended
SECRET_KEY=<a-long-random-string>
FLASK_DEBUG=False

# Optional
FAST2SMS_API_KEY=<your-fast2sms-key>   # without this, SMS is logged to the console
OTP_EXPIRY_MINUTES=10
PORT=5000
HOST=0.0.0.0
```

### 3. Set up Supabase tables

The app expects these tables in your Supabase project:

`farmers` · `admins` · `procurement_centres` · `crops_msp` · `otp_sessions` · `slot_bookings` · `counter_desks` · `procurement_records` · `payment_transactions` · `sms_audit_logs`

On first start, the app seeds demo farmers, admins, the 15 centres and the 20 crops automatically.

<!-- TODO: add schema.sql (or a supabase/migrations folder) and link it here -->

### 4. Run

```bash
python app.py
```

Open http://localhost:5000.

For production-style serving: `gunicorn app:app`

---

## 🧪 Demo Access

| Role | Login |
|---|---|
| Farmer (Karnal, Haryana) | `9876543210` — OTP `1234` |
| Farmer (Ludhiana, Punjab) | `9812345678` — OTP `1234` |
| Farmer | `9425123456` — OTP `1234` |
| Super Admin (DoCA HQ) | username `admin` |
| Karnal operator | username `karnal_op` |
| Ludhiana operator | username `ludhiana_op` |

<!-- Add the admin demo password(s) here if you want judges to log in, or share them privately. -->

---

## 🔌 API Reference

<details>
<summary><b>Click to expand all endpoints</b></summary>

### Pages
| Route | Description |
|---|---|
| `/` | Landing page |
| `/farmer/login` · `/farmer/signup` · `/farmer/dashboard` | Farmer portal |
| `/admin/login` · `/admin/dashboard` | Admin portal |
| `/display` | Public mandi queue display |
| `/receipt/<receipt_no>` | Printable J-Form receipt |

### Authentication
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/send-otp` | Send OTP to a farmer's mobile |
| POST | `/api/auth/verify-otp` | Verify OTP; returns the farmer or flags a new user |
| POST | `/api/auth/farmer/login` | Login by phone / email / Supabase access token |
| POST | `/api/auth/register-farmer` | Register or update a farmer profile |
| POST | `/api/auth/admin-login` | Admin username + password login |

### Catalog & slots
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/centres` | All active procurement centres |
| GET | `/api/centres/nearest?lat=&lng=&crop_id=` | Centres sorted by distance with congestion info |
| GET | `/api/crops` | MSP crop catalog |
| GET | `/api/slots?centre_id=&date=` | Slot availability for a centre and date |

### Bookings & queue
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/bookings` | Book a slot and generate a token |
| POST | `/api/bookings/<id>/check-in` | Check in on arrival at the centre |
| POST/DELETE | `/api/bookings/<id>/cancel` | Cancel a booking (before check-in only) |
| GET | `/api/queue/live?centre_id=` | Live queue and desk status for a centre |
| GET | `/api/queue/stream` | Server-Sent Events stream (keep-alive pings) |
| GET | `/api/farmer/track?phone=` or `?token=` | Booking and payment tracker |

### Operator actions
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/admin/call-next` | Call a token to a counter desk |
| POST | `/api/procurement/record` | Record weighment and quality; generate J-Form |
| POST | `/api/procurement/payout` | Dispatch the DBT payout (simulated) |

### Reports & logs
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/analytics/summary` | Aggregate metrics for the DoCA dashboard |
| GET | `/api/sms/logs?phone=` | SMS history for a number |

</details>

---

## 📲 SMS Notifications

Six message types, each with English and Hindi templates: booking confirmation, slot reminder, queue check-in, token called, weighment done, and DBT credited. Every message is written to the `sms_audit_logs` table.

---

## 👥 Team Yuva Codes


| Name | GitHub |
|---|---|
| Shubhans | [@Shubhans-gg](https://github.com/Shubhans-gg) |
| Krishna Dhakad | [@noir-in404](https://github.com/noir-in404) |
| Arpit Mani Tripathi | [@Arpitmanitripathi008](https://github.com/Arpitmanitripathi008) |
| Piyush Tiwari | [@30Piyush2025](https://github.com/30Piyush2025) |


---

