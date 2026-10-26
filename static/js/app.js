/**
 * SMARTPROCURE (SIH 2026 - PS 26032) - SHARED CLIENT CORE
 * Multilingual Engine, Audio Chimes, Real-time SSE Listener, SMS Drawer
 */

const I18N = {
  en: {
    app_title: "SMARTPROCURE",
    app_tagline: "Digital Procurement Queue & Status Platform",
    nav_home: "🏠 Home",
    nav_farmer: "👨‍🌾 Farmer Portal",
    nav_admin: "🏢 Admin Panel",
    nav_dashboard: "👨‍🌾 My Dashboard",
    nav_admin_dashboard: "🏢 Admin Dashboard",
    nav_display: "📺 Live Queue",
    nav_logout: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="logout-icon"><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path><polyline points="7 16 3 12 7 8"></polyline><line x1="3" y1="12" x2="15" y2="12"></line></svg> <span>Logout</span>`,

    lang_btn: "हिंदी",
    mob_nav_home: "Home",
    mob_nav_book: "Book Slot",
    mob_nav_sms: "SMS Alerts",

    // Hero Section
    hero_title: 'Smart <span class="highlight">Procurement</span><br>for Every Farmer',
    hero_subtitle: "Book your Mandi slot, track live queue positions, and receive guaranteed MSP payments directly to your bank — all from your mobile.",
    btn_farmer_login: "👨‍🌾 Farmer Login / Signup",
    btn_admin_login: "🏢 Admin / Operator Login",
    stat_farmers: "Registered Farmers",
    stat_wait_reduction: "Queue Wait Reduction",
    stat_dbt: "DBT Direct to Bank",
    stat_crops: "Crops Supported",

    // MSP Section
    ticker_label: "📊 LIVE MSP 2026-27",
    msp_tag: "📊 Government Approved",
    msp_title: "2026-27 Minimum Support Prices (MSP)",
    msp_desc: "Officially notified MSP rates for Kharif & Rabi crops as per Cabinet Committee on Economic Affairs (CCEA)",
    per_quintal: "per Quintal (100 kg)",
    btn_show_all_crops: "Show All",
    btn_show_less_crops: "Show Less",

    // Mandi Finder Section
    finder_tag: "📍 Find Nearby",
    finder_title: "Locate Nearest Procurement Centre",
    finder_desc: "Search by city or district to find government procurement Mandis near you",
    all_crops: "🌾 All Crops",
    search_placeholder: "Enter city, district or pincode... e.g. Karnal, Ludhiana",
    btn_use_location: "📍 Use My Location",
    btn_search: "🔍 Search",

    // Track Progress Section
    track_tag: "📍 LIVE QUEUE STATUS",
    track_title: "Track Procurement & Queue Progress",
    track_desc: "Enter your Token Number (e.g. DOCA-26-P001) to check real-time status and live wait time without logging in.",
    track_input_label: "Token Number",
    track_input_placeholder: "e.g. DOCA-26-P001",
    track_btn_search: "🔍 Track Progress",
    track_empty_title: "Check Your Mandi Queue Status Live",
    track_empty_desc: "Enter your digital token number above to see real-time progress through all stages.",

    // How It Works Section
    how_tag: "⚡ Simple 6-Step Process",
    how_title: "How SmartProcure Works",
    how_desc: "From registration to payment in 6 easy steps — no paperwork, no queues",

    step1_badge: "STEP 01 • MOBILE REGISTRATION",
    step1_title: "1. Register via Mobile OTP",
    step1_desc: "Verify your mobile number with OTP, then enter your Aadhaar & bank details once.",
    step1_chip: "✨ One-Time Registration",

    step2_badge: "STEP 02 • SLOT BOOKING",
    step2_title: "2. Book a Guaranteed Slot",
    step2_desc: "Select your nearest Mandi, crop type, preferred date & time — get a digital token instantly.",
    step2_chip: "🎟️ Instant Digital Pass",

    step3_badge: "STEP 03 • MANDI ARRIVAL",
    step3_title: "3. Arrive & Quick Check-In",
    step3_desc: "Arrive at your booked time and check-in via phone. Skip the physical line entirely.",
    step3_chip: "🚫 Zero Physical Waiting",

    step4_badge: "STEP 04 • LIVE QUEUE",
    step4_title: "4. Track Live Queue Line",
    step4_desc: "Watch real-time token position and estimated wait time from your phone or tractor.",
    step4_chip: "📱 Live Phone Alerts",

    step5_badge: "STEP 05 • WEIGHMENT & QUALITY",
    step5_title: "5. Digital Weighbridge & Quality Check",
    step5_desc: "Computerized transparent weighment & certified grading receipt created on the spot.",
    step5_chip: "秤 100% Accurate Scale",

    step6_badge: "STEP 06 • DIRECT BANK PAYMENT",
    step6_title: "6. Direct Bank Transfer (DBT)",
    step6_desc: "Full MSP payment credited directly to your bank account via PFMS — zero middlemen or fees.",
    step6_chip: "💰 100% Money to Bank Account",

    // Bottom CTA Banner
    cta_title: "Ready to Sell Your Crop at MSP?",
    cta_desc: "Join thousands of farmers already benefiting from transparent, queue-free digital procurement",
    btn_register_farmer: "✍️ Register as Farmer",
    btn_already_login: "🔐 Already Registered? Login",

    // Auth Pages (Login & Signup)
    farmer_login_header: "Farmer Login",
    farmer_login_sub: "Login with your registered mobile number or Supabase Auth",
    admin_login_header: "Admin / Operator Login",
    admin_login_sub: "Centre Operator & Admin Portal • Restricted Access",
    mobile_label: "Mobile Number",
    phone_placeholder: "9876543210",
    btn_send_otp: "📲 Send OTP / Verify",
    sih_demo_login_title: "⚡ SIH 1-Click Fast Login (Pre-configured)",
    reg_farmer_header: "Register as Farmer",
    personal_details_sec: "👤 Personal Details",
    full_name_label: "Full Name *",
    full_name_ph: "Full Name",
    aadhaar_label: "Aadhaar Number (12 Digits) *",
    aadhaar_ph: "12-digit Aadhaar Number",
    state_label: "State / UT *",
    district_label: "District *",
    district_ph: "District",
    village_label: "Village / Tehsil *",
    village_ph: "Village / Tehsil",
    bank_details_sec: "🏦 Bank & Payment Details (for DBT MSP Payout)",
    bank_name_label: "Bank Name *",
    bank_name_ph: "e.g. State Bank of India",
    account_num_label: "Account Number *",
    account_num_ph: "Bank Account Number",
    ifsc_label: "IFSC Code *",
    ifsc_ph: "e.g. SBIN0001234",
    kisan_id_label: "Kisan ID / PM-KISAN No. (Optional)",
    kisan_id_ph: "Optional PM-Kisan ID",
    btn_submit_reg: "✍️ Complete Registration & Get Kisan ID",

    // Farmer Dashboard Tabs & Content
    tab_book_slot: "🎫 Book a Slot",
    tab_my_bookings: "📋 My Bookings",
    tab_track_progress: "📍 Track Progress",
    tab_payment_status: "💳 Payment Status",
    tab_my_profile: "👤 My Profile",

    sum_total_bookings: "Total Bookings",
    sum_quintals_procured: "Quintals Procured",
    sum_total_received: "Total Received",
    sum_active_token: "Active Token",

    book_slot_heading: "🎫 Book Procurement Slot",
    select_centre_label: "🏢 Select Procurement Centre",
    select_crop_label: "🌾 Crop / Commodity",
    select_date_label: "📅 Booking Date",
    select_slot_label: "⏰ Select Time Slot",
    loading_slots: "⏳ Loading available slots...",
    select_qty_label: "⚖️ Quantity (Quintals)",
    btn_confirm_booking: "🎫 Confirm Slot & Generate Digital Token",

    preview_title: "📋 Booking Preview",
    preview_centre: "Centre",
    preview_crop: "Crop",
    preview_date: "Date",
    preview_time_slot: "Time Slot",
    preview_quantity: "Quantity",
    msp_rate_2026: "2026 MSP RATE",
    estimated_total: "ESTIMATED TOTAL",
    your_token_number: "YOUR TOKEN NUMBER",
    show_mandi_staff: "Show this to Mandi gate staff",

    my_bookings_title: "📋 My Booking History",
    refresh_btn: "🔄 Refresh",
    no_bookings_title: "No Bookings Yet",
    no_bookings_desc: "Your confirmed slot bookings will appear here. Book your first slot to get started.",

    track_token_mobile: "Token Number or Mobile",
    track_input_ph: "e.g. DOCA-26-P001",
    btn_track_status: "🔍 Track Status",
    enter_token_prompt: "Enter Your Token to Track",
    enter_token_desc: "Enter your booking token number above to see real-time progress through all stages",

    payment_dbt_title: "💳 Payment & DBT Status",
    no_payment_title: "No Payment Records Yet",
    no_payment_desc: "Payment details will appear here once your produce is weighed and quality-checked at the Mandi",

    profile_heading: "👤 Farmer Official Profile",
    mobile_field: "📱 Mobile",
    aadhaar_field: "🪪 Aadhaar",
    state_field: "🗺 State",
    district_field: "📍 District / Village",
    bank_acc_field: "🏦 Bank Account",
    ifsc_field: "🔑 IFSC / Bank",
    upi_field: "💸 UPI ID",

    // Admin Dashboard Tabs & Content
    admin_title: "Centre Operator Dashboard",
    active_mandi_label: "Active Mandi:",
    admin_tab_ops: "⚡ Live Operations",
    admin_tab_queue: "👥 Queue Management",
    admin_tab_weigh: "⚖️ Weighbridge",
    admin_tab_status: "📝 Update Status",
    admin_tab_dbt: "💰 DBT Settlements",
    admin_tab_analytics: "📊 Analytics",

    admin_stat_farmers: "Registered Farmers",
    admin_stat_tokens: "Scheduled Tokens",
    admin_stat_procured: "Total Procured (Qtl)",
    admin_stat_payouts: "Payouts Disbursed",

    desks_heading: "Counter Desks & Live Operator Bays",
    desks_sub: "Active Mandi inspection lines and weighbridges",
    btn_call_next_farmer: "📢 Call Next Waiting Farmer",
    live_queue_heading: "Live Waiting Queue",
    auto_syncing: "Auto-Syncing",

    th_token: "Token #",
    th_farmer: "Farmer",
    th_crop: "Crop",
    th_slot: "Slot",
    th_status: "Status",
    th_desk: "Queue / Desk",
    th_actions: "Actions",
    th_qty: "Est. Qty",
    th_checkin: "Check-In",
    th_net_qty: "Net Quantity",
    th_total_amt: "Total Amount",
    th_payment_action: "Payment Status & Action",

    weighbridge_heading: "Digital Weighbridge & Quality Station",
    select_token_prompt: "Select a token from Queue Management tab",
    none_selected: "None Selected",
    scale_net_wt: "DIGITAL WEIGHBRIDGE NET WEIGHT",
    stable_scale: "STABLE SCALE",
    gross_wt_label: "Gross Vehicle Weight (kg)",
    tare_wt_label: "Tare / Empty Weight (kg)",
    moisture_pct_label: "Moisture Content (%)",
    quality_grade_label: "Quality Assessment Grade",
    agronomist_notes_label: "Agronomist / Officer Remarks",
    net_produce_qty: "Net Produce Quantity:",
    base_msp_rate: "Base 2026 MSP Rate:",
    grade_bonus: "Grade Bonus / Moisture Penalty:",
    effective_rate_label: "Effective Rate / Quintal:",
    total_payable_farmer: "Total Payable to Farmer:",
    btn_record_procurement: "⚖️ Record Procurement & Issue Digital J-Form Receipt",
    select_token_weigh: "🔍 Select Token for Weighment",
    btn_load_token_details: "📋 Load Token Details",

    update_status_heading: "📝 Update Farmer Booking Status",
    update_status_sub: "Manually update the status of a booking at any stage of the procurement process",
    token_or_id_label: "Token Number or Booking ID",
    btn_lookup_booking: "🔍 Lookup Booking",
    notes_remarks_label: "Notes / Remarks (Optional)",
    btn_apply_status: "💾 Apply Status Update",

    dbt_settlements_heading: "Today's Completed Procurements & DBT Settlements",
    pfms_sync: "Real-time PFMS Sync",

    analytics_crop_chart: "📊 Procurement by Crop (Today)",
    analytics_payment_chart: "💰 Payment Status Breakdown",
    analytics_kpi_title: "📈 System KPI Metrics",

    // Live Queue TV Display (display.html)
    display_heading: "Public TV Live Queue Display",
    active_counters_heading: "Active Counter Desks • Currently Serving",
    live_broadcast: "LIVE BROADCAST",
    next_in_queue_label: "Next in Queue:",
    no_tokens_waiting: "No tokens waiting in queue",

    // Receipt (receipt.html)
    gov_receipt_hdr: "GOVERNMENT OF INDIA • DEPARTMENT OF CONSUMER AFFAIRS",
    receipt_main_title: "OFFICIAL PROCUREMENT RECEIPT (J-FORM)",
    return_farmer_portal: "← Return to Farmer Portal",
    share_whatsapp: "📲 Share on WhatsApp",
    print_official_jform: "🖨️ Print Official J-Form",

    // Common Status Values
    status_booked: "BOOKED",
    status_checked_in: "CHECKED IN",
    status_called: "CALLED TO COUNTER",
    status_completed: "PROCURED & PAID",
    status_cancelled: "CANCELLED",
    status_transferred: "TRANSFERRED TO BANK",
    status_processing: "PROCESSING",
    status_pending: "PENDING",

    network_offline: "Spotty connection: Working in resilient offline mode.",
    network_online: "Connected: Mandi gateway online & synchronized.",
    step_register: "Register",
    step_register_sub: "Farmer Profile",
    step_select: "Select",
    step_select_sub: "Centre & Slot",
    step_arrive: "Arrive",
    step_arrive_sub: "Check-in",
    step_queue: "Queue",
    step_queue_sub: "Live Position",
    step_procure: "Procure",
    step_procure_sub: "Weight & Quality",
    step_pay: "Pay",
    step_pay_sub: "DBT Status",
    call_next: "Call Next Farmer",
    gross_wt: "Gross Weight (kg)",
    tare_wt: "Tare Weight (kg)",
    net_wt: "Net Weight (Qtl)",
    total_payable: "Total Payable (₹)",
    moisture_test: "Moisture Content (%)",
    quality_grade: "Quality Grade",
    record_procurement: "Record Procurement & Generate J-Form",
    dbt_payout: "Direct Bank Transfer (DBT)",
    live_waiting: "Farmers Waiting in Queue",
    est_wait: "Estimated Waiting Time"
  },
  hi: {
    app_title: "स्मार्टप्रोक्योर",
    app_tagline: "किसानों के लिए डिजिटल शेड्यूलिंग, कतार व खरीद स्थिति पोर्टल",
    nav_home: "🏠 मुख्य पृष्ठ",
    nav_farmer: "👨‍🌾 किसान पोर्टल",
    nav_admin: "🏢 एडमिन पैनल",
    nav_dashboard: "👨‍🌾 मेरा डैशबोर्ड",
    nav_admin_dashboard: "🏢 एडमिन डैशबोर्ड",
    nav_display: "📺 लाइव कतार",
    nav_logout: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" class="logout-icon"><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></path><polyline points="7 16 3 12 7 8"></polyline><line x1="3" y1="12" x2="15" y2="12"></line></svg> <span>लॉगआउट</span>`,

    lang_btn: "English",
    mob_nav_home: "मुख्य",
    mob_nav_book: "स्लॉट बुक",
    mob_nav_sms: "एसएमएस",

    // Hero Section
    hero_title: 'हर किसान के लिए <span class="highlight">डिजिटल एवं सुगम</span><br>मंडी खरीद पोर्टल',
    hero_subtitle: "अपनी मंडी स्लॉट बुक करें, लाइव कतार स्थिति देखें और सीधा बैंक भुगतान (DBT) पाएं — अपने मोबाइल से आसान प्रक्रिया।",
    btn_farmer_login: "👨‍🌾 किसान लॉगिन / नया पंजीकरण",
    btn_admin_login: "🏢 ऑपरेटर / एडमिन लॉगिन",
    stat_farmers: "पंजीकृत किसान",
    stat_wait_reduction: "समय की बचत",
    stat_dbt: "सीधा बैंक भुगतान",
    stat_crops: "फसलें उपलब्ध",

    // MSP Section
    ticker_label: "📊 लाइव न्यूनतम समर्थन मूल्य (MSP)",
    msp_tag: "📊 सरकार द्वारा स्वीकृत",
    msp_title: "2026-27 न्यूनतम समर्थन मूल्य (MSP)",
    msp_desc: "आर्थिक मामलों की कैबिनेट समिति (CCEA) द्वारा अधिसूचित आधिकारिक फसल दरें",
    per_quintal: "प्रति क्विंटल (100 किग्रा)",
    btn_show_all_crops: "सभी दिखाएं",
    btn_show_less_crops: "कम दिखाएं",

    // Mandi Finder Section
    finder_tag: "📍 नजदीकी केंद्र ढूंढें",
    finder_title: "नजदीकी सरकारी खरीद केंद्र (मंडी) खोजें",
    finder_desc: "अपने आसपास की सरकारी मंडियों और लाइव भीड़ की स्थिति देखने के लिए शहर, जिला या पिनकोड खोजें",
    all_crops: "🌾 सभी फसलें",
    search_placeholder: "शहर, जिला या पिनकोड दर्ज करें... जैसे करनाल, लुधियाना",
    btn_use_location: "📍 मेरा स्थान प्रयोग करें",
    btn_search: "🔍 खोजें",

    // Track Progress Section
    track_tag: "📍 लाइव कतार स्थिति",
    track_title: "खरीद और कतार स्थिति ट्रैक करें",
    track_desc: "बिना लॉगिन किए अपनी वास्तविक समय स्थिति और प्रतीक्षा समय जांचने के लिए अपना टोकन नंबर (उदा. DOCA-26-P001) दर्ज करें।",
    track_input_label: "टोकन नंबर दर्ज करें",
    track_input_placeholder: "उदा. DOCA-26-P001",
    track_btn_search: "🔍 स्थिति देखें",
    track_empty_title: "अपनी मंडी कतार स्थिति लाइव जांचें",
    track_empty_desc: "सभी चरणों में वास्तविक समय की प्रगति देखने के लिए ऊपर अपना डिजिटल टोकन नंबर दर्ज करें।",

    // How It Works Section
    how_tag: "⚡ सरल 6-चरण प्रक्रिया",
    how_title: "स्मार्टप्रोक्योर से फसल बेचना है बहुत आसान",
    how_desc: "रजिस्ट्रेशन से लेकर खाते में पैसे आने तक 6 आसान चरणों में — बिना कागजी कार्रवाई, बिना लंबी लाइन",

    step1_badge: "चरण 01 • मोबाइल रजिस्ट्रेशन",
    step1_title: "1. मोबाइल नंबर से रजिस्ट्रेशन",
    step1_desc: "अपने मोबाइल पर OTP प्राप्त करें। अपना नाम, आधार और बैंक खाता विवरण एक बार दर्ज करें।",
    step1_chip: "✨ केवल एक बार रजिस्ट्रेशन",

    step2_badge: "चरण 02 • स्लॉट बुकिंग",
    step2_title: "2. मंडी और अपनी पसंद का समय चुनें",
    step2_desc: "नजदीकी मंडी, फसल और तिथि चुनकर तुरंत डिजिटल पास (टोकन) प्राप्त करें।",
    step2_chip: "🎟️ तुरंत डिजिटल टोकन / पास",

    step3_badge: "चरण 03 • मंडी आगमन",
    step3_title: "3. तय समय पर मंडी आएं और चेक-इन करें",
    step3_desc: "अपने बुक किए गए समय पर मंडी पहुंचें और फोन से चेक-इन करके सीधी एंट्री पाएं।",
    step3_chip: "🚫 धूप में लाइन लगाने की जरूरत नहीं",

    step4_badge: "चरण 04 • लाइव कतार",
    step4_title: "4. फोन पर अपनी बारी (लाइव लाइन) देखें",
    step4_desc: "ट्रैक्टर या किसान विश्राम गृह में आराम से बैठकर देखें आपकी बारी आने में कितना समय है।",
    step4_chip: "📱 मोबाइल पर लाइव टोकन स्थिति",

    step5_badge: "चरण 05 • तौल एवं जांच",
    step5_title: "5. डिजिटल धर्म कांटा तौल व गुणवत्ता जांच",
    step5_desc: "कंप्यूटर द्वारा पारदर्शी तौल और सरकारी अधिकारी द्वारा सही ग्रेडिंग की रसीद पाएं।",
    step5_chip: "⚖️ 100% सही व निष्पक्ष तौल",

    step6_badge: "चरण 06 • 100% सीधा बैंक भुगतान",
    step6_title: "6. सीधा बैंक खाते में फसल का पूरा पैसा (DBT)",
    step6_desc: "फसल का पूरा भुगतान बिना किसी दलाल या बिचौलिए के सीधे आपके बैंक खाते में जमा।",
    step6_chip: "💰 0% दलाली • 100% बैंक खाता",

    // Bottom CTA Banner
    cta_title: "क्या आप अपनी फसल MSP पर बेचने के लिए तैयार हैं?",
    cta_desc: "हजारों किसानों के साथ जुड़ें और पारदर्शी व कतार-मुक्त मंडी खरीद का लाभ उठाएं",
    btn_register_farmer: "✍️ किसान पंजीकरण करें",
    btn_already_login: "🔐 पहले से पंजीकृत? लॉगिन करें",

    // Auth Pages (Login & Signup)
    farmer_login_header: "किसान लॉगिन",
    farmer_login_sub: "अपने पंजीकृत मोबाइल नंबर या ओटीपी से लॉगिन करें",
    admin_login_header: "ऑपरेटर / एडमिन लॉगिन",
    admin_login_sub: "सरकारी खरीद केंद्र ऑपरेटरों व अधिकारियों के लिए",
    mobile_label: "मोबाइल नंबर",
    phone_placeholder: "9876543210",
    btn_send_otp: "📲 ओटीपी भेजें / सत्यापित करें",
    sih_demo_login_title: "⚡ SIH 1-क्लिक त्वरित लॉगिन (पूर्वनिर्धारित)",
    reg_farmer_header: "किसान पंजीकरण",
    personal_details_sec: "👤 व्यक्तिगत जानकारी",
    full_name_label: "पूरा नाम *",
    full_name_ph: "पूरा नाम",
    aadhaar_label: "आधार नंबर (12 अंक) *",
    aadhaar_ph: "12 अंकों का आधार नंबर",
    state_label: "राज्य / केंद्र शासित प्रदेश *",
    district_label: "जिला *",
    district_ph: "जिला",
    village_label: "गांव / तहसील *",
    village_ph: "गांव / तहसील",
    bank_details_sec: "🏦 बैंक व भुगतान विवरण (DBT एमएसपी भुगतान के लिए)",
    bank_name_label: "बैंक का नाम *",
    bank_name_ph: "उदा. स्टेट बैंक ऑफ इंडिया",
    account_num_label: "खाता संख्या *",
    account_num_ph: "बैंक खाता संख्या",
    ifsc_label: "आईएफएससी कोड *",
    ifsc_ph: "उदा. SBIN0001234",
    kisan_id_label: "किसान आईडी / पीएम-किसान सं (वैकल्पिक)",
    kisan_id_ph: "वैकल्पिक पीएम-किसान आईडी",
    btn_submit_reg: "✍️ पंजीकरण पूरा करें व किसान आईडी प्राप्त करें",

    // Farmer Dashboard Tabs & Content
    tab_book_slot: "🎫 स्लॉट बुक करें",
    tab_my_bookings: "📋 मेरी बुकिंग्स",
    tab_track_progress: "📍 लाइव स्थिति ट्रैक करें",
    tab_payment_status: "💳 भुगतान स्थिति (DBT)",
    tab_my_profile: "👤 मेरी प्रोफाइल",

    sum_total_bookings: "कुल बुकिंग्स",
    sum_quintals_procured: "खरीदी गई फसल (क्विंटल)",
    sum_total_received: "कुल प्राप्त राशि",
    sum_active_token: "सक्रिय टोकन",

    book_slot_heading: "🎫 खरीद स्लॉट बुक करें",
    select_centre_label: "🏢 सरकारी खरीद केंद्र चुनें",
    select_crop_label: "🌾 फसल चुनें",
    select_date_label: "📅 तिथि चुनें",
    select_slot_label: "⏰ समय स्लॉट चुनें",
    loading_slots: "⏳ उपलब्ध स्लॉट लोड हो रहे हैं...",
    select_qty_label: "⚖️ मात्रा (क्विंटल)",
    btn_confirm_booking: "🎫 स्लॉट बुक करें व टोकन जनरेट करें",

    preview_title: "📋 बुकिंग पूर्वावलोकन",
    preview_centre: "खरीद केंद्र",
    preview_crop: "फसल",
    preview_date: "तिथि",
    preview_time_slot: "समय स्लॉट",
    preview_quantity: "मात्रा",
    msp_rate_2026: "2026 एमएसपी दर",
    estimated_total: "अनुमानित कुल राशि",
    your_token_number: "आपका टोकन नंबर",
    show_mandi_staff: "मंडी प्रवेश द्वार कर्मचारी को यह टोकन दिखाएं",

    my_bookings_title: "📋 मेरी बुकिंग्स इतिहास",
    refresh_btn: "🔄 रिफ्रेश करें",
    no_bookings_title: "कोई बुकिंग उपलब्ध नहीं",
    no_bookings_desc: "आपकी बुक की गई स्लॉट यहां दिखेंगी। अपनी पहली स्लॉट बुक करें।",

    track_token_mobile: "टोकन नंबर या मोबाइल",
    track_input_ph: "उदा. DOCA-26-P001",
    btn_track_status: "🔍 स्थिति देखें",
    enter_token_prompt: "स्थिति देखने के लिए टोकन नंबर दर्ज करें",
    enter_token_desc: "अपनी वास्तविक समय प्रगति देखने के लिए ऊपर टोकन नंबर दर्ज करें",

    payment_dbt_title: "💳 सीधा बैंक हस्तांतरण (DBT) स्थिति",
    no_payment_title: "कोई भुगतान रिकॉर्ड नहीं",
    no_payment_desc: "मंडी में आपकी फसल की तौल और गुणवत्ता जांच पूरी होने पर भुगतान विवरण यहां दिखेगा",

    profile_heading: "👤 किसान आधिकारिक प्रोफाइल",
    mobile_field: "📱 मोबाइल नंबर",
    aadhaar_field: "🪪 आधार नंबर",
    state_field: "🗺 राज्य",
    district_field: "📍 जिला / गांव",
    bank_acc_field: "🏦 बैंक खाता",
    ifsc_field: "🔑 आईएफएससी कोड",
    upi_field: "💸 यूपीआई आईडी",

    // Admin Dashboard Tabs & Content
    admin_title: "मंडी ऑपरेटर व अधिकारी डैशबोर्ड",
    active_mandi_label: "सक्रिय मंडी:",
    admin_tab_ops: "⚡ लाइव ऑपरेशन्स",
    admin_tab_queue: "👥 कतार प्रबंधन",
    admin_tab_weigh: "⚖️ धर्म कांटा (तौल)",
    admin_tab_status: "📝 स्थिति अपडेट",
    admin_tab_dbt: "💰 DBT भुगतान",
    admin_tab_analytics: "📊 विश्लेषिकी व रिपोर्ट",

    admin_stat_farmers: "पंजीकृत किसान",
    admin_stat_tokens: "अनुसूचित टोकन",
    admin_stat_procured: "कुल खरीद (क्विंटल)",
    admin_stat_payouts: "कुल जारी DBT राशि",

    desks_heading: "काउंटर डेस्क व ऑपरेटर स्टेशन",
    desks_sub: "सक्रिय मंडी निरीक्षण एवं धर्म कांटा लाइनें",
    btn_call_next_farmer: "📢 अगला किसान बुलाएं",
    live_queue_heading: "लाइव प्रतीक्षारत कतार",
    auto_syncing: "ऑटो-सिंक सक्रिय",

    th_token: "टोकन सं.",
    th_farmer: "किसान",
    th_crop: "फसल",
    th_slot: "समय स्लॉट",
    th_status: "स्थिति",
    th_desk: "कतार / काउंटर",
    th_actions: "कार्रवाई",
    th_qty: "अनुमानित मात्रा",
    th_checkin: "चेक-इन समय",
    th_net_qty: "शुद्ध मात्रा",
    th_total_amt: "कुल देय राशि",
    th_payment_action: "भुगतान स्थिति व कार्रवाई",

    weighbridge_heading: "डिजिटल धर्म कांटा व गुणवत्ता स्टेशन",
    select_token_prompt: "कतार प्रबंधन टैब से टोकन चुनें",
    none_selected: "कोई टोकन चयनित नहीं",
    scale_net_wt: "डिजिटल कांटा शुद्ध वजन",
    stable_scale: "कांटा स्थिर है",
    gross_wt_label: "सकल वाहन वजन (किग्रा)",
    tare_wt_label: "खाली वाहन वजन (किग्रा)",
    moisture_pct_label: "नमी प्रतिशत (%)",
    quality_grade_label: "गुणवत्ता ग्रेड",
    agronomist_notes_label: "अधिकारी / निरीक्षक टिप्पणी",
    net_produce_qty: "शुद्ध उपज मात्रा:",
    base_msp_rate: "आधार 2026 एमएसपी दर:",
    grade_bonus: "ग्रेड बोनस / नमी समायोजन:",
    effective_rate_label: "प्रभावी दर / क्विंटल:",
    total_payable_farmer: "किसान को कुल देय राशि:",
    btn_record_procurement: "⚖️ खरीद दर्ज करें व डिजिटल जे-फॉर्म रसीद जारी करें",
    select_token_weigh: "🔍 तौल हेतु टोकन चुनें",
    btn_load_token_details: "📋 टोकन विवरण लोड करें",

    update_status_heading: "📝 किसान बुकिंग स्थिति अपडेट करें",
    update_status_sub: "खरीद प्रक्रिया के किसी भी चरण में बुकिंग स्थिति अपडेट करें",
    token_or_id_label: "टोकन नंबर या बुकिंग आईडी",
    btn_lookup_booking: "🔍 बुकिंग खोजें",
    notes_remarks_label: "टिप्पणी / रिमार्क्स (वैकल्पिक)",
    btn_apply_status: "💾 स्थिति अपडेट लागू करें",

    dbt_settlements_heading: "आज की पूर्ण खरीद व DBT बैंक भुगतान",
    pfms_sync: "वास्तविक समय PFMS सिंक",

    analytics_crop_chart: "📊 फसल अनुसार खरीद (आज)",
    analytics_payment_chart: "💰 भुगतान स्थिति विभाजन",
    analytics_kpi_title: "📈 मुख्य प्रदर्शन संकेतक (KPI)",

    // Live Queue TV Display (display.html)
    display_heading: "सार्वजनिक टीवी लाइव कतार प्रदर्शन",
    active_counters_heading: "सक्रिय काउंटर • वर्तमान सेवारत किसान",
    live_broadcast: "लाइव प्रसारण",
    next_in_queue_label: "कतार में अगले किसान:",
    no_tokens_waiting: "कतार में कोई टोकन प्रतीक्षारत नहीं है",

    // Receipt (receipt.html)
    gov_receipt_hdr: "भारत सरकार • उपभोक्ता मामले विभाग",
    receipt_main_title: "आधिकारिक मंडी खरीद रसीद (जे-फॉर्म)",
    return_farmer_portal: "← किसान पोर्टल पर वापस जाएं",
    share_whatsapp: "📲 व्हाट्सएप पर शेयर करें",
    print_official_jform: "🖨️ जे-फॉर्म प्रिंट करें",

    // Common Status Values
    status_booked: "बुक्ड",
    status_checked_in: "चेक-इन पूर्ण",
    status_called: "काउंटर पर बुलाया गया",
    status_completed: "खरीद व भुगतान पूर्ण",
    status_cancelled: "रद्द",
    status_transferred: "बैंक में अंतरित (DBT)",
    status_processing: "प्रक्रियाधीन",
    status_pending: "लंबित",

    network_offline: "ऑफ़लाइन मोड: नेटवर्क कमजोर है। विवरण सुरक्षित है।",
    network_online: "ऑनलाइन वापस: मंडी सर्वर कनेक्ट हो गया।",
    step_register: "पंजीकरण",
    step_register_sub: "किसान प्रोफाइल",
    step_select: "चयन करें",
    step_select_sub: "केंद्र व स्लॉट",
    step_arrive: "आगमन",
    step_arrive_sub: "चेक-इन",
    step_queue: "लाइव कतार",
    step_queue_sub: "स्थान व समय",
    step_procure: "खरीद तौल",
    step_procure_sub: "वजन व गुणवत्ता",
    step_pay: "भुगतान",
    step_pay_sub: "DBT स्थिति",
    call_next: "अगला किसान बुलाएं",
    gross_wt: "सकल वजन (किग्रा)",
    tare_wt: "खाली वाहन वजन (किग्रा)",
    net_wt: "शुद्ध वजन (क्विंटल)",
    total_payable: "कुल देय राशि (₹)",
    moisture_test: "नमी प्रतिशत (%)",
    quality_grade: "गुणवत्ता ग्रेड",
    record_procurement: "खरीद दर्ज करें व जे-फॉर्म बनाएं",
    dbt_payout: "प्रत्यक्ष लाभ अंतरण (DBT)",
    live_waiting: "कतार में प्रतीक्षारत किसान",
    est_wait: "अनुमानित प्रतीक्षा समय"
  }
};

