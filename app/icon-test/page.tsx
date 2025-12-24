'use client';

import React, { useState } from 'react';

// ============================================
// PROFESSIONAL BASKETBALL ICONS - ITERATION 4
// 12 Approved (Kept), 20 Redesigned (New)
// ============================================

// ✅ APPROVED - Basketball Court
const CourtIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="0.5" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <circle cx="12" cy="12" r="2.5" />
    <rect x="2" y="8" width="4" height="8" />
    <path d="M6 8 A2.5 2.5 0 0 1 6 16" />
    <rect x="18" y="8" width="4" height="8" />
    <path d="M18 8 A2.5 2.5 0 0 0 18 16" />
  </svg>
);

// 🔄 REDESIGNED - Basketball Hoop (Professional front view - pixel perfect)
const HoopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Backboard */}
    <rect x="4" y="2" width="16" height="8" rx="0.5" strokeWidth="2" />
    <rect x="8" y="4" width="8" height="5" rx="0.5" />
    {/* Rim */}
    <ellipse cx="12" cy="12" rx="5.5" ry="2" strokeWidth="2" />
    {/* Net strings - realistic */}
    <path d="M6.5 13 L7.5 20" strokeWidth="1.2" />
    <path d="M9 13.5 L9.5 20.5" strokeWidth="1.2" />
    <path d="M12 14 L12 21" strokeWidth="1.2" />
    <path d="M15 13.5 L14.5 20.5" strokeWidth="1.2" />
    <path d="M17.5 13 L16.5 20" strokeWidth="1.2" />
    {/* Net horizontal bands */}
    <path d="M7 16 Q12 17.5 17 16" strokeWidth="1" strokeOpacity="0.6" />
    <path d="M7.5 18.5 Q12 20 16.5 18.5" strokeWidth="1" strokeOpacity="0.6" />
  </svg>
);

// 🔄 REDESIGNED - Basketball (Perfect Spalding seam pattern)
const BallIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    {/* Vertical center seam */}
    <path d="M12 2 C8 6, 8 18, 12 22" strokeWidth="1.5" />
    <path d="M12 2 C16 6, 16 18, 12 22" strokeWidth="1.5" />
    {/* Horizontal seam */}
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.5" />
    {/* Curved seams - perfect Spalding pattern */}
    <path d="M2 12 C6 8, 18 8, 22 12" strokeWidth="1.5" />
    <path d="M2 12 C6 16, 18 16, 22 12" strokeWidth="1.5" />
  </svg>
);

// 🔄 REDESIGNED - Ball & Hoop (Perfect Swish - professional)
const BallHoopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Backboard hint */}
    <rect x="6" y="2" width="12" height="6" rx="0.5" strokeOpacity="0.3" />
    {/* Rim */}
    <ellipse cx="12" cy="10" rx="6" ry="1.8" strokeWidth="2" />
    {/* Net */}
    <path d="M6 11 L7 18 L12 20 L17 18 L18 11" strokeWidth="1.2" />
    <path d="M8 11.5 L8.5 18" strokeWidth="1" strokeOpacity="0.6" />
    <path d="M12 12 L12 19" strokeWidth="1" strokeOpacity="0.6" />
    <path d="M16 11.5 L15.5 18" strokeWidth="1" strokeOpacity="0.6" />
    {/* Basketball going through */}
    <circle cx="12" cy="15" r="4" strokeWidth="1.5" />
    <path d="M12 11 C10 12, 10 18, 12 19" strokeWidth="1.5" />
    <path d="M12 11 C14 12, 14 18, 12 19" strokeWidth="1.5" />
    <line x1="8" y1="15" x2="16" y2="15" strokeWidth="1.5" />
    {/* Motion lines */}
    <path d="M10 7 L9 9" strokeDasharray="1 2" strokeOpacity="0.4" />
    <path d="M14 7 L15 9" strokeDasharray="1 2" strokeOpacity="0.4" />
  </svg>
);

