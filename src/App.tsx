import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerLogosOrbit } from './components/PartnerLogosOrbit';
import { PartnerNameMarquee } from './components/PartnerNameMarquee';
import { PlatformShowcaseGrid } from './components/PlatformShowcaseGrid';
import { PlatformsView } from './components/PlatformsView';
import { ServicesHub } from './components/ServicesHub';
import { CeoSection } from './components/CeoSection';
import { CoreValuesSection } from './components/CoreValuesSection';
import { IndustriesView } from './components/IndustriesView';
import { InsightsView } from './components/InsightsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { UxPrinciplesBadge } from './components/UxPrinciplesBadge';
import { NavView } from './types';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedAssessment, setSelectedAssessment] = useState<string>('Salesforce Health Check');
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('sap');

  // Handle Assessment Modal Open
  const handleOpenAssessment = (offerName?: string) => {
    if (offerName) {
      setSelectedAssessment(offerName);
    }
    setModalOpen(true);
  };

  // Handle Navigation to Specific Platform in Platforms View
  const handleSelectPlatform = (platformId: string) => {
    setSelectedPlatformId(platformId);
    setCurrentView('platforms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle View Navigation
  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-body selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      
      {/* Sticky Liquid Glass Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAssessment={() => handleOpenAssessment('General Enterprise Consultation')}
      />

      {/* Main View Controller */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Cinematic Video Hero */}
            <Hero
              onOpenAssessment={handleOpenAssessment}
              onExplorePlatforms={() => handleNavigate('platforms')}
            />

            {/* Feature Spec §5: Partner Logos Orbit (Floating, Upright, No Connecting Lines) */}
            <PartnerLogosOrbit
              onSelectPlatform={handleSelectPlatform}
              onOpenAssessment={handleOpenAssessment}
            />

            {/* Feature Spec §6: Partner Name Marquee (Large 90-140px, Pause on Hover, Zoom) */}
            <PartnerNameMarquee
              onSelectPlatform={handleSelectPlatform}
            />

            {/* All Partner Companies & Platform Ecosystems Showcase */}
            <PlatformShowcaseGrid
              onSelectPlatform={handleSelectPlatform}
              onOpenAssessment={handleOpenAssessment}
            />

            {/* Cross-Cutting Service Pillars */}
            <ServicesHub
              onOpenAssessment={handleOpenAssessment}
            />

            {/* Feature Spec §2: Founder & CEO Message Section (Waseem Khan with Real Portrait) */}
            <CeoSection />
          </>
        )}

        {currentView === 'about' && (
          <div className="pt-8">
            <CoreValuesSection />
            <CeoSection />
          </div>
        )}

        {currentView === 'platforms' && (
          <div>
            <PlatformsView
              onOpenAssessment={handleOpenAssessment}
              initialPlatformId={selectedPlatformId}
            />
            <PartnerNameMarquee onSelectPlatform={setSelectedPlatformId} />
          </div>
        )}

        {currentView === 'services' && (
          <div className="pt-8">
            <ServicesHub onOpenAssessment={handleOpenAssessment} />
            <PartnerNameMarquee onSelectPlatform={handleSelectPlatform} />
          </div>
        )}

        {currentView === 'industries' && (
          <div>
            <IndustriesView onOpenAssessment={handleOpenAssessment} />
          </div>
        )}

        {currentView === 'insights' && (
          <div>
            <InsightsView />
          </div>
        )}

        {currentView === 'contact' && (
          <div>
            <ContactView />
          </div>
        )}
      </main>

      {/* Cinematic Video Footer with "Made by Novantis" and Legal Links (§8) */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAssessment={() => handleOpenAssessment('General Enterprise Consultation')}
      />

      {/* Interactive Assessment Booking Modal */}
      <AssessmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedAssessment}
      />

      {/* Cognitive UI/UX Laws HUD Indicator */}
      <UxPrinciplesBadge />

    </div>
  );
};

export default App;