let currentLang = localStorage.getItem('smartprocure_lang') || 'en';

function t(key, fallbackText = '') {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('smartprocure_lang') || 'en');
  if (I18N[lang] && I18N[lang][key] !== undefined) {
    return I18N[lang][key];
  }
  if (I18N['en'] && I18N['en'][key] !== undefined) {
    return I18N['en'][key];
  }
  return fallbackText || key;
}
window.t = t;

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('smartprocure_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.innerHTML = I18N[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.placeholder = I18N[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (I18N[lang] && I18N[lang][key] !== undefined) {
      el.title = I18N[lang][key];
    }
  });

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerHTML = lang === 'en' ? '🇮🇳 <span>हिंदी</span>' : '🇬🇧 <span>English</span>';
  }

  const mobLangLabel = document.getElementById('mob-lang-label');
  if (mobLangLabel) {
    mobLangLabel.textContent = lang === 'en' ? 'हिंदी' : 'English';
  }

  try {
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  } catch (e) { }
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'hi' : 'en');
}


// Speech Synthesis Announcement for Rural & Sunlight Accessibility
function speakAnnouncement(text, lang = currentLang) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.88; // Clear cadence for noisy Mandi environments
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn("Speech synthesis error:", err);
  }
}

// Synthesized Audio Chime & Announcement via Web Audio API
function playChime(type = 'chime') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';

    if (type === 'call') {
      // Pleasant airport-style two-tone chime
      osc1.frequency.setValueAtTime(587.33, now); // D5
      osc1.frequency.setValueAtTime(880.00, now + 0.25); // A5
      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    } else {
      // Soft notification ping
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.15); // E5
      gainNode.gain.setValueAtTime(0.2, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    }

    osc1.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 1.3);
  } catch (e) {
    console.warn("Audio chime error:", e);
  }
}

