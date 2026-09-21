import React from 'react';
import { useApp } from '../context/AppContext';
import { Youtube, Disc3, ShieldCheck, Flame, ExternalLink, Play } from 'lucide-react';
import { SubamLogo } from './SubamLogo';

export const SubamBannerShowcase: React.FC = () => {
  const { siteSettings, openInYouTube, songs, playSong, setCurrentView } = useApp();

  const handlePlaySpecial = () => {
    const special = songs.find(s => s.featured || s.isSlotBox) || songs[0];
    if (special) playSong(special);
  };

  return (
    <section id="subam-banner-showcase" className="pt-4 pb-6 px-3 sm:px-6 md:px-8 lg:px-10 max-w-[2000px] mx-auto">
      {/* Official Panoramic Banner Card */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#FFDE00]/40 bg-[#0E0B07] shadow-[0_12px_40px_rgba(0,0,0,0.85)] group">
        
        {/* Banner Graphic Image */}
        <div className="relative w-full aspect-[21/9] max-h-[360px] sm:max-h-[460px] md:max-h-[520px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/01%20subam_banner%20png.png"
            alt="Subam Audio Vision Official Banner"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/images/subam_banner.jpg';
            }}
            className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
          />

          {/* Gentle cinematic lighting vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

          {/* Floating Sacred Heritage Badge */}
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#FFDE00]/40 text-[#FFDE00] text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
              <Flame className="w-3.5 h-3.5 text-[#E52020]" />
              <span>Official Subam Audio Vision Banner</span>
            </div>
          </div>

          {/* Bottom Bar overlay with Quick Actions */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SubamLogo size="md" withBorder={true} />
              <div>
                <h3 className="text-base sm:text-xl font-bold font-cinzel text-white drop-shadow-md">
                  {siteSettings.brandName} • Tiruvannamalai
                </h3>
                <p className="text-xs text-[#FFDE00] font-medium drop-shadow-sm flex items-center gap-2">
                  <span>Est. 1997</span>
                  <span>•</span>
                  <span>1,200+ Master Tracks</span>
                  <span>•</span>
                  <span className="text-white/80">600K+ Devotees</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
              <button
                onClick={handlePlaySpecial}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FFDE00] to-[#FF9900] text-black font-extrabold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-[#FFDE00]/25 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Play Master Track</span>
              </button>

              <button
                onClick={() => openInYouTube()}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-[#E52020] hover:bg-[#ff2b2b] text-white font-extrabold text-xs sm:text-sm active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-[#E52020]/30 cursor-pointer"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span className="hidden sm:inline">Watch on YouTube</span>
                <span className="sm:hidden">YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
