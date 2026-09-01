import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const NovantisLogoChip: React.FC<LogoProps> = ({ className = 'w-16 h-16', size }) => (
  <div 
    className={`relative flex items-center justify-center select-none ${className}`}
    style={size ? { width: size, height: size } : undefined}
  >
    <img 
      src="/assets/novantis-logo.png" 
      alt="Novantis Global" 
      className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,229,255,0.85)] scale-110"
    />
  </div>
);

export const NovantisFullLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-3.5 select-none ${className}`}>
    <img 
      src="/assets/novantis-logo.png" 
      alt="Novantis Global" 
      className="w-10 h-10 object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]"
    />
    <div className="flex flex-col leading-none">
      <span className="font-heading italic text-2xl sm:text-3xl tracking-wide text-white font-normal">
        Novantis
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold -mt-0.5">
        Global
      </span>
    </div>
  </div>
);

// High-Fidelity, Real Partner Brand Logo Cards (Zero Dead Space, Full-Color Real Branding)

export const SapLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-white p-1.5 shadow-md shadow-black/40 overflow-hidden ${className}`}>
    <img 
      src="/assets/sap.jpg" 
      alt="SAP S/4HANA" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const SalesforceLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-white p-1.5 shadow-md shadow-black/40 overflow-hidden ${className}`}>
    <img 
      src="/assets/salesforce.png" 
      alt="Salesforce" 
      className="w-full h-full object-contain scale-105"
    />
  </div>
);

export const ServicenowLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-white px-2 py-1 shadow-md shadow-black/40 overflow-hidden ${className}`}>
    <img 
      src="/assets/servicenow.png" 
      alt="ServiceNow" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const MicrosoftLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-white px-2 py-1 shadow-md shadow-black/40 overflow-hidden ${className}`}>
    <img 
      src="/assets/microsoft.jpg" 
      alt="Microsoft Dynamics 365" 
      className="w-full h-full object-contain scale-105"
    />
  </div>
);

export const OracleLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-white px-2 py-1 shadow-md shadow-black/40 overflow-hidden ${className}`}>
    <img 
      src="/assets/oracle.png" 
      alt="Oracle NetSuite" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const OdooLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-[#714B67] p-1 shadow-md shadow-black/40 overflow-hidden border border-white/20 ${className}`}>
    <img 
      src="/assets/odoo.png" 
      alt="Odoo" 
      className="w-full h-full object-contain rounded-lg"
    />
  </div>
);

export const ErpnextLogo: React.FC<LogoProps> = ({ className = 'w-28 h-12' }) => (
  <div className={`flex items-center justify-center rounded-xl bg-white px-2 py-1 shadow-md shadow-black/40 overflow-hidden ${className}`}>
    <img 
      src="/assets/erpnext.png" 
      alt="ERPNext" 
      className="w-full h-full object-contain"
    />
  </div>
);

export const CategoryIconBadge: React.FC<{ type: 'erp' | 'crm' | 'itsm' | 'data' | 'ai' | 'cloud'; className?: string }> = ({ type, className = 'w-10 h-10' }) => {
  const imageMap = {
    erp: '/assets/cat-erp.jpg',
    crm: '/assets/cat-crm.png',
    itsm: '/assets/cat-itsm.jpg',
    data: '/assets/cat-data.png',
    ai: '/assets/cat-ai.jpg',
    cloud: '/assets/cat-cloud.png',
  };

  return (
    <div className={`rounded-xl overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-white/20 shadow-lg ${className}`}>
      <img 
        src={imageMap[type]} 
        alt={type} 
        className="w-full h-full object-contain" 
      />
    </div>
  );
};

export const PartnerLogoBadge: React.FC<{ name: string; className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ name, className = '', size = 'md' }) => {
  const normalized = name.toLowerCase();

  const sizeClasses = {
    sm: 'h-10 sm:h-12 w-28 sm:w-32',
    md: 'h-12 sm:h-14 w-36 sm:w-44',
    lg: 'h-16 sm:h-20 w-44 sm:w-56',
    xl: 'h-20 sm:h-24 w-56 sm:w-72',
  };

  const finalClass = `${sizeClasses[size]} ${className}`;

  if (normalized.includes('sap')) return <SapLogo className={finalClass} />;
  if (normalized.includes('salesforce')) return <SalesforceLogo className={finalClass} />;
  if (normalized.includes('servicenow')) return <ServicenowLogo className={finalClass} />;
  if (normalized.includes('microsoft') || normalized.includes('dynamics')) return <MicrosoftLogo className={finalClass} />;
  if (normalized.includes('oracle') || normalized.includes('netsuite')) return <OracleLogo className={finalClass} />;
  if (normalized.includes('odoo')) return <OdooLogo className={finalClass} />;
  if (normalized.includes('erpnext')) return <ErpnextLogo className={finalClass} />;

  return (
    <div className={`px-4 py-2 rounded-xl bg-white text-black font-mono text-sm font-bold flex items-center justify-center shadow-lg ${finalClass}`}>
      {name}
    </div>
  );
};