// Toast Alert System
function showToast(title, message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div style="font-size: 1.3rem;">${type === 'success' ? '✅' : type === 'error' ? '❌' : '🔔'}</div>
    <div class="toast-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);
  playChime(type === 'error' ? 'ping' : 'chime');

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// SMS Notification Drawer Manager
const SMSDrawer = {
  unreadCount: 0,

  checkVisibility() {
    const btn = document.getElementById('floating-sms-btn');
    const mobBtn = document.getElementById('mob-nav-sms');

    // Never show SMS inbox buttons on the landing page
    if (window.location.pathname === '/' || window.location.pathname === '') {
      if (btn) btn.style.display = 'none';
      if (mobBtn) mobBtn.style.display = 'none';
      return false;
    }

    let activeFarmer = null;
    try {
      activeFarmer = JSON.parse(localStorage.getItem('smartprocure_farmer') || 'null');
    } catch (e) { }

    const isFarmerLoggedIn = !!(activeFarmer && activeFarmer.phone);
    if (btn) btn.style.display = isFarmerLoggedIn ? 'flex' : 'none';
    if (mobBtn) mobBtn.style.display = isFarmerLoggedIn ? 'flex' : 'none';
    return isFarmerLoggedIn;
  },

  init() {
    this.checkVisibility();

    const btn = document.getElementById('floating-sms-btn');
    const backdrop = document.getElementById('sms-drawer-backdrop');
    const closeBtn = document.getElementById('sms-close-btn');

    if (btn) btn.addEventListener('click', () => this.open());
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });
    }
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    this.fetchLogs();
  },

  open() {
    if (!this.checkVisibility()) return;
    const backdrop = document.getElementById('sms-drawer-backdrop');
    if (backdrop) {
      backdrop.classList.add('active');
      this.unreadCount = 0;
      this.updateBadge();
    }
  },

  close() {
    const backdrop = document.getElementById('sms-drawer-backdrop');
    if (backdrop) backdrop.classList.remove('active');
  },

  updateBadge() {
    const badge = document.getElementById('sms-badge-count');
    if (badge) {
      badge.textContent = this.unreadCount;
      badge.style.display = this.unreadCount > 0 ? 'flex' : 'none';
    }
    const mobBadge = document.getElementById('sms-badge-count-mob');
    if (mobBadge) {
      mobBadge.textContent = this.unreadCount;
      mobBadge.style.display = this.unreadCount > 0 ? 'flex' : 'none';
    }
  },

  async fetchLogs() {
    const isLoggedIn = this.checkVisibility();
    if (!isLoggedIn) {
      this.renderLogs([]);
      return;
    }

    try {
      let activeFarmer = null;
      try {
        activeFarmer = JSON.parse(localStorage.getItem('smartprocure_farmer') || 'null');
      } catch (e) { }

      if (!activeFarmer || !activeFarmer.phone) {
        this.renderLogs([]);
        return;
      }

      const res = await fetch(`/api/sms/logs?phone=${encodeURIComponent(activeFarmer.phone)}`);
      const data = await res.json();
      if (data.success && data.logs) {
        this.renderLogs(data.logs);
      } else {
        this.renderLogs([]);
      }
    } catch (e) {
      console.warn("SMS log error:", e);
      this.renderLogs([]);
    }
  },

  renderLogs(logs) {
    const body = document.getElementById('sms-phone-body');
    if (!body) return;

    if (logs.length === 0) {
      body.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📱</div>
          <p style="font-weight:700; color:#cbd5e1;">No SMS notifications yet.</p>
          <small style="color:#64748b;">Official alerts for bookings, token calls, and direct bank payments will appear here.</small>
        </div>
      `;
      return;
    }

    body.innerHTML = logs.map(sms => {
      let badgeClass = 'badge-booking';
      if (sms.notification_type === 'token_called') badgeClass = 'badge-called';
      if (sms.notification_type === 'weighment_done') badgeClass = 'badge-weighment';
      if (sms.notification_type === 'dbt_credited') badgeClass = 'badge-dbt';

      const timeStr = sms.sent_at ? new Date(sms.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Now';

      return `
        <div class="sms-bubble">
          <div class="sms-bubble-meta">
            <span class="sms-sender">🏛️ DoCA-GOV-SMS</span>
            <span>${timeStr}</span>
          </div>
          <p class="sms-text">${sms.message_content}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem;">
            <span class="sms-badge-tag ${badgeClass}">${sms.notification_type.replace(/_/g, ' ')}</span>
            <button type="button" onclick="speakAnnouncement('${sms.message_content.replace(/'/g, "\\'")}')" 
                    style="background:none; border:none; color:#38bdf8; cursor:pointer; font-size:0.9rem; padding:0.2rem 0.4rem;" 
                    title="Listen in Hindi/English" aria-label="Listen to SMS">
              🔊 सुनें
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  addIncomingSMS(sms) {
    this.unreadCount++;
    this.updateBadge();
    showToast("New Official SMS Alert", sms.message || sms.message_content, "info");
    this.fetchLogs();
  }
};

