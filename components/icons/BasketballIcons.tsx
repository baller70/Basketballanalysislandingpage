'use client';

import React from 'react';

// ============================================
// PROFESSIONAL BASKETBALL ICONS
// Approved icons for the landing page
// ============================================

// ✅ Basketball Court - Top-down view
export const CourtIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

// ✅ Video Camera
export const VideoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="14" height="14" rx="2" />
    <circle cx="9" cy="12" r="3" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <path d="M16 9 L22 5 L22 19 L16 15" />
  </svg>
);

// ✅ Trophy
export const TrophyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 4 H16 V10 C16 13 13 15 12 15 C11 15 8 13 8 10 V4 Z" />
    <path d="M8 6 H6 C4 6 4 9 6 9 H8" />
    <path d="M16 6 H18 C20 6 20 9 18 9 H16" />
    <path d="M12 15 V19" />
    <path d="M8 22 H16 L15 19 H9 L8 22" />
    <path d="M14 6 L12 11" strokeOpacity="0.3" />
  </svg>
);

// ✅ Timer - Professional Stopwatch
export const TimerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" strokeWidth="2" />
    <path d="M12 9 V13 L15 15" strokeWidth="2" />
    <path d="M10 2 H14" strokeWidth="2" />
    <circle cx="12" cy="13" r="1" fill="currentColor" />
  </svg>
);

// ✅ Target - Accuracy bullseye
export const TargetIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

// ✅ Clipboard - Stats sheet
export const ClipboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

// ✅ Checkmark - Clean UI Check
export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 L9 17 L4 12" />
  </svg>
);

// ✅ Star
export const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18.5 21 L12 16.5 L5.5 21 L8 13.5 L2 9 L9.5 9 Z" />
  </svg>
);

// ✅ Star Filled
export const StarFilledIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2 L14.5 9 L22 9 L16 13.5 L18.5 21 L12 16.5 L5.5 21 L8 13.5 L2 9 L9.5 9 Z" strokeLinejoin="round" />
  </svg>
);

// ✅ Arrow Right - Professional Chevron
export const ArrowRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18 L15 12 L9 6" />
  </svg>
);

// ✅ Upload - Cloud upload
export const UploadIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16 C2 16 2 10 6 10 C6 6 10 4 14 6 C18 4 22 8 20 12 C24 14 22 18 18 18 L6 18" />
    <path d="M12 12 L12 22" />
    <path d="M8 16 L12 12 L16 16" />
  </svg>
);

// ✅ Lightning - Solid bolt
export const LightningIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 L3 14 H12 L11 22 L21 10 H12 L13 2 Z" />
  </svg>
);

// ✅ Shield - Security check
export const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L4 6 L4 12 C4 17 8 21 12 22 C16 21 20 17 20 12 L20 6 Z" />
    <path d="M8 12 L11 15 L16 9" strokeWidth="2" />
  </svg>
);

// ✅ Compare - Split screen
export const CompareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <path d="M16 10 L18 12 L16 14" />
    <path d="M8 10 L6 12 L8 14" />
  </svg>
);

// ✅ Badge - Achievement shield
export const BadgeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 L12 2 Z" strokeWidth="2" />
    <path d="M12 8 L13 10 H15 L13.5 11.5 L14 13.5 L12 12.5 L10 13.5 L10.5 11.5 L9 10 H11 L12 8 Z" fill="currentColor" />
  </svg>
);

// ✅ Scroll - Scroll indicator
export const ScrollIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="18" rx="5" />
    <line x1="12" y1="6" x2="12" y2="10" />
    <path d="M8 22 L12 20 L16 22" />
  </svg>
);

// ✅ Basketball Hoop - Front view
export const HoopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="8" rx="0.5" strokeWidth="2" />
    <rect x="8" y="4" width="8" height="5" rx="0.5" />
    <ellipse cx="12" cy="12" rx="5.5" ry="2" strokeWidth="2" />
    <path d="M6.5 13 L7.5 20" strokeWidth="1.2" />
    <path d="M9 13.5 L9.5 20.5" strokeWidth="1.2" />
    <path d="M12 14 L12 21" strokeWidth="1.2" />
    <path d="M15 13.5 L14.5 20.5" strokeWidth="1.2" />
    <path d="M17.5 13 L16.5 20" strokeWidth="1.2" />
    <path d="M7 16 Q12 17.5 17 16" strokeWidth="1" strokeOpacity="0.6" />
    <path d="M7.5 18.5 Q12 20 16.5 18.5" strokeWidth="1" strokeOpacity="0.6" />
  </svg>
);

// ============================================
// REDESIGNED ICONS - Professional versions
// ============================================

// 🔄 Basketball - Spalding-style seams
export const BallIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path d="M12 2 C8 6, 8 18, 12 22" strokeWidth="1.5" />
    <path d="M12 2 C16 6, 16 18, 12 22" strokeWidth="1.5" />
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.5" />
  </svg>
);