// 🔄 REDESIGNED - Player Shooting (Professional NBA silhouette)
const ShootingPlayerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Head */}
    <circle cx="9" cy="4" r="2.2" />
    {/* Body */}
    <line x1="9" y1="6.2" x2="9" y2="11" strokeWidth="2" />
    {/* Shooting arm - extended */}
    <path d="M9 8 L12 6 L16 2" strokeWidth="2.5" />
    {/* Support arm */}
    <path d="M9 8 L5 9" strokeWidth="2" />
    {/* Basketball */}
    <circle cx="18" cy="1.5" r="2.2" strokeWidth="2" />
    <path d="M18 -0.7 C16.5 0.3, 16.5 2.7, 18 3.7" strokeWidth="1.5" />
    <path d="M18 -0.7 C19.5 0.3, 19.5 2.7, 18 3.7" strokeWidth="1.5" />
    <line x1="15.8" y1="1.5" x2="20.2" y2="1.5" strokeWidth="1.5" />
    {/* Legs - shooting stance */}
    <path d="M9 11 L6 16 L5 21" strokeWidth="2" />
    <path d="M9 11 L12 16 L13 21" strokeWidth="2" />
  </svg>
);

// 🔄 REDESIGNED - Player Dunking (Jumpman style - professional)
const DunkingPlayerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Rim */}
    <rect x="16" y="2" width="6" height="3" rx="0.5" strokeOpacity="0.3" />
    <ellipse cx="19" cy="6.5" rx="3" ry="1" strokeWidth="2" />
    {/* Head */}
    <circle cx="11" cy="5" r="2" />
    {/* Body leaning forward */}
    <path d="M11 7 L14 11" strokeWidth="2.5" />
    {/* Dunking arm extended */}
    <path d="M13 9 L18 7 L20 4" strokeWidth="2.5" />
    {/* Other arm */}
    <path d="M11 7 L7 9" strokeWidth="2" />
    {/* Legs - dynamic spread */}
    <path d="M14 11 L12 17 L9 21" strokeWidth="2" />
    <path d="M14 11 L17 15 L19 19" strokeWidth="2" />
    {/* Ball at rim */}
    <circle cx="20" cy="4" r="2" strokeWidth="2" />
    <path d="M20 2 C19 3, 19 5, 20 6" strokeWidth="1.5" />
    <path d="M20 2 C21 3, 21 5, 20 6" strokeWidth="1.5" />
    <line x1="18" y1="4" x2="22" y2="4" strokeWidth="1.5" />
  </svg>
);

// ✅ APPROVED - Video Camera
const VideoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="14" height="14" rx="2" />
    <circle cx="9" cy="12" r="3" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <path d="M16 9 L22 5 L22 19 L16 15" />
  </svg>
);

// 🔄 REDESIGNED - Shot Trajectory (Perfect physics parabola)
const TrajectoryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Ground line */}
    <line x1="1" y1="22" x2="23" y2="22" strokeOpacity="0.3" strokeWidth="1" />
    {/* Perfect parabolic arc */}
    <path d="M3 20 Q12 2 21 20" strokeDasharray="3 3" strokeWidth="2.5" />
    {/* Ball at start */}
    <circle cx="3" cy="20" r="2.5" strokeWidth="1.5" />
    <path d="M3 17.5 C2 18.5, 2 21.5, 3 22.5" strokeWidth="1.5" />
    <path d="M3 17.5 C4 18.5, 4 21.5, 3 22.5" strokeWidth="1.5" />
    <line x1="0.5" y1="20" x2="5.5" y2="20" strokeWidth="1.5" />
    {/* Peak point */}
    <circle cx="12" cy="2" r="1.5" fill="currentColor" fillOpacity="0.3" />
    {/* Target hoop */}
    <rect x="19" y="18" width="3" height="1.5" rx="0.5" strokeOpacity="0.5" />
    <ellipse cx="20.5" cy="21" rx="2" ry="0.8" strokeWidth="1.5" />
  </svg>
);