// Touch swipe-down-to-close listener for Mobile Bottom-Sheet Drawer
function initMobileSheetTouch() {
  const sheet = document.querySelector('.sms-phone-container');
  if (!sheet) return;

  let touchStartY = 0;
  let touchCurrentY = 0;

  sheet.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchCurrentY = touchStartY;
  }, { passive: true });

  sheet.addEventListener('touchmove', (e) => {
    touchCurrentY = e.touches[0].clientY;
    const deltaY = touchCurrentY - touchStartY;
    if (deltaY > 0 && window.innerWidth <= 768) {
      sheet.style.transform = `translateY(${deltaY}px)`;
    }
  }, { passive: true });

  sheet.addEventListener('touchend', () => {
    const deltaY = touchCurrentY - touchStartY;
    if (deltaY > 100 && window.innerWidth <= 768) {
      SMSDrawer.close();
    }
    sheet.style.transform = '';
    touchStartY = 0;
    touchCurrentY = 0;
  });
}

// Network Connectivity Watcher (Spotty Rural Connectivity Resilience)
function initNetworkWatcher() {
  const banner = document.getElementById('network-status-banner');
  const icon = document.getElementById('network-status-icon');
  const text = document.getElementById('network-status-text');

  function updateStatus() {
    if (!navigator.onLine) {
      if (banner) {
        banner.style.display = 'flex';
        banner.className = 'network-status-banner offline';
        if (icon) icon.textContent = '📡❌';
        if (text) text.textContent = I18N[currentLang]?.network_offline || "Spotty connection: Working in resilient offline mode.";
      }
      showToast("Network Offline", "Spotty Mandi signal. Data saved in offline mode.", "error");
    } else {
      if (banner && banner.style.display !== 'none') {
        banner.className = 'network-status-banner online';
        if (icon) icon.textContent = '✅';
        if (text) text.textContent = I18N[currentLang]?.network_online || "Connected: Mandi gateway online.";
        setTimeout(() => { banner.style.display = 'none'; }, 3000);
        showToast("Online", "Connected to SmartProcure gateway.", "success");
      }
    }
  }

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
  if (!navigator.onLine) updateStatus();
}