// 🔄 Ball & Hoop - Swish moment
export const BallHoopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="6" rx="6" ry="1.8" strokeWidth="2" />
    <path d="M6 7 L8 15 L12 17 L16 15 L18 7" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
    <path d="M12 8.5 C10.5 9.5, 10.5 14.5, 12 15.5" strokeWidth="1.2" />
    <path d="M12 8.5 C13.5 9.5, 13.5 14.5, 12 15.5" strokeWidth="1.2" />
    <line x1="8.5" y1="12" x2="15.5" y2="12" strokeWidth="1.2" />
  </svg>
);

// 🔄 Player Shooting - NBA silhouette
export const ShootingPlayerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="4" r="2" />
    <path d="M8 6 V11" strokeWidth="2" />
    <path d="M8 8 L13 5 L17 3" strokeWidth="2" />
    <path d="M8 8 L4 10" strokeWidth="2" />
    <circle cx="19" cy="2" r="2" strokeWidth="1.5" />
    <path d="M8 11 L5 16 L4 21" strokeWidth="2" />
    <path d="M8 11 L11 16 L12 21" strokeWidth="2" />
  </svg>
);

// 🔄 Player Dunking - Jumpman silhouette
export const DunkingPlayerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="19" cy="5" rx="3" ry="1" strokeWidth="2" />
    <circle cx="10" cy="4" r="2" />
    <path d="M10 6 L13 10" strokeWidth="2" />
    <path d="M12 8 L17 5 L19 3" strokeWidth="2" />
    <path d="M10 6 L6 8" strokeWidth="2" />
    <path d="M13 10 L11 16 L8 21" strokeWidth="2" />
    <path d="M13 10 L16 14 L18 19" strokeWidth="2" />
  </svg>
);

// 🔄 Shot Trajectory - Physics parabola
export const TrajectoryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 19 Q12 3 21 19" strokeDasharray="3 3" strokeWidth="2" />
    <circle cx="3" cy="19" r="2" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="2" ry="0.8" strokeWidth="1.5" />
    <circle cx="12" cy="5" r="1" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// 🔄 Joint Angles - Biomechanics
export const AnglesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="18" x2="12" y2="10" strokeWidth="2.5" />
    <line x1="12" y1="10" x2="20" y2="18" strokeWidth="2.5" />
    <circle cx="12" cy="10" r="2" strokeWidth="1.5" />
    <circle cx="12" cy="10" r="0.8" fill="currentColor" />
    <path d="M8 14 A5 5 0 0 1 16 14" strokeWidth="1.5" />
    <text x="10" y="7" fontSize="5" fill="currentColor" fontFamily="sans-serif" fontWeight="bold">90°</text>
  </svg>
);

// 🔄 Release Point - Hand/wrist detail
export const ReleasePointIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="3" y2="4" strokeDasharray="2 2" strokeOpacity="0.4" />
    <line x1="2" y1="22" x2="4" y2="22" strokeWidth="2" />
    <line x1="2" y1="6" x2="4" y2="6" strokeWidth="2" />
    <path d="M15 22 V14 L12 10" strokeWidth="2" />
    <path d="M12 10 L9 11 L8 8" strokeWidth="2" />
    <circle cx="7" cy="5" r="3" strokeWidth="2" />
    <path d="M7 2 C5.5 3, 5.5 7, 7 8" strokeWidth="1.2" />
    <path d="M7 2 C8.5 3, 8.5 7, 7 8" strokeWidth="1.2" />
    <line x1="4" y1="5" x2="10" y2="5" strokeWidth="1.2" />
  </svg>
);

// 🔄 AI Brain - Neural network
export const AIBrainIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10 C4 6 7 3 12 3 C17 3 20 6 20 10 C20 11 20 13 19 14 C20 16 19 18 17 19 L7 19 C5 18 4 16 4 14 C4 13 4 11 4 10" strokeWidth="2" />
    <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    <circle cx="16" cy="8" r="1.2" fill="currentColor" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <circle cx="8" cy="16" r="1.2" fill="currentColor" />
    <circle cx="16" cy="16" r="1.2" fill="currentColor" />
    <line x1="8" y1="8" x2="12" y2="12" strokeWidth="1" />
    <line x1="16" y1="8" x2="12" y2="12" strokeWidth="1" />
    <line x1="12" y1="12" x2="8" y2="16" strokeWidth="1" />
    <line x1="12" y1="12" x2="16" y2="16" strokeWidth="1" />
  </svg>
);

// 🔄 Progress Chart - Area chart
export const ChartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="3" x2="3" y2="21" strokeWidth="2" />
    <line x1="3" y1="21" x2="21" y2="21" strokeWidth="2" />
    <path d="M3 21 L6 16 L10 14 L14 9 L18 6 L21 4 V21 Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M3 21 L6 16 L10 14 L14 9 L18 6 L21 4" strokeWidth="2" />
    <circle cx="6" cy="16" r="1.2" fill="currentColor" />
    <circle cx="10" cy="14" r="1.2" fill="currentColor" />
    <circle cx="14" cy="9" r="1.2" fill="currentColor" />
    <circle cx="18" cy="6" r="1.2" fill="currentColor" />
  </svg>
);