// 🔄 REDESIGNED - Joint Angles (Professional biomechanics diagram)
const AnglesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Upper arm */}
    <line x1="5" y1="18" x2="12" y2="12" strokeWidth="2.5" />
    {/* Lower arm */}
    <line x1="12" y1="12" x2="19" y2="18" strokeWidth="2.5" />
    {/* Joint center */}
    <circle cx="12" cy="12" r="2.5" strokeWidth="1.5" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    {/* Angle arc */}
    <path d="M8 15 A6 6 0 0 1 16 15" strokeWidth="2" />
    {/* Angle measurement */}
    <text x="10.5" y="7" fontSize="5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold">90°</text>
    {/* Reference lines */}
    <line x1="12" y1="6" x2="12" y2="9" strokeWidth="1" strokeOpacity="0.3" />
    <line x1="12" y1="12" x2="12" y2="15" strokeWidth="1" strokeOpacity="0.3" />
  </svg>
);

// 🔄 REDESIGNED - Release Point (Professional hand/wrist detail)
const ReleasePointIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Height measurement ruler */}
    <line x1="2" y1="22" x2="2" y2="2" strokeDasharray="2 2" strokeOpacity="0.4" strokeWidth="1.5" />
    <line x1="1" y1="22" x2="3" y2="22" strokeWidth="2" />
    <line x1="1" y1="5" x2="3" y2="5" strokeWidth="2" />
    {/* Height arrow */}
    <path d="M2 3 L1 5 M2 3 L3 5" strokeWidth="1.5" />
    {/* Arm */}
    <path d="M16 22 V13 L12 9" strokeWidth="2.5" />
    {/* Hand/wrist */}
    <path d="M12 9 L9 10 L8 7" strokeWidth="2" />
    <circle cx="12" cy="9" r="1" fill="currentColor" />
    {/* Basketball being released */}
    <circle cx="6" cy="4" r="3.5" strokeWidth="2" />
    <path d="M6 0.5 C4 2, 4 6, 6 7.5" strokeWidth="1.5" />
    <path d="M6 0.5 C8 2, 8 6, 6 7.5" strokeWidth="1.5" />
    <line x1="2.5" y1="4" x2="9.5" y2="4" strokeWidth="1.5" />
    {/* Release motion */}
    <path d="M10 7 L9 5" strokeDasharray="1 2" strokeOpacity="0.5" />
    <path d="M11 6 L10 4" strokeDasharray="1 2" strokeOpacity="0.5" />
  </svg>
);

// 🔄 REDESIGNED - AI Brain (Professional neural network)
const AIBrainIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Brain outline */}
    <path d="M4 10 C4 6 7 3 12 3 C17 3 20 6 20 10 C20 11 20 13 19 14 C20 16 19 18 17 19 L7 19 C5 18 4 16 4 14 C4 13 4 11 4 10" strokeWidth="2" />
    {/* Neural network nodes */}
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="8" cy="16" r="1.5" fill="currentColor" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    {/* Connections */}
    <line x1="8" y1="8" x2="12" y2="12" strokeWidth="1.2" />
    <line x1="16" y1="8" x2="12" y2="12" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="8" y2="16" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="16" y2="16" strokeWidth="1.2" />
    <line x1="8" y1="8" x2="8" y2="16" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="16" y1="8" x2="16" y2="16" strokeWidth="1.2" strokeOpacity="0.5" />
  </svg>
);

// 🔄 REDESIGNED - Progress Chart (Professional area chart)
const ChartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Axes */}
    <line x1="3" y1="3" x2="3" y2="21" strokeWidth="2" />
    <line x1="3" y1="21" x2="21" y2="21" strokeWidth="2" />
    {/* Area fill */}
    <path d="M3 21 L5 17 L9 15 L13 10 L17 7 L21 5 V21 Z" fill="currentColor" fillOpacity="0.15" />
    {/* Line */}
    <path d="M3 21 L5 17 L9 15 L13 10 L17 7 L21 5" strokeWidth="2.5" />
    {/* Data points */}
    <circle cx="5" cy="17" r="1.5" fill="currentColor" />
    <circle cx="9" cy="15" r="1.5" fill="currentColor" />
    <circle cx="13" cy="10" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    <circle cx="21" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