// Global Server-Sent Events (SSE) Real-time Listener
function initRealtimeStream() {
  if (!window.EventSource) return;

  const eventSource = new EventSource('/api/queue/stream');

  eventSource.onmessage = (e) => {
    try {
      const payload = JSON.parse(e.data);
      if (!payload || !payload.event) return;

      // Dispatch window event for specific pages to consume
      window.dispatchEvent(new CustomEvent(`smartprocure:${payload.event}`, { detail: payload.data }));

      if (payload.event === 'token_called') {
        playChime('call');
        const announcement = `टोकन नंबर ${payload.data.token_number} काउंटर ${payload.data.desk_name} पर आएं`;
        speakAnnouncement(announcement, 'hi');
        showToast("Token Called to Counter!", `Token ${payload.data.token_number} called to ${payload.data.desk_name}`, "info");
        SMSDrawer.fetchLogs();
      } else if (payload.event === 'payment_credited') {
        playChime('chime');
        showToast("DBT Payment Credited!", `Rs. ${payload.data.amount} transferred (UTR: ${payload.data.utr})`, "success");
        SMSDrawer.fetchLogs();
      } else if (payload.event === 'procurement_completed') {
        SMSDrawer.fetchLogs();
      }
    } catch (err) {
      console.warn("SSE parse error:", err);
    }
  };

  eventSource.onerror = () => {
    // Automatically attempts reconnect
  };
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  SMSDrawer.init();
  initMobileSheetTouch();
  initNetworkWatcher();
  initRealtimeStream();
});

