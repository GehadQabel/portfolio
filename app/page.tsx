'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowDownRight, ArrowRight, Download, ExternalLink, Github, 
  Linkedin, Mail, ShieldCheck, Database, Layers, CheckCircle2, 
  FileText, Code2, Globe, Terminal, User, Play, Image as ImageIcon,
  ChevronRight, Laptop, Monitor, RefreshCw, X, Receipt, ShoppingCart,
  Package, Users, Key, Banknote, AlertCircle, Sun, Moon
} from 'lucide-react';

interface ScreenshotItem {
  title: string;
  category: string;
  src: string;
  desc: string;
}

export default function PortfolioPage() {
  const [selectedRolePreview, setSelectedRolePreview] = useState<'ADMIN' | 'FINANCE' | 'WAREHOUSE' | 'PURCHASING' | 'SALES'>('ADMIN');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [activeMediaModal, setActiveMediaModal] = useState<'NONE' | 'SCREENSHOTS' | 'VIDEO' | 'ARCHITECTURE'>('NONE');
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check initial preference from localStorage or system
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const zaadScreenshots: ScreenshotItem[] = [
    {
      title: 'POS Real-Time Checkout Screen',
      category: 'Point of Sale',
      src: '/assets/zaad/screenshots/pos-checkout.png',
      desc: 'High-speed cashier checkout interface with instant barcode resolution, quick-item grid, split cash/visa payments, and active customer balance verification.'
    },
    {
      title: 'Thermal Receipt Generator (80mm)',
      category: 'Point of Sale',
      src: '/assets/zaad/screenshots/receipt-modal.png',
      desc: 'Formatted ESC/POS thermal invoice layout with store branding, tax invoice metadata, cashier shift tracking, and itemized breakdown.'
    },
    {
      title: 'Cashier Shift Management & Reconciliation',
      category: 'Cashier & Administration',
      src: '/assets/zaad/screenshots/shift-management.png',
      desc: 'Opening balance registration, running cash/visa receipts, drawer discrepancy tracking, and end-of-shift reconciliation.'
    },
    {
      title: 'Shift Closing & Verification Audit',
      category: 'Cashier & Administration',
      src: '/assets/zaad/screenshots/shift-closing.png',
      desc: 'Blind count reconciliation comparing actual drawer cash against system expectations with mandatory discrepancy logging.'
    },
    {
      title: 'Customer Accounts & Credit Health',
      category: 'Customers & Financial Operations',
      src: '/assets/zaad/screenshots/customer-account.png',
      desc: 'Customer credit ledger, outstanding receivables balance, debt payment receipts, and purchase history tracking.'
    },
    {
      title: 'Supplier Accounts & Purchasing Ledger',
      category: 'Purchasing & Suppliers',
      src: '/assets/zaad/screenshots/supplier-account.png',
      desc: 'Supplier invoice intake, payment voucher recording, purchase returns, and supplier account balance reconciliation.'
    },
    {
      title: 'Sales Invoices & Returns Archive',
      category: 'Sales Operations',
      src: '/assets/zaad/screenshots/invoice-history.png',
      desc: 'Audited log of all historical sales receipts, line-item returns, customer refunds, and payment audit logs.'
    },
    {
      title: 'Daily Z-Report & Operational Auditing',
      category: 'Operational Reporting',
      src: '/assets/zaad/screenshots/dailyz-page1.png',
      desc: 'Comprehensive daily financial summary covering net sales, returns, gross margins, cash drawer variances, and category contributions.'
    },
    {
      title: 'Local Database Backup & Security Vault',
      category: 'Data Management',
      src: '/assets/zaad/screenshots/backup-modal.png',
      desc: 'One-click local SQLite database snapshot creation, backup verification, and automated archive export.'
    }
  ];

  const rolesData = {
    ADMIN: { 
      title: 'Executive Admin Dashboard', 
      desc: 'Strategic overview of daily/monthly sales volume, gross profit metrics, top accounts, average order values, and 1-click credit unblock overrides.' 
    },
    FINANCE: { 
      title: 'Finance & Receivables', 
      desc: 'Aging receivable tracking, monthly late-fee surcharge calculations, customer debt ledgers, and formal collection receipt vouchers.' 
    },
    WAREHOUSE: { 
      title: 'Logistics & Dispatch Queue', 
      desc: 'Price-blind item fulfillment and order packing queue, protecting commercial margin confidentiality for warehouse staff.' 
    },
    PURCHASING: { 
      title: 'Procurement & Reorder Engine', 
      desc: 'Real-time safety stock threshold alerts, automated reorder suggestions, and open vs. late inbound supplier purchase order tracking.' 
    },
    SALES: { 
      title: 'Sales Operations', 
      desc: 'Order intake pipeline with automated supermarket credit limit enforcement, grace-period checks, and customer status validation.' 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white transition-colors duration-300">
      
      {/* 🌟 Modern Navbar */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-purple-600 flex items-center justify-center font-black text-white text-sm sm:text-base shadow-md shadow-sky-500/20 shrink-0">
            GQ
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs sm:text-sm font-black tracking-tight text-slate-900 dark:text-white truncate">
                Gehad Qabel
              </span>
              <span className="text-[9px] sm:text-[10px] bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 px-1.5 sm:px-2 py-0.5 rounded-full font-bold border border-sky-200 dark:border-sky-800 whitespace-nowrap">
                Data Analyst | AI
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate hidden xs:block">Desktop &amp; Enterprise Systems</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Flagship Projects</a>
          <a href="#zaad" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">ZAAD POS</a>
          <a href="#emdad" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">EMDAD ERP</a>
          <a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Tech Stack</a>
          <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
        </nav>

        {/* Status Pill, Theme Toggle & CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open for Opportunities
          </span>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition-all flex items-center justify-center shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button 
            onClick={() => setIsCvModalOpen(true)}
            className="px-3 sm:px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 dark:text-white" />
            <span>CV</span>
          </button>
        </div>
      </header>

      {/* 🌟 1. HERO SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Hero Left: Bio & High Impact Headlines (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold shadow-sm">
            <Monitor className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span className="leading-tight">Building Reliable Desktop Applications &amp; Enterprise Business Systems</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400">Gehad Qabel</span>
            </h1>
            <p className="text-base sm:text-xl font-bold text-slate-700 dark:text-slate-200 leading-snug">
              Data Analyst | Python &amp; AI Enthusiast • Desktop &amp; ERP Developer
            </p>
          </div>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            I build reliable business management systems, Windows desktop applications, and database-driven software solutions. My experience includes developing offline-first Point of Sale systems, enterprise resource planning platforms, inventory management workflows, and secure business applications using modern web and desktop technologies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Explore Flagship Systems</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="/Gehad_Qabel_CV.pdf"
              download="Gehad_Qabel_CV.pdf"
              className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Download Full CV</span>
            </a>
          </div>

          {/* Core Architectural Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="p-3 bg-slate-100/60 dark:bg-slate-800/40 rounded-xl sm:bg-transparent sm:p-0">
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-mono block">Offline-First</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Windows Desktop Architecture</p>
            </div>
            <div className="p-3 bg-slate-100/60 dark:bg-slate-800/40 rounded-xl sm:bg-transparent sm:p-0">
              <span className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400 font-mono block">5 RBAC Roles</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Enterprise ERP Security</p>
            </div>
            <div className="p-3 bg-slate-100/60 dark:bg-slate-800/40 rounded-xl sm:bg-transparent sm:p-0">
              <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono block">Commercial</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Sold To First Retail Client</p>
            </div>
          </div>
        </div>

        {/* Hero Right: Framed Profile Container with Picture */}
        <div className="lg:col-span-5 relative flex justify-center w-full">
          
          <div className="relative w-full max-w-sm glass-card rounded-3xl p-5 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-2xl glass-card-hover text-center space-y-4 group">
            
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 opacity-25 dark:opacity-40 blur-xl -z-10 group-hover:opacity-45 dark:group-hover:opacity-60 transition-opacity duration-500"></div>

            {/* Profile Portrait Circular Frame with Blue-to-Purple Gradient */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full p-[3.5px] bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-500 shadow-xl shadow-indigo-500/25 transition-transform duration-500 ease-out group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/gehad_qabel.png" 
                  alt="Gehad Qabel" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Gehad Qabel</h3>
              <p className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-indigo-300 dark:to-purple-400 font-bold">
                Data Analyst | Python &amp; AI Enthusiast
              </p>
            </div>

            <div className="p-3.5 bg-slate-100/90 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2 text-slate-700 dark:text-slate-300 font-medium shadow-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Windows Desktop Application Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>ERP &amp; Business Management Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Database Architecture &amp; Data Integrity</span>
              </div>
            </div>

            {/* Directional Indicator */}
            <div className="pt-1 flex items-center justify-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400 arrow-animated">
              <span>View ZAAD POS &amp; EMDAD ERP Below</span>
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 2. FEATURED FLAGSHIP PROJECTS SECTION */}
      <section id="projects" className="bg-slate-100/70 dark:bg-slate-950/60 py-12 sm:py-20 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-950/80 px-3.5 py-1 rounded-full border border-sky-200 dark:border-sky-800">
              Verified Flagship Implementations
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Business-Focused Software Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Real-world systems engineered for offline retail continuity, enterprise distribution workflows, and relational database integrity.
            </p>
          </div>

          {/* ========================================================
              PROJECT 1: ZAAD POS (PRIMARY FLAGSHIP PROJECT)
          ======================================================== */}
          <div id="zaad" className="glass-card rounded-3xl p-5 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 sm:space-y-8">
            
            {/* Header & Commercial Milestone */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400 shrink-0" /> Windows Desktop Software
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" /> Commercial Milestone: Successfully sold to the first client
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white leading-snug">
                    ZAAD POS — Windows Desktop Retail Management System
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold mt-1">
                    Offline-First Point of Sale &amp; Retail Operations Platform
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
                  ZAAD POS is an offline-first Windows desktop retail management application designed to support supermarket and retail operations without requiring a continuous internet connection. The system integrates sales processing, inventory management, purchasing, customer and supplier accounts, returns, cashier shift management, and operational reporting into a unified desktop platform.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Electron.js</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">React.js</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">JavaScript</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">SQLite (better-sqlite3)</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Tailwind CSS</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Vite</span>
                </div>
              </div>

              {/* Action Buttons for Media */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => {
                    setSelectedScreenshotIndex(0);
                    setActiveMediaModal('SCREENSHOTS');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-all"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>View Screenshots ({zaadScreenshots.length})</span>
                </button>

                <button
                  onClick={() => setActiveMediaModal('VIDEO')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all border border-slate-800 dark:border-slate-700"
                >
                  <Play className="w-4 h-4 text-emerald-400" />
                  <span>Watch Demo Video</span>
                </button>

                <button
                  onClick={() => setActiveMediaModal('ARCHITECTURE')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Technical Overview</span>
                </button>
              </div>
            </div>

            {/* Key Features Cards (5 Pillars) */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Comprehensive Retail &amp; Supermarket Subsystems:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Pillar 1: POS */}
                <div className="p-5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-sm">
                    <ShoppingCart className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Point of Sale</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                    <li>Barcode scanning &amp; sales checkout workflows</li>
                    <li>Multiple payment methods (Cash, Card, Wallet)</li>
                    <li>Split payment handling on single ticket</li>
                    <li>Full and partial sales return processing</li>
                  </ul>
                </div>

                {/* Pillar 2: Inventory */}
                <div className="p-5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                    <Package className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Inventory Management</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                    <li>Product catalog and category taxonomy</li>
                    <li>Real-time stock movement &amp; transaction ledger</li>
                    <li>Purchase batch tracking with landed costs</li>
                    <li>Perishable item expiration-date tracking</li>
                  </ul>
                </div>

                {/* Pillar 3: Purchasing */}
                <div className="p-5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    <Banknote className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Purchasing &amp; Suppliers</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                    <li>Supplier purchase invoice intake</li>
                    <li>Supplier credit accounts and payment vouchers</li>
                    <li>Supplier return vouchers with stock reduction</li>
                    <li>Historical supply cost variation tracking</li>
                  </ul>
                </div>

                {/* Pillar 4: Customers & Finance */}
                <div className="p-5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                    <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Customers &amp; Financial Operations</span>
                  </div>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                    <li>Customer accounts and credit/receivable tracking</li>
                    <li>Debt collection receipts and customer history</li>
                    <li>Operating expense logging by business category</li>
                    <li>Customer purchasing trend visibility</li>
                  </ul>
                </div>

                {/* Pillar 5: Cashier & Admin */}
                <div className="p-5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2.5 shadow-sm sm:col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
                    <Key className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>Cashier Shifts &amp; Administration</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <ul className="space-y-1.5 list-disc pl-4">
                      <li>Cashier shift opening balances and handoffs</li>
                      <li>Blind cash reconciliation &amp; drawer variance audit</li>
                    </ul>
                    <ul className="space-y-1.5 list-disc pl-4">
                      <li>Role-based access permissions (Cashier vs Manager)</li>
                      <li>Operational daily Z-reports &amp; immutable audit records</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Architecture Diagram Visualization */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  Desktop System Architecture &amp; Data Flow
                </h4>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 self-start sm:self-auto">
                  Strictly Local Persistence
                </span>
              </div>

              {/* Diagram Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
                <div className="p-3 sm:p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 text-xs">
                  <span className="text-[10px] text-sky-400 font-mono block mb-1">Layer 1 • UI</span>
                  <strong className="text-white font-bold block text-xs sm:text-sm">React Frontend</strong>
                  <span className="text-[10px] text-slate-400">Vite + Tailwind</span>
                </div>
                <div className="p-3 sm:p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 text-xs">
                  <span className="text-[10px] text-sky-400 font-mono block mb-1">Layer 2 • Bridge</span>
                  <strong className="text-white font-bold block text-xs sm:text-sm">Electron IPC</strong>
                  <span className="text-[10px] text-slate-400">Context Isolation</span>
                </div>
                <div className="p-3 sm:p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 text-xs">
                  <span className="text-[10px] text-sky-400 font-mono block mb-1">Layer 3 • Node</span>
                  <strong className="text-white font-bold block text-xs sm:text-sm">Business Logic</strong>
                  <span className="text-[10px] text-slate-400">Transactions</span>
                </div>
                <div className="p-3 sm:p-3.5 bg-slate-800/80 rounded-xl border border-slate-700 text-xs">
                  <span className="text-[10px] text-emerald-400 font-mono block mb-1">Layer 4 • Storage</span>
                  <strong className="text-white font-bold block text-xs sm:text-sm">Local SQLite DB</strong>
                  <span className="text-[10px] text-slate-400">ACID SQLite Persistence</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Continuous offline operation without internet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Atomic database transactions for every sale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Secure local desktop application runtime</span>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================
              PROJECT 2: EMDAD ERP (SECOND FLAGSHIP PROJECT)
          ======================================================== */}
          <div id="emdad" className="glass-card rounded-3xl p-5 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 sm:space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-900 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-800 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400 shrink-0" /> Cloud Enterprise Platform
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    Live Demo Available
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white leading-snug">
                    EMDAD ERP — Enterprise Distribution Management Platform
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold mt-1">
                    B2B Food &amp; Wholesale Supply Chain Operating System
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
                  A business management platform designed to support food distribution operations through integrated sales, purchasing, warehouse, finance, and administrative workflows. The platform enforces database-level Row-Level Security (RLS) policies, automated credit risk controls, and comprehensive compliance audit logging.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Next.js 14</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">TypeScript</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Supabase (PostgreSQL RLS)</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Tailwind CSS</span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">Vercel</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full lg:w-auto">
                <a
                  href="https://emdad-erp-pjvy.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/GehadQabel/emdad-erp"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all border border-slate-800 dark:border-slate-700"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Interactive Role Tabs */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Explore 5 Role-Based Workspaces (RBAC):
              </h4>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {(['ADMIN', 'FINANCE', 'WAREHOUSE', 'PURCHASING', 'SALES'] as const).map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRolePreview(role)}
                    className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${selectedRolePreview === role ? 'bg-sky-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    {role} Workspace
                  </button>
                ))}
              </div>

              <div className="p-4 bg-slate-100/80 dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h5 className="text-sm font-bold text-slate-900 dark:text-white">{rolesData[selectedRolePreview].title}</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rolesData[selectedRolePreview].desc}</p>
              </div>
            </div>

            {/* Architecture Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block">🛡️ Supabase RLS Security</strong>
                <p className="text-slate-500 dark:text-slate-400">PostgreSQL Row-Level Security policies restricting data per user role.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block">💳 Supermarket Credit Risk Controls</strong>
                <p className="text-slate-500 dark:text-slate-400">Automated credit limit verification and overdue invoice order locking.</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block">📜 Immutable Compliance Audit Logging</strong>
                <p className="text-slate-500 dark:text-slate-400">Automated trigger logging with side-by-side JSON Diff before/after states.</p>
              </div>
            </div>
          </div>

          {/* ========================================================
              PROJECT 3: SUPERMARKET PROTOTYPE REFERENCE (SEPARATE PROJECT)
          ======================================================== */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[11px] font-bold">
                  Reference Architecture
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Web POS Prototype</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Supermarket Web POS Prototype
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                An exploratory web-based cashier station built with Next.js 14 and @libsql/client SQLite driver, demonstrating barcode resolution and local receipt rendering in browser environments. (Kept distinct from the full-featured desktop ZAAD POS).
              </p>
            </div>
            <div className="lg:col-span-4 p-4 bg-slate-100 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1 font-mono">
              <div className="flex justify-between"><span>Framework:</span><strong className="text-slate-900 dark:text-white">Next.js 14</strong></div>
              <div className="flex justify-between"><span>Driver:</span><strong className="text-slate-900 dark:text-white">@libsql/client</strong></div>
              <div className="flex justify-between"><span>Status:</span><span className="text-slate-700 dark:text-slate-300">Prototype Reference</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* 🌟 6. TECHNICAL SKILLS & SOFTWARE ENGINEERING EXPERTISE */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Technical Skills &amp; Software Engineering Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Organized competencies verified through working Windows desktop, ERP, and database-driven implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Category 1: Desktop & Frontend Development */}
          <div className="bg-white dark:bg-slate-800/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 flex items-center justify-center">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Desktop &amp; Frontend Development</h3>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Electron.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> React.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> JavaScript</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> TypeScript</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Next.js</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Tailwind CSS</li>
            </ul>
          </div>

          {/* Category 2: Databases & Data Management */}
          <div className="bg-white dark:bg-slate-800/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Databases &amp; Data Management</h3>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> SQLite (better-sqlite3)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> PostgreSQL</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Supabase</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> SQL Schema &amp; Migration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Relational Database Design</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> ACID Data Integrity</li>
            </ul>
          </div>

          {/* Category 3: Enterprise Application Development */}
          <div className="bg-white dark:bg-slate-800/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Enterprise Application Development</h3>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> ERP Systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Point of Sale Systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Inventory Management</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Business Logic Architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Role-Based Access Control</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Transaction Management</li>
            </ul>
          </div>

          {/* Category 4: Development Tools & Practices */}
          <div className="bg-white dark:bg-slate-800/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Development Tools &amp; Practices</h3>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 font-medium">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Git &amp; GitHub</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Debugging &amp; Logging</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Automated Testing (Vitest)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Software Architecture</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> API Integration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Electron Application Packaging</li>
            </ul>
          </div>

        </div>

        {/* Secondary Verified Experience: Data & Automation */}
        <div className="p-5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white">
            <Terminal className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Additional Verified Data &amp; Automation Expertise:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/80 rounded-lg text-slate-700 dark:text-slate-200 font-semibold">Python (Pandas, SQL Analytics)</span>
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/80 rounded-lg text-slate-700 dark:text-slate-200 font-semibold">Google BigQuery</span>
            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/80 rounded-lg text-slate-700 dark:text-slate-200 font-semibold">Google Apps Script &amp; Automation</span>
          </div>
        </div>
      </section>

      {/* 🌟 9. INTERACTIVE CV MODAL (REAL PDF EMBEDDED) */}
      {isCvModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-4xl w-full shadow-2xl space-y-4 max-h-[95vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <div className="pr-2">
                <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                  Gehad Qabel — Official Curriculum Vitae
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                  Data Analyst &amp; Software Developer • 2 Pages Official Resume
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/Gehad_Qabel_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold items-center gap-1.5 border border-slate-200 dark:border-slate-700"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in New Tab</span>
                </a>
                <a
                  href="/Gehad_Qabel_CV.pdf"
                  download="Gehad_Qabel_CV.pdf"
                  className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-sky-500/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button 
                  onClick={() => setIsCvModalOpen(false)}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 min-h-[60vh] sm:min-h-[70vh] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-inner">
              <iframe 
                src="/Gehad_Qabel_CV.pdf#toolbar=1" 
                className="w-full h-full min-h-[60vh] sm:min-h-[70vh]"
                title="Gehad Qabel CV"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400 shrink-0">
              <span className="text-[11px] sm:text-xs text-center sm:text-left">
                Verified official CV • Computer Science (EELU) • Cairo, Egypt
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href="/Gehad_Qabel_CV.pdf"
                  download="Gehad_Qabel_CV.pdf"
                  className="text-center px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs"
                >
                  Download (.pdf)
                </a>
                <button
                  onClick={() => setIsCvModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🌟 ZAAD POS MEDIA GALLERIES MODAL */}
      {activeMediaModal === 'SCREENSHOTS' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-4xl w-full shadow-2xl space-y-3 sm:space-y-4 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="pr-2">
                <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  ZAAD POS Screenshots
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                  Verified Windows desktop interface captures
                </p>
              </div>
              <button 
                onClick={() => setActiveMediaModal('NONE')}
                className="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Active Screenshot Display */}
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-950 aspect-[16/9] flex items-center justify-center shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={zaadScreenshots[selectedScreenshotIndex].src} 
                  alt={zaadScreenshots[selectedScreenshotIndex].title} 
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-950/80 px-2 py-0.5 rounded mr-2">
                    {zaadScreenshots[selectedScreenshotIndex].category}
                  </span>
                  <strong className="text-slate-900 dark:text-white font-bold">{zaadScreenshots[selectedScreenshotIndex].title}</strong>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">{zaadScreenshots[selectedScreenshotIndex].desc}</p>
                </div>
                <span className="text-xs text-slate-400 font-mono font-bold shrink-0">
                  {selectedScreenshotIndex + 1} / {zaadScreenshots.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1">
              {zaadScreenshots.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedScreenshotIndex(idx)}
                  className={`w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${selectedScreenshotIndex === idx ? 'border-sky-600 dark:border-sky-400 scale-105 shadow-md' : 'border-slate-200 dark:border-slate-700 opacity-60 hover:opacity-100'}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.title} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🌟 ZAAD POS VIDEO DEMO MODAL */}
      {activeMediaModal === 'VIDEO' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-400" />
                  ZAAD POS Desktop Demonstration
                </h3>
                <p className="text-xs text-slate-400">
                  Demonstration of inventory purchase intake and batch registration workflow
                </p>
              </div>
              <button 
                onClick={() => setActiveMediaModal('NONE')}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video flex items-center justify-center">
              <video 
                controls 
                autoPlay 
                className="w-full h-full"
                src="/assets/zaad/videos/purchase-receiving.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
              <span>Workflow: Real-time purchase batch registration with supplier ledger update</span>
              <button 
                onClick={() => setActiveMediaModal('NONE')} 
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🌟 TECHNICAL OVERVIEW MODAL */}
      {activeMediaModal === 'ARCHITECTURE' && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  ZAAD POS Technical &amp; Architectural Overview
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Engineering breakdown of offline desktop execution</p>
              </div>
              <button 
                onClick={() => setActiveMediaModal('NONE')}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">1. Offline-First Continuity &amp; Zero Network Dependence</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The cashier station must remain 100% operational regardless of internet downtime or local LAN disruptions. The system executes against a local embedded SQLite database via <code>better-sqlite3</code>, ensuring zero latency barcode queries and guaranteed invoice generation during outages.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">2. Context-Isolated IPC Architecture</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The React UI runs in a sandboxed renderer without direct Node.js access. All file system, SQLite, and printing operations are routed through Electron&apos;s inter-process communication (IPC) preload bridge using strict channel whitelisting, preventing remote code execution vectors.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">3. Transactional Integrity &amp; Ledger Calculations</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Sales checkouts, shift openings, supplier payments, and customer credit collections run inside explicit SQLite transactions. If printer paper jams or an unhandled hardware error occurs, rollback mechanisms ensure balances and inventory counters remain mathematically consistent.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setActiveMediaModal('NONE')}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-bold text-xs"
              >
                Close Technical Overview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🌟 10. CONTACT SECTION */}
      <footer id="contact" className="bg-slate-900 dark:bg-black text-white py-16 px-4 sm:px-8 border-t border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-black text-white">Let&apos;s Build Reliable Business Software</h3>
            <p className="text-xs text-slate-400 max-w-md">
              Open to opportunities involving Windows desktop applications, ERP platforms, retail management systems, and database-driven business solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
            <a 
              href="https://github.com/GehadQabel" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:gehad.qabel@example.com" 
              className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-2 shadow-md shadow-sky-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact via Email</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Gehad Qabel. Software Developer specializing in Windows Desktop Applications &amp; ERP Systems.
        </div>
      </footer>

    </div>
  );
}