// ✅ APPROVED - Trophy
const TrophyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 4 H16 V10 C16 13 13 15 12 15 C11 15 8 13 8 10 V4 Z" />
    <path d="M8 6 H6 C4 6 4 9 6 9 H8" />
    <path d="M16 6 H18 C20 6 20 9 18 9 H16" />
    <path d="M12 15 V19" />
    <path d="M8 22 H16 L15 19 H9 L8 22" />
    <path d="M14 6 L12 11" strokeOpacity="0.3" />
  </svg>
);

// 🔄 REDESIGNED - Scoreboard (Professional digital display)
const ScoreboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Frame */}
    <rect x="1" y="4" width="22" height="16" rx="1.5" strokeWidth="2.5" />
    {/* Divider */}
    <line x1="12" y1="4" x2="12" y2="20" strokeWidth="2" />
    {/* Score displays - LED style */}
    <rect x="2.5" y="7" width="8" height="11" rx="0.5" fill="currentColor" fillOpacity="0.08" />
    <rect x="13.5" y="7" width="8" height="11" rx="0.5" fill="currentColor" fillOpacity="0.08" />
    {/* Score numbers - bold */}
    <text x="3.5" y="15" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="900">24</text>
    <text x="14.5" y="15" fontSize="9" fill="currentColor" fontFamily="monospace" fontWeight="900">18</text>
    {/* Timer at top */}
    <rect x="8" y="1" width="8" height="3" rx="0.5" strokeWidth="1.5" />
    <text x="9" y="3.2" fontSize="2.5" fill="currentColor" fontFamily="monospace" fontWeight="bold">4:32</text>
  </svg>
);

// 🔄 REDESIGNED - Jersey (Professional NBA tank top)
const JerseyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Jersey outline */}
    <path d="M8 3 L6 6 L4 8 L4 11 L6 11 L6 22 L18 22 L18 11 L20 11 L20 8 L18 6 L16 3" strokeWidth="2.5" />
    {/* Sleeves */}
    <path d="M6 6 L4 8 L4 11 L6 11" fillOpacity="0.1" fill="currentColor" />
    <path d="M18 6 L20 8 L20 11 L18 11" fillOpacity="0.1" fill="currentColor" />
    {/* Collar */}
    <path d="M10 3 Q12 6 14 3" strokeWidth="2" />
    <circle cx="12" cy="5" r="1.5" fillOpacity="0.1" fill="currentColor" />
    {/* Number */}
    <text x="9.5" y="17" fontSize="7" fill="currentColor" fontFamily="sans-serif" fontWeight="900">23</text>
    {/* Side seams */}
    <line x1="6" y1="11" x2="18" y2="11" strokeOpacity="0.2" />
  </svg>
);

// 🔄 REDESIGNED - Sneaker (Professional Jordan-style high top)
const SneakerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Sole */}
    <path d="M2 20 L22 20 L22 18 L20 17 L2 17 Z" fill="currentColor" fillOpacity="0.15" />
    <line x1="2" y1="20" x2="22" y2="20" strokeWidth="2.5" />
    {/* Upper shoe */}
    <path d="M2 17 L2 12 L5 9 L10 9 L13 7 L17 7 L19 9 L20 12 L20 17" strokeWidth="2" />
    {/* High-top ankle */}
    <path d="M17 7 L18 5 L20 7 L20 10" strokeWidth="2" />
    {/* Swoosh detail */}
    <path d="M6 13 Q10 11 15 12" strokeWidth="1.8" />
    {/* Laces */}
    <line x1="9" y1="11" x2="15" y2="11" strokeWidth="1.5" strokeOpacity="0.6" />
    <line x1="10" y1="9" x2="10" y2="13" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="12" y1="8" x2="12" y2="13" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="14" y1="9" x2="14" y2="13" strokeWidth="1.2" strokeOpacity="0.5" />
    {/* Sole treads */}
    <line x1="4" y1="18.5" x2="6" y2="18.5" strokeOpacity="0.4" />
    <line x1="8" y1="18.5" x2="10" y2="18.5" strokeOpacity="0.4" />
    <line x1="12" y1="18.5" x2="14" y2="18.5" strokeOpacity="0.4" />
    <line x1="16" y1="18.5" x2="18" y2="18.5" strokeOpacity="0.4" />
  </svg>
);

