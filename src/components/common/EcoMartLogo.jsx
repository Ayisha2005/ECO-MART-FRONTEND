import React from 'react';
import { Leaf, Recycle, ShieldCheck } from 'lucide-react';

export const EcoMartLogo = ({ variant = 'default', size = 'md', showTagline = true, className = '' }) => {
  const sizeMap = {
    sm: { icon: 'w-6 h-6', title: 'text-lg', badge: 'px-1.5 py-0.5 text-[10px]' },
    md: { icon: 'w-8 h-8', title: 'text-2xl', badge: 'px-2 py-0.5 text-xs' },
    lg: { icon: 'w-12 h-12', title: 'text-4xl', badge: 'px-3 py-1 text-sm' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        <div className="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-slate-900 text-white shadow-lg shadow-emerald-900/20 border border-emerald-400/30">
          <Leaf className={`${currentSize.icon} text-lime-400 animate-pulse`} />
          <Recycle className="w-3.5 h-3.5 text-emerald-100 absolute -bottom-0.5 -right-0.5" />
        </div>
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 bg-clip-text text-transparent ${currentSize.title}`}>
              ECO MART
            </span>
            <span className={`font-semibold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300/60 ${currentSize.badge}`}>
              INDIA
            </span>
          </div>
        </div>
      </div>
      
      {showTagline && (
        <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mt-1">
          SMART SHOP • GREEN DELIVER • BETTER TOMORROW
        </p>
      )}
    </div>
  );
};

export default EcoMartLogo;