// 🔄 Scoreboard - Stadium display
export const ScoreboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="1.5" strokeWidth="2" />
    <line x1="12" y1="4" x2="12" y2="20" strokeWidth="1.5" />
    <rect x="3" y="7" width="7" height="10" rx="0.5" fill="currentColor" fillOpacity="0.08" />
    <rect x="14" y="7" width="7" height="10" rx="0.5" fill="currentColor" fillOpacity="0.08" />
    <text x="4" y="14" fontSize="7" fill="currentColor" fontFamily="monospace" fontWeight="bold">24</text>
    <text x="15" y="14" fontSize="7" fill="currentColor" fontFamily="monospace" fontWeight="bold">18</text>
  </svg>
);

// 🔄 Jersey - NBA tank top
export const JerseyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3 L6 6 L4 8 L4 11 L6 11 L6 22 L18 22 L18 11 L20 11 L20 8 L18 6 L16 3" strokeWidth="2" />
    <path d="M10 3 Q12 6 14 3" strokeWidth="1.5" />
    <text x="9.5" y="16" fontSize="6" fill="currentColor" fontFamily="sans-serif" fontWeight="bold">23</text>
  </svg>
);

// 🔄 Sneaker - Jordan style
export const SneakerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18 L22 18 L22 16 L20 15 L2 15 Z" fill="currentColor" fillOpacity="0.1" />
    <line x1="2" y1="18" x2="22" y2="18" strokeWidth="2" />
    <path d="M2 15 L2 11 L5 8 L10 8 L13 6 L17 6 L19 8 L20 11 L20 15" strokeWidth="2" />
    <path d="M17 6 L18 4 L20 6 L20 9" strokeWidth="1.5" />
    <path d="M6 12 Q10 10 15 11" strokeWidth="1.5" />
  </svg>
);

// 🔄 Medal - Achievement medal
export const MedalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2 L7 10 L12 8 L17 10 L16 2" strokeWidth="2" />
    <circle cx="12" cy="16" r="6" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
    <path d="M12 12 L12.5 14 L15 14.2 L13 15.5 L13.5 18 L12 17 L10.5 18 L11 15.5 L9 14.2 L11.5 14 Z" fill="currentColor" />
  </svg>
);

// 🔄 Playbook - Coaching board
export const PlaybookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="1.5" strokeWidth="2" />
    <path d="M6 7 L8 9 M8 7 L6 9" strokeWidth="2" />
    <path d="M16 7 L18 9 M18 7 L16 9" strokeWidth="2" />
    <circle cx="7" cy="17" r="1.8" strokeWidth="2" />
    <circle cx="17" cy="17" r="1.8" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.8" strokeWidth="2" />
    <path d="M9 17 L10.5 12" strokeDasharray="2 2" strokeWidth="1.2" />
    <path d="M13.5 12 L15 17" strokeDasharray="2 2" strokeWidth="1.2" />
  </svg>
);

// 🔄 Whistle - Referee whistle
export const WhistleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="14" cy="14" rx="7" ry="4.5" strokeWidth="2" />
    <path d="M7 14 L3 13 L3 11 L7 12" strokeWidth="2" />
    <circle cx="19" cy="14" r="1.2" fill="currentColor" />
    <circle cx="3" cy="8" r="2" strokeWidth="1.5" />
    <line x1="3" y1="10" x2="3" y2="11" strokeWidth="1.5" />
    <path d="M20 11 Q22 9 20 7" strokeWidth="1.5" />
    <path d="M21 12 Q24 9 21 6" strokeWidth="1.5" strokeOpacity="0.7" />
  </svg>
);

// Export all icons as a collection
export const BasketballIcons = {
  Court: CourtIcon,
  Hoop: HoopIcon,
  Ball: BallIcon,
  BallHoop: BallHoopIcon,
  ShootingPlayer: ShootingPlayerIcon,
  DunkingPlayer: DunkingPlayerIcon,
  Video: VideoIcon,
  Trajectory: TrajectoryIcon,
  Angles: AnglesIcon,
  ReleasePoint: ReleasePointIcon,
  AIBrain: AIBrainIcon,
  Chart: ChartIcon,
  Trophy: TrophyIcon,
  Scoreboard: ScoreboardIcon,
  Jersey: JerseyIcon,
  Sneaker: SneakerIcon,
  Timer: TimerIcon,
  Target: TargetIcon,
  Clipboard: ClipboardIcon,
  Medal: MedalIcon,
  Playbook: PlaybookIcon,
  Whistle: WhistleIcon,
  Check: CheckIcon,
  Star: StarIcon,
  StarFilled: StarFilledIcon,
  ArrowRight: ArrowRightIcon,
  Upload: UploadIcon,
  Lightning: LightningIcon,
  Shield: ShieldIcon,
  Compare: CompareIcon,
  Badge: BadgeIcon,
  Scroll: ScrollIcon,
};