// 🔄 REDESIGNED - Timer (Professional Stopwatch)
const TimerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" strokeWidth="2" />
    <path d="M12 9 V13 L15 15" strokeWidth="2" />
    <path d="M10 2 H14" strokeWidth="2" />
    <path x1="12" y1="2" x2="12" y2="5" />
    <circle cx="12" cy="13" r="1" fill="currentColor" />
  </svg>
);

// ✅ APPROVED - Target
const TargetIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>
);

// ✅ APPROVED - Clipboard
const ClipboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="19" rx="1" />
    <path d="M8 1 L8 4 L16 4 L16 1" />
    <rect x="9" y="1" width="6" height="3" rx="0.5" />
    <line x1="7" y1="9" x2="12" y2="9" />
    <line x1="14" y1="9" x2="17" y2="9" />
    <line x1="7" y1="12" x2="12" y2="12" />
    <line x1="14" y1="12" x2="17" y2="12" />
    <line x1="7" y1="15" x2="12" y2="15" />
    <line x1="14" y1="15" x2="17" y2="15" />
    <line x1="7" y1="18" x2="12" y2="18" />
    <line x1="14" y1="18" x2="17" y2="18" />
  </svg>
);

// 🔄 REDESIGNED - Medal (Professional achievement medal)
const MedalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Ribbon */}
    <path d="M8 2 L7 11 L12 9 L17 11 L16 2" strokeWidth="2.5" />
    <path d="M8 2 L10 2 L11 9" fillOpacity="0.1" fill="currentColor" />
    <path d="M14 2 L16 2 L13 9" fillOpacity="0.1" fill="currentColor" />
    {/* Medal circle */}
    <circle cx="12" cy="17" r="6" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
    {/* Star in center */}
    <path d="M12 13 L12.6 15 L15 15.2 L13.2 16.5 L13.8 19 L12 17.8 L10.2 19 L10.8 16.5 L9 15.2 L11.4 15 Z" fill="currentColor" />
    {/* Medal rim detail */}
    <circle cx="12" cy="17" r="5" strokeOpacity="0.2" />
  </svg>
);

// 🔄 REDESIGNED - Playbook (Professional coaching board)
const PlaybookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Board frame */}
    <rect x="2" y="2" width="20" height="20" rx="1.5" strokeWidth="2.5" />
    {/* Court outline */}
    <rect x="5" y="5" width="14" height="16" rx="0.5" strokeOpacity="0.3" />
    <line x1="12" y1="5" x2="12" y2="21" strokeOpacity="0.3" />
    {/* X players */}
    <path d="M6 7 L8 9 M8 7 L6 9" strokeWidth="2.5" />
    <path d="M16 7 L18 9 M18 7 L16 9" strokeWidth="2.5" />
    {/* O players */}
    <circle cx="7" cy="17" r="2" strokeWidth="2.5" />
    <circle cx="17" cy="17" r="2" strokeWidth="2.5" />
    <circle cx="12" cy="13" r="2" strokeWidth="2.5" />
    {/* Movement arrows */}
    <path d="M9.5 17 L10.5 13" strokeDasharray="2 2" strokeWidth="1.5" />
    <path d="M14.5 13 L15.5 17" strokeDasharray="2 2" strokeWidth="1.5" />
    <path d="M12 11 L12 7" strokeDasharray="2 2" strokeWidth="1.5" />
    {/* Arrow heads */}
    <path d="M10.5 13 L9 12 L9 14" fill="currentColor" />
    <path d="M15.5 13 L17 12 L17 14" fill="currentColor" />
    <path d="M12 7 L11 8.5 L13 8.5" fill="currentColor" />
  </svg>
);

