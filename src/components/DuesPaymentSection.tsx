import React, { useState, useEffect } from "react";
import {
  Shield,
  Smartphone,
  Zap,
  Lock,
  CreditCard,
  CheckCircle2,
  RefreshCw,
  HelpCircle,
  ExternalLink,
  PhoneCall,
  ArrowRight,
  Check,
  SmartphoneCharging,
  Coins
} from "lucide-react";

export default function DuesPaymentSection() {
  // Mobile simulator state management
  const [memberId, setMemberId] = useState("G410018520");
  const [isVerifyingId, setIsVerifyingId] = useState(false);
  const [idVerified, setIdVerified] = useState(true);
  const [memberName, setMemberName] = useState("OSAAH HANNET");
  
  const [duration, setDuration] = useState("24"); // 1, 6, 12, 24 months
  const [paymentOption, setPaymentOption] = useState<"momo" | "card">("momo");
  const [network, setNetwork] = useState<"mtn" | "telecel" | "at">("mtn");
  const [phoneNumber, setPhoneNumber] = useState("054 123 4567");
  const [cardNumber, setCardNumber] = useState("4000 1234 5678 9010");
  const [cardExpiry, setCardExpiry] = useState("12/28");
  
  // Simulation flow states: 'idle' | 'processing' | 'otp_required' | 'verifying_otp' | 'success'
  const [simStatus, setSimStatus] = useState<"idle" | "processing" | "otp_required" | "verifying_otp" | "success">("idle");
  const [otpCode, setOtpCode] = useState(["", "", "", ""]);
  const [activeStep, setActiveStep] = useState(1);

  // Auto-validation effect simulator when Member ID changes
  useEffect(() => {
    if (memberId.length >= 6) {
      setIsVerifyingId(true);
      const timer = setTimeout(() => {
        setIsVerifyingId(false);
        setIdVerified(true);
        // Realistic name generation or default
        if (memberId.toUpperCase().includes("OSAAH") || memberId.includes("18")) {
          setMemberName("OSAAH HANNET");
        } else if (memberId.toUpperCase().includes("MAHAMA") || memberId.includes("92")) {
          setMemberName("JOHN MAHAMA");
        } else {
          setMemberName("KWAME AMANKWAH");
        }
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIdVerified(false);
    }
  }, [memberId]);

  // Determine current active step in the guide based on form status
  useEffect(() => {
    if (simStatus === "success") {
      setActiveStep(5);
    } else if (phoneNumber.length > 5 && paymentOption === "momo") {
      setActiveStep(4);
    } else if (paymentOption) {
      setActiveStep(3);
    } else if (duration) {
      setActiveStep(2);
    } else {
      setActiveStep(1);
    }
  }, [simStatus, paymentOption, duration, phoneNumber]);

  // Handle Make Payment
  const handleInitiatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idVerified) return;
    
    setSimStatus("processing");
    setTimeout(() => {
      setSimStatus("otp_required");
    }, 1500);
  };

  // Handle OTP Submission
  const handleVerifyOtp = () => {
    setSimStatus("verifying_otp");
    setTimeout(() => {
      setSimStatus("success");
    }, 1800);
  };

  // Handle resetting the payment simulation
  const handleResetSimulation = () => {
    setSimStatus("idle");
    setOtpCode(["", "", "", ""]);
    setMemberId("G410018520");
    setPhoneNumber("054 123 4567");
    setIdVerified(true);
  };

  // Handle OTP digit inputs
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otpCode];
    newOtp[index] = value.substring(value.length - 1);
    setOtpCode(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Calculate price of selected duration
  const getGhsAmount = () => {
    switch (duration) {
      case "1": return 2.00;
      case "6": return 12.00;
      case "12": return 24.00;
      case "24": return 48.00;
      default: return 48.00;
    }
  };

  return (
    <section id="party-dues-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-white border-b border-outline-variant/10 relative overflow-hidden">
      {/* Decorative architectural grid background overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(#006B3C_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Main Promotion Details & Call To Action) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#006B3C]/10 border border-[#006B3C]/15 rounded-[1px] text-xs text-[#006B3C] font-semibold uppercase tracking-widest w-fit">
              MEMBER SERVICES
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#006B3C] leading-tight tracking-tight">
              Pay Your Party Dues Online
            </h2>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Stay active and in good standing within the National Democratic Congress by paying your membership dues securely online through our official payment platform.
            </p>

            {/* Prominent High-Converting Call to Action Area */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="https://ndc.org.gh/dues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#CE1126] hover:bg-opacity-95 text-white font-extrabold text-lg py-4 px-8 rounded-[1px] tracking-wide transition-all duration-300 shadow-lg shadow-[#CE1126]/25 group shrink-0 active:scale-95"
              >
                Pay Your Dues
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Instant USSD Code option for Offline convenience (Authentic Ghanaian Context) */}
              <div className="flex items-center gap-4 bg-[#006B3C]/5 hover:bg-[#006B3C]/10 transition-colors border border-[#006B3C]/10 px-5 py-3 rounded-[1px] flex-1">
                <div className="p-2 bg-[#006B3C]/10 rounded-[1px] text-[#006B3C]">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#006B3C] uppercase tracking-wide">
                    Alternative USSD Payment
                  </div>
                  <div className="text-lg font-mono font-extrabold text-on-surface">
                    *920*25#
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <hr className="border-outline-variant/40 my-2" />

            {/* Quick Secure Gateways Supported Grid Icons */}
            <div>
              <div className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#006B3C]" />
                Supported Direct Gateways & Wallets
              </div>
              <div className="flex flex-wrap gap-3 items-center opacity-85">
                {/* MTN Mobile Money logo container */}
                <div className="h-7 px-3 bg-[#FFCC00]/15 border border-[#FFCC00]/30 rounded-[1px] flex items-center justify-center text-[10px] font-extrabold text-black/80 tracking-tight">
                  MTN MoMo
                </div>
                {/* Telecel Cash logo container */}
                <div className="h-7 px-3 bg-[#E60000]/10 border border-[#E60000]/25 rounded-[1px] flex items-center justify-center text-[10px] font-extrabold text-red-600 tracking-tight">
                  Telecel Cash
                </div>
                {/* AT Money logo container */}
                <div className="h-7 px-3 bg-[#008CC9]/10 border border-[#008CC9]/25 rounded-[1px] flex items-center justify-center text-[10px] font-extrabold text-[#008CC9] tracking-tight">
                  AT Money
                </div>
                {/* Visa and Mastercard */}
                <div className="h-7 px-2 bg-slate-50 border border-slate-200 rounded-[1px] flex items-center gap-1.5 text-[9px] font-bold text-slate-500">
                  <CreditCard className="w-3 h-3 text-[#1A1F71]" />
                  Visa / Mastercard
                </div>
                {/* GhIPSS e-commerce gateway indicator */}
                <div className="text-[10px] text-gray-400 font-mono font-semibold ml-1 sm:ml-auto">
                  GhIPSS Secure Gateway
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Stunning Mockup Phone Showcase with Premium Hex & Interactive Simulation) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="relative w-full max-w-lg bg-gradient-to-br from-[#025a33] via-[#006b3c] to-[#014125] p-6 sm:p-8 rounded-3xl md:rounded-[36px] border border-white/10 shadow-2xl shadow-[#006B3C]/10 overflow-hidden">
              
              {/* Premium Background Elements: Subtle green vector grids */}
              <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hex-grid" width="28" height="48.5" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                      <path d="M14 0 L28 8 L28 24 L14 32 L0 24 L0 8 Z M0 48.5 L14 40.5 L28 48.5" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hex-grid)" />
                </svg>
              </div>

              {/* Gold Top Light Spill */}
              <div className="absolute top-0 left-1/4 w-1/2 h-44 bg-gradient-to-b from-[#fcd116]/10 to-transparent blur-3xl pointer-events-none"></div>

              {/* Layout splits into Visual Guide Steps (left-aligned) and Interactive Phone Simulator (right/center-aligned) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                
                {/* Step Indicators Column for Desktop */}
                <div className="md:col-span-5 flex flex-col gap-4 select-none">
                  <div className="text-[11px] font-extrabold text-[#fcd116] uppercase tracking-widest pl-1">
                    How it works:
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      { num: 1, text: "Enter Member ID" },
                      { num: 2, text: "Select Duration" },
                      { num: 3, text: "Choose Method" },
                      { num: 4, text: "Provide Number" },
                      { num: 5, text: "Authorise Charge" }
                    ].map((step) => {
                      const isActive = activeStep === step.num;
                      const isCompleted = activeStep > step.num;
                      
                      return (
                        <div
                          key={step.num}
                          className={`flex items-center gap-3 p-2.5 rounded-[1px] border transition-all duration-300 ${
                            isActive
                              ? "bg-white/15 border-white/20 translate-x-1"
                              : isCompleted
                              ? "bg-[#fcd116]/10 border-[#fcd116]/10 text-white/90"
                              : "bg-transparent border-transparent text-white/50"
                          }`}
                        >
                          <div
                            className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${
                              isActive
                                ? "bg-[#fcd116] text-[#006B3C] border-[#fcd116]"
                                : isCompleted
                                ? "bg-[#006B3C] text-[#fcd116] border-[#fcd116]/40"
                                : "bg-transparent border-white/20 text-white/50"
                            }`}
                          >
                            {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.num}
                          </div>
                          <span className={`text-xs font-semibold ${isActive ? "text-[#fcd116] font-bold" : ""}`}>
                            {step.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Trust badge */}
                  <div className="mt-2 p-3 bg-black/20 border border-white/5 rounded-lg flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#fcd116] shrink-0" />
                    <span className="text-[9px] font-mono leading-tight text-white/70">
                      SECURE 256-BIT ENCRYPTED SSL GATEWAY Connection.
                    </span>
                  </div>
                </div>

                {/* Smartphone Device Mockup Simulator Container */}
                <div className="md:col-span-7 flex justify-center">
                  
                  {/* Smartphone Frame Wrapper */}
                  <div className="relative w-[280px] bg-[#0c120a] rounded-[36px] p-2.5 shadow-2xl border-[5px] border-[#313a2d] ring-4 ring-black/30 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                    
                    {/* Top Notch Speaker element */}
                    <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-[#313a2d] rounded-full z-30 flex items-center justify-center p-[1px]">
                      <div className="w-8 h-1 bg-black rounded-full mb-0.5"></div>
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full ml-2 mb-0.5 border border-slate-700"></div>
                    </div>

                    {/* Smartphone Screen Content wrapper */}
                    <div className="w-full bg-slate-50 rounded-[28px] overflow-hidden text-[#111827] flex flex-col min-h-[420px] relative font-sans text-xs select-none">
                      
                      {/* Interactive Status Bar */}
                      <div className="h-7 bg-[#006B3C] text-white px-4 pt-1.5 flex justify-between items-center text-[9px] font-bold relative z-20">
                        <span>09:20</span>
                        <div className="flex items-center gap-1 opacity-90">
                          {/* Signal Strength Dots */}
                          <div className="flex gap-0.5 items-end h-2">
                            <div className="w-0.5 h-1 bg-white rounded-full"></div>
                            <div className="w-0.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-0.5 h-2 bg-white rounded-full"></div>
                          </div>
                          {/* 4G symbol */}
                          <span>4G</span>
                          {/* Mock Battery icon */}
                          <div className="w-4 h-2 border border-white rounded-[2px] p-[1px] flex items-center">
                            <div className="h-full w-full bg-[#fcd116] rounded-[1px]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Header of Simulated App with NDC Mini Logo */}
                      <div className="bg-[#006B3C] text-white px-3 pb-3 pt-1 border-b border-[#035a34] flex items-center justify-between shadow-sm relative z-20">
                        <div className="flex items-center gap-1.5">
                          {/* Mini NDC Umbrella Logo svg */}
                          <div className="w-5 h-5 bg-white rounded-full p-0.5 flex items-center justify-center shadow-inner">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                              <path d="M 50 20 C 32 20, 18 35, 15 45 C 22 42, 30 42, 35 45 C 40 42, 48 42, 53 45 C 58 42, 66 42, 71 45 C 76 42, 84 42, 85 45 C 82 35, 68 20, 50 20 Z" fill="#006B3C" />
                              <path d="M 50 20 C 42 20, 36 28, 35 45 C 40 42, 48 42, 53 45 C 50 28, 46 22, 50 20 Z" fill="#CE1126" />
                              <path d="M 50 20 C 47 20, 44 24, 45 45 C 48 42, 52 42, 53 45 C 52 24, 51 21, 50 20 Z" fill="#ffffff" />
                              <path d="M 48 45 L 48 78 C 48 81, 52 81, 52 78 L 52 45 Z" fill="#000000" />
                              <circle cx="50" cy="17" r="2.5" fill="#CE1126" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[10px] font-extrabold tracking-tight leading-none uppercase">GHANA NDC</div>
                            <div className="text-[7px] text-[#fcd116] tracking-wider leading-none">MEMBERSHIP PORTAL</div>
                          </div>
                        </div>
                        <span className="text-[7px] bg-[#035a34] text-[#fcd116] border border-[#fcd116]/30 px-1 py-0.5 rounded-sm font-bold uppercase tracking-wide">
                          PAYMENT APP
                        </span>
                      </div>

                      {/* Screen Tab Navigation */}
                      <div className="bg-slate-100 border-b border-slate-200 grid grid-cols-2 text-center text-[10px] font-bold text-slate-500">
                        <div className="py-2 border-r border-slate-200 bg-white text-[#006B3C] border-b-2 border-[#006B3C]">
                          Pay Dues
                        </div>
                        <div className="py-2 hover:bg-slate-200/50 transition-colors cursor-pointer text-slate-400">
                          Check Dues
                        </div>
                      </div>

                      {/* Dynamic Simulation Content Area */}
                      <div className="flex-1 p-3 bg-slate-50 flex flex-col justify-between overflow-y-auto">
                        
                        {/* Simulation stage: IDLE (Regular payment form) */}
                        {simStatus === "idle" && (
                          <form onSubmit={handleInitiatePayment} className="flex flex-col gap-2.5 h-full justify-between flex-grow">
                            <div className="space-y-2">
                              {/* Member ID Field */}
                              <div>
                                <label className="text-[9px] font-extrabold text-slate-500 uppercase block tracking-wider mb-0.5">
                                  1. Party Member ID
                                </label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    value={memberId}
                                    onChange={(e) => setMemberId(e.target.value)}
                                    placeholder="e.g. G410018520"
                                    className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1.5 font-mono text-[10.5px] font-bold focus:outline-none focus:border-[#006B3C] uppercase text-slate-800"
                                    required
                                  />
                                  {isVerifyingId && (
                                    <span className="absolute right-2 top-2">
                                      <RefreshCw className="w-3 h-3 text-slate-400 animate-spin" />
                                    </span>
                                  )}
                                </div>
                                
                                {idVerified && (
                                  <div className="mt-0.5 px-2 py-0.5 bg-emerald-50 rounded-sm border border-emerald-100 flex items-center justify-between text-[8px]">
                                    <span className="text-[#006B3C] font-semibold truncate max-w-[110px]">
                                      Verified: {memberName}
                                    </span>
                                    <span className="text-[7px] text-[#006B3C] font-extrabold uppercase font-mono tracking-wider bg-emerald-100 px-1 py-0.2">
                                      ACTIVE
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Payment Duration Select */}
                              <div>
                                <label className="text-[9px] font-extrabold text-slate-500 uppercase block tracking-wider mb-0.5">
                                  2. Select Payment Duration
                                </label>
                                <select
                                  value={duration}
                                  onChange={(e) => setDuration(e.target.value)}
                                  className="w-full bg-white border border-slate-200 rounded-[1px] px-1.5 py-1.5 text-[10px] font-bold text-slate-700 focus:outline-none focus:border-[#006B3C]"
                                >
                                  <option value="1">1 Month - GH₵ 2.00</option>
                                  <option value="6">6 Months - GH₵ 12.00</option>
                                  <option value="12">12 Months - GH₵ 24.00</option>
                                  <option value="24">24 Months - GH₵ 48.00 (Standard)</option>
                                </select>
                              </div>

                              {/* Payment Option Radio Cards */}
                              <div>
                                <label className="text-[9px] font-extrabold text-slate-500 uppercase block tracking-wider mb-0.5">
                                  3. Payment Option
                                </label>
                                <div className="grid grid-cols-2 gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => setPaymentOption("momo")}
                                    className={`py-1.5 px-2 border rounded-[1px] flex items-center justify-center gap-1 text-[9px] font-bold transition-all ${
                                      paymentOption === "momo"
                                        ? "bg-slate-900 border-slate-900 text-white"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                    }`}
                                  >
                                    <Smartphone className="w-3 h-3" />
                                    Mobile Money
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setPaymentOption("card")}
                                    className={`py-1.5 px-2 border rounded-[1px] flex items-center justify-center gap-1 text-[9px] font-bold transition-all ${
                                      paymentOption === "card"
                                        ? "bg-slate-900 border-slate-900 text-white"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                    }`}
                                  >
                                    <CreditCard className="w-3 h-3" />
                                    Card Payment
                                  </button>
                                </div>
                              </div>

                              {/* Sub-fields for Mobile Money or Card Option */}
                              {paymentOption === "momo" ? (
                                <div className="space-y-1.5 p-1.5 bg-slate-100 rounded-[1px] border border-slate-200">
                                  {/* Select Network Radio */}
                                  <div className="flex gap-1.5 justify-between">
                                    {["mtn", "telecel", "at"].map((net) => (
                                      <button
                                        key={net}
                                        type="button"
                                        onClick={() => setNetwork(net as any)}
                                        className={`flex-1 py-1 rounded-[1px] text-[8px] font-extrabold border uppercase transition-colors ${
                                          network === net
                                            ? net === "mtn"
                                              ? "bg-[#FFCC00] border-[#FFCC00] text-black"
                                              : net === "telecel"
                                              ? "bg-red-600 border-red-600 text-white"
                                              : "bg-[#008CC9] border-[#008CC9] text-white"
                                            : "bg-white border-slate-200 text-slate-500"
                                        }`}
                                      >
                                        {net === "mtn" ? "MoMo" : net === "telecel" ? "Telecel" : "AT"}
                                      </button>
                                    ))}
                                  </div>

                                  {/* Wallet Phone Number */}
                                  <div>
                                    <label className="text-[8px] font-bold text-slate-500 uppercase block mb-0.5">
                                      4. Wallet Number
                                    </label>
                                    <input
                                      type="tel"
                                      value={phoneNumber}
                                      onChange={(e) => setPhoneNumber(e.target.value)}
                                      placeholder="054 123 4567"
                                      className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1 text-[9.5px] font-mono font-bold focus:outline-none focus:border-[#006B3C] text-slate-800"
                                      required
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-1.5 p-1.5 bg-slate-100 rounded-[1px] border border-slate-200">
                                  <div>
                                    <label className="text-[8px] font-bold text-slate-500 uppercase block mb-0.5">
                                      Card Number
                                    </label>
                                    <input
                                      type="text"
                                      value={cardNumber}
                                      onChange={(e) => setCardNumber(e.target.value)}
                                      placeholder="4000 1234 5678 9010"
                                      className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1 text-[9.5px] font-mono font-bold focus:outline-none focus:border-[#006B3C] text-slate-800"
                                      required
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-1.5">
                                    <div>
                                      <label className="text-[8px] font-bold text-slate-500 uppercase block mb-0.5">
                                        Expiry Date
                                      </label>
                                      <input
                                        type="text"
                                        value={cardExpiry}
                                        onChange={(e) => setCardExpiry(e.target.value)}
                                        placeholder="MM/YY"
                                        className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1 text-[9px] font-mono font-bold text-center focus:outline-none focus:border-[#006B3C] text-slate-800"
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className="text-[8px] font-bold text-slate-500 uppercase block mb-0.5">
                                        Security CVV
                                      </label>
                                      <input
                                        type="password"
                                        maxLength={3}
                                        defaultValue="301"
                                        placeholder="***"
                                        className="w-full bg-white border border-slate-200 rounded-[1px] px-2 py-1 text-[9px] font-mono font-bold text-center focus:outline-none"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Make Payment CTA Button with dynamic total */}
                            <button
                              type="submit"
                              disabled={!idVerified}
                              className={`w-full py-2.5 rounded-[1px] text-white text-[11px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2 shadow transition-all ${
                                idVerified
                                  ? "bg-[#006B3C] hover:bg-[#004d2a] active:scale-98"
                                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
                              }`}
                            >
                              <Lock className="w-3.5 h-3.5" />
                              Pay GH₵ {getGhsAmount().toFixed(2)} Now
                            </button>
                          </form>
                        )}

                        {/* Simulation stage: PROCESSING LOADER */}
                        {simStatus === "processing" && (
                          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
                            <div className="relative">
                              <div className="w-12 h-12 border-2 border-[#006B3C]/10 border-t-[#006B3C] border-r-[#006B3C] rounded-full animate-spin"></div>
                              <Smartphone className="w-5 h-5 text-[#006B3C] absolute inset-0 m-auto" />
                            </div>
                            <div className="text-center">
                              <span className="text-xs font-extrabold text-[#006B3C] block uppercase tracking-wide">
                                Sending Charge Prompt
                              </span>
                              <span className="text-[9px] text-slate-400 font-mono tracking-tight block mt-1">
                                Connecting to {paymentOption === "momo" ? network.toUpperCase() : "Card Network"}...
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Simulation stage: OTP CODE INPUT (Authentic detail from Pay Your Dues.png) */}
                        {simStatus === "otp_required" && (
                          <div className="flex-1 flex flex-col justify-between py-2">
                            <div className="space-y-4">
                              <div className="text-center">
                                <div className="w-10 h-10 bg-[#FFCC00]/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-2 border border-[#FFCC00]/25">
                                  <SmartphoneCharging className="w-5 h-5" />
                                </div>
                                <h4 className="text-[11px] font-bold text-slate-700">Authorise Money Wallet Prompt</h4>
                                <p className="text-[8.5px] text-slate-500 mt-1 max-w-[180px] mx-auto leading-normal">
                                  Enter the 4-digit security authentication OTP sent to mobile number <strong className="text-slate-700">{phoneNumber}</strong> to confirm the payment.
                                </p>
                              </div>

                              {/* Numeric Digit boxes */}
                              <div className="flex gap-2 justify-center">
                                {[0, 1, 2, 3].map((index) => (
                                  <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="text"
                                    value={otpCode[index]}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    maxLength={1}
                                    className="w-10 h-11 bg-white border border-slate-200 text-center font-mono text-[16px] font-bold text-slate-800 rounded-sm focus:outline-none focus:border-[#006B3C]"
                                    autoFocus={index === 0}
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <button
                                type="button"
                                onClick={handleVerifyOtp}
                                className="w-full py-2 bg-[#006B3C] hover:bg-[#004d2a] text-white text-[10px] font-bold uppercase rounded-[1px] transition-colors"
                              >
                                Verify & Authorise GH₵ {getGhsAmount().toFixed(2)}
                              </button>
                              <button
                                type="button"
                                onClick={() => setSimStatus("idle")}
                                className="w-full py-1 text-slate-400 text-[8.5px] hover:text-slate-600 transition-colors"
                              >
                                Cancel Transaction
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Simulation stage: VERIFYING OTP LOADER */}
                        {simStatus === "verifying_otp" && (
                          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
                            <RefreshCw className="w-10 h-10 text-[#CE1126] animate-spin" />
                            <div className="text-center">
                              <span className="text-xs font-extrabold text-[#CE1126] block uppercase tracking-wide">
                                Verifying Security OTP
                              </span>
                              <span className="text-[9px] text-slate-400 font-mono block mt-1">
                                Reconciling payment gateway response...
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Simulation stage: PAYMENT SUCCESS */}
                        {simStatus === "success" && (
                          <div className="flex-1 flex flex-col justify-between py-2 text-center">
                            <div className="space-y-3 my-auto">
                              {/* Green Animated Check */}
                              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300 relative">
                                <Check className="w-6 h-6 animate-bounce" />
                              </div>

                              <div>
                                <h4 className="text-xs font-extrabold text-emerald-600 uppercase tracking-wide">
                                  Payment Successful!
                                </h4>
                                <p className="text-[8px] text-slate-400 font-mono mt-0.5">
                                  Ref: NDC-TXN-{Math.floor(Math.random() * 89999 + 10000)}
                                </p>
                              </div>

                              {/* Simulated Digital Receipt Grid */}
                              <div className="bg-slate-100/80 border border-slate-200 rounded-[1px] p-2.5 text-left text-[8.5px] font-mono space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Paid To:</span>
                                  <span className="text-slate-700 font-bold">NDC National HQ</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Member ID:</span>
                                  <span className="text-slate-700 font-bold uppercase">{memberId}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-400">Name:</span>
                                  <span className="text-slate-700 font-bold uppercase truncate max-w-[100px]">{memberName}</span>
                                </div>
                                <div className="flex justify-between pt-1 border-t border-slate-200">
                                  <span className="text-slate-400">Amount Paid:</span>
                                  <span className="text-[#006B3C] font-extrabold">GH₵ {getGhsAmount().toFixed(2)}</span>
                                </div>
                              </div>

                              <p className="text-[8px] text-emerald-600/90 font-medium leading-relaxed max-w-[190px] mx-auto">
                                Instant confirmation SMS and digital receipt has been dispatched to {phoneNumber}.
                              </p>
                            </div>

                            <div className="space-y-1.5 mt-2">
                              {/* Open formal invoice receipt */}
                              <button
                                type="button"
                                onClick={() => alert("Digital receipt invoice has been simulation-downloaded to your screen! Check your device download directory.")}
                                className="w-full py-1.5 bg-[#006B3C] text-white text-[9.5px] font-bold uppercase rounded-[1px] flex items-center justify-center gap-1"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Download PDF Receipt
                              </button>
                              
                              <button
                                type="button"
                                onClick={handleResetSimulation}
                                className="w-full py-1 border border-slate-200 hover:bg-slate-100 text-slate-500 text-[8.5px] font-bold uppercase rounded-[1px] transition-colors"
                              >
                                Process Another Payment
                              </button>
                            </div>
                          </div>
                        )}

                        {/* NDC Colored Bottom Flag on Smartphone UI */}
                        <div className="h-1.5 w-full flex rounded-full overflow-hidden mt-2 border border-slate-200">
                          <div className="bg-[#CE1126] flex-1"></div>
                          <div className="bg-[#ffffff] flex-1"></div>
                          <div className="bg-[#000000] flex-1"></div>
                          <div className="bg-[#006B3C] flex-1"></div>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Three Beautiful, Modular Benefit Cards beneath or beside the content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20">
          
          {/* Benefit Card 1: Secure Payments */}
          <div className="bg-surface-white border border-outline-variant/30 rounded-[1px] p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-[#006B3C]/30 transition-all group duration-300">
            <div className="w-12 h-12 bg-[#006B3C]/5 text-[#006B3C] p-3 rounded-[1px] mb-5 border border-[#006B3C]/10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2 tracking-tight">
              Secure Payments
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Your payments are safe and secure. The system implements bank-grade SSL encryption and compliant authorization processes to safeguard every transaction.
            </p>
          </div>

          {/* Benefit Card 2: Mobile Money Supported */}
          <div className="bg-surface-white border border-outline-variant/30 rounded-[1px] p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-[#006B3C]/30 transition-all group duration-300">
            <div className="w-12 h-12 bg-[#006B3C]/5 text-[#006B3C] p-3 rounded-[1px] mb-5 border border-[#006B3C]/10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2 tracking-tight">
              Mobile Money Supported
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Instantly settle your dues utilizing MTN Mobile Money (MoMo), Telecel Cash, or AT Money. Works flawlessly across all of Ghana's major mobile networks.
            </p>
          </div>

          {/* Benefit Card 3: Instant Payment Confirmation */}
          <div className="bg-surface-white border border-outline-variant/30 rounded-[1px] p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-[#006B3C]/30 transition-all group duration-300">
            <div className="w-12 h-12 bg-[#006B3C]/5 text-[#006B3C] p-3 rounded-[1px] mb-5 border border-[#006B3C]/10 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-2 tracking-tight">
              Instant Confirmation
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Receive live SMS transaction responses and downloadable PDF receipts instantly. Member files are updated statefully in absolute real-time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