// 🔄 REDESIGNED - Whistle (Professional referee whistle)
const WhistleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Whistle body */}
    <ellipse cx="15" cy="14" rx="7" ry="5" strokeWidth="2.5" />
    {/* Inner detail */}
    <ellipse cx="15" cy="14" rx="5" ry="3.5" strokeOpacity="0.3" />
    {/* Mouthpiece */}
    <path d="M8 14 L4 13 L4 11 L8 12" strokeWidth="2.5" />
    {/* Air hole */}
    <circle cx="20" cy="14" r="1.5" fill="currentColor" />
    {/* Lanyard ring */}
    <circle cx="4" cy="8" r="2.5" strokeWidth="2" />
    <line x1="4" y1="10.5" x2="4" y2="11" strokeWidth="2" />
    {/* Sound waves */}
    <path d="M21 11 Q23 9 21 7" strokeWidth="2" />
    <path d="M22 12 Q25 9 22 6" strokeWidth="2" />
    <path d="M23 13 Q27 9 23 5" strokeWidth="2" strokeOpacity="0.6" />
  </svg>
);

// 🔄 REDESIGNED - Checkmark (Clean UI Check)
const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 L9 17 L4 12" />
  </svg>
);

// ✅ APPROVED - Star
const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18.5 21 L12 16.5 L5.5 21 L8 13.5 L2 9 L9.5 9 Z" />
  </svg>
);

// ✅ APPROVED - Star Filled
const StarFilledIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18.5 21 L12 16.5 L5.5 21 L8 13.5 L2 9 L9.5 9 Z" strokeLinejoin="round" />
  </svg>
);

// 🔄 REDESIGNED - Arrow Right (Professional Chevron)
const ArrowRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18 L15 12 L9 6" />
  </svg>
);

// ✅ APPROVED - Upload
const UploadIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16 C2 16 2 10 6 10 C6 6 10 4 14 6 C18 4 22 8 20 12 C24 14 22 18 18 18 L6 18" />
    <path d="M12 12 L12 22" />
    <path d="M8 16 L12 12 L16 16" />
  </svg>
);

// ✅ APPROVED - Lightning
const LightningIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 L13 2 Z" />
  </svg>
);

// ✅ APPROVED - Shield
const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L4 6 L4 12 C4 17 8 21 12 22 C16 21 20 17 20 12 L20 6 Z" />
    <path d="M8 12 L11 15 L16 9" strokeWidth="2" />
  </svg>
);

// ✅ APPROVED - Compare
const CompareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <path d="M16 10 L18 12 L16 14" />
    <path d="M8 10 L6 12 L8 14" />
  </svg>
);

// 🔄 REDESIGNED - Badge (Achievement Shield)
const BadgeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 L12 2 Z" strokeWidth="2" />
    <path d="M12 8 L13 10 H15 L13.5 11.5 L14 13.5 L12 12.5 L10 13.5 L10.5 11.5 L9 10 H11 L12 8 Z" fill="currentColor" />
  </svg>
);

// ✅ APPROVED - Scroll
const ScrollIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="18" rx="5" />
    <line x1="12" y1="6" x2="12" y2="10" />
    <path d="M8 22 L12 20 L16 22" />
  </svg>
);

// Icon data with selection state
interface IconData {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  approved?: boolean;
}

const allIcons: IconData[] = [
  { id: 'court', name: 'Basketball Court', icon: CourtIcon, description: 'Top-down court view', approved: true },
  { id: 'hoop', name: 'Basketball Hoop', icon: HoopIcon, description: 'Front view geometric' },
  { id: 'ball', name: 'Basketball', icon: BallIcon, description: 'Spalding classic curves' },
  { id: 'ballhoop', name: 'Ball & Hoop', icon: BallHoopIcon, description: 'Perfect swish' },
  { id: 'shooting', name: 'Player Shooting', icon: ShootingPlayerIcon, description: 'NBA jump shot' },
  { id: 'dunking', name: 'Player Dunking', icon: DunkingPlayerIcon, description: 'Jumpman silhouette' },
  { id: 'video', name: 'Video Camera', icon: VideoIcon, description: 'Video recording', approved: true },
  { id: 'trajectory', name: 'Shot Trajectory', icon: TrajectoryIcon, description: 'Physics parabola' },
  { id: 'angles', name: 'Joint Angles', icon: AnglesIcon, description: 'Precise biomechanics' },
  { id: 'release', name: 'Release Point', icon: ReleasePointIcon, description: 'Wrist flick detail' },
  { id: 'ai', name: 'AI Brain', icon: AIBrainIcon, description: 'Modern neural core' },
  { id: 'chart', name: 'Progress Chart', icon: ChartIcon, description: 'SaaS area chart' },
  { id: 'trophy', name: 'Trophy', icon: TrophyIcon, description: 'Elegant cup shape', approved: true },
  { id: 'scoreboard', name: 'Scoreboard', icon: ScoreboardIcon, description: 'Stadium style' },
  { id: 'jersey', name: 'Jersey', icon: JerseyIcon, description: 'NBA tank top' },
  { id: 'sneaker', name: 'Sneaker', icon: SneakerIcon, description: 'Jordan 1 silhouette' },
  { id: 'timer', name: 'Timer', icon: TimerIcon, description: 'Professional stopwatch', approved: true },
  { id: 'target', name: 'Target', icon: TargetIcon, description: 'Accuracy bullseye', approved: true },
  { id: 'clipboard', name: 'Clipboard', icon: ClipboardIcon, description: 'Stats sheet', approved: true },
  { id: 'medal', name: 'Medal', icon: MedalIcon, description: 'Clean ribbon medal' },
  { id: 'playbook', name: 'Playbook', icon: PlaybookIcon, description: "Coaching board" },
  { id: 'whistle', name: 'Whistle', icon: WhistleIcon, description: 'Fox 40 pro' },
  { id: 'check', name: 'Checkmark', icon: CheckIcon, description: 'Clean UI check', approved: true },
  { id: 'star', name: 'Star', icon: StarIcon, description: 'Rating star', approved: true },
  { id: 'starfilled', name: 'Star Filled', icon: StarFilledIcon, description: 'Solid star', approved: true },
  { id: 'arrow', name: 'Arrow Right', icon: ArrowRightIcon, description: 'Professional chevron', approved: true },
  { id: 'upload', name: 'Upload', icon: UploadIcon, description: 'Cloud upload', approved: true },
  { id: 'lightning', name: 'Lightning', icon: LightningIcon, description: 'Solid bolt', approved: true },
  { id: 'shield', name: 'Shield', icon: ShieldIcon, description: 'Security check', approved: true },
  { id: 'compare', name: 'Compare', icon: CompareIcon, description: 'Split screen', approved: true },
  { id: 'badge', name: 'Badge', icon: BadgeIcon, description: 'Achievement shield', approved: true },
  { id: 'scroll', name: 'Scroll', icon: ScrollIcon, description: 'Scroll indicator', approved: true },
];

export default function IconTestPage() {
  const [selectedIcons, setSelectedIcons] = useState<Set<string>>(
    new Set(allIcons.filter(i => i.approved).map(i => i.id))
  );

  const toggleIcon = (id: string) => {
    setSelectedIcons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    setSelectedIcons(new Set(allIcons.map(i => i.id)));
  };

  const deselectAll = () => {
    setSelectedIcons(new Set());
  };

  const approvedCount = selectedIcons.size;
  const needsWorkCount = allIcons.length - approvedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Icon Review - Iteration 5 (Final Professional)
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-2">
            ✅ 16 icons approved (Kept) • 🔄 16 icons redesigned (New)
          </p>
          <p className="text-slate-300 text-sm mb-6">
            Professional pixel-perfect icons based on industry-standard references.
          </p>
          
          {/* Status Bar */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
              <CheckIcon className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">{approvedCount} Approved</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-lg border border-red-500/30">
              <span className="text-red-400 font-semibold">{needsWorkCount} Need Work</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={selectAll}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium transition-colors"
            >
              Select All
            </button>
            <button 
              onClick={deselectAll}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors"
            >
              Deselect All
            </button>
          </div>
        </div>

        {/* Icon Grid with Checkboxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-12">
          {allIcons.map(({ id, name, icon: Icon, description, approved }) => {
            const isSelected = selectedIcons.has(id);
            const wasApproved = approved === true;
            return (
              <div
                key={id}
                onClick={() => toggleIcon(id)}
                className={`
                  relative cursor-pointer flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200
                  ${isSelected 
                    ? 'bg-emerald-500/10 border-emerald-500/50 hover:border-emerald-400' 
                    : 'bg-slate-800/30 border-slate-700/30 hover:border-orange-500/50 hover:bg-slate-800/60'
                  }
                `}
              >
                {/* Status badge */}
                {wasApproved && (
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-blue-500/30 text-blue-300 text-[9px] font-bold rounded">
                    KEPT
                  </div>
                )}
                {!wasApproved && (
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 bg-purple-500/30 text-purple-300 text-[9px] font-bold rounded">
                    NEW
                  </div>
                )}

                {/* Checkbox */}
                <div className={`
                  absolute top-2 right-2 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                  ${isSelected 
                    ? 'bg-emerald-500 border-emerald-500' 
                    : 'bg-slate-800 border-slate-600 hover:border-slate-500'
                  }
                `}>
                  {isSelected && <CheckIcon className="w-4 h-4 text-white" />}
                </div>

                {/* Icon */}
                <div className={`
                  p-3 rounded-xl transition-all mb-3 mt-4
                  ${isSelected 
                    ? 'bg-emerald-500/20' 
                    : 'bg-gradient-to-br from-orange-500/10 to-amber-500/10'
                  }
                `}>
                  <Icon className={`w-12 h-12 ${isSelected ? 'text-emerald-400' : 'text-orange-400'}`} />
                </div>

                {/* Label */}
                <span className="text-xs font-medium text-white text-center leading-tight">{name}</span>
                <span className="text-[10px] text-slate-500 text-center mt-1">{description}</span>

                {/* Status indicator */}
                <div className={`
                  mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium
                  ${isSelected 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-red-500/20 text-red-400'
                  }
                `}>
                  {isSelected ? '✓ Keep' : 'Needs Work'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Summary - Iteration 5</h2>
          
          {approvedCount > 0 && (
            <div className="mb-4">
              <h3 className="text-emerald-400 font-semibold mb-2">✓ Icons to Keep ({approvedCount}):</h3>
              <div className="flex flex-wrap gap-2">
                {allIcons.filter(i => selectedIcons.has(i.id)).map(i => (
                  <span key={i.id} className={`px-2 py-1 rounded text-sm ${
                    i.approved ? 'bg-blue-500/20 text-blue-300' : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {i.name} {i.approved && '(original)'}
                  </span>
                ))}
              </div>
            </div>
          )}

          {needsWorkCount > 0 && (
            <div>
              <h3 className="text-red-400 font-semibold mb-2">✗ Icons to Redesign ({needsWorkCount}):</h3>
              <div className="flex flex-wrap gap-2">
                {allIcons.filter(i => !selectedIcons.has(i.id)).map(i => (
                  <span key={i.id} className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm">
                    {i.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="text-center text-slate-400 text-sm border-t border-slate-800 pt-8">
          <p className="mb-2">🔵 KEPT = Original approved icons • 🟣 NEW = Redesigned icons</p>
          <p>Review the redesigned icons and let me know which ones still need work!</p>
        </div>
      </div>
    </div>
  );
}
