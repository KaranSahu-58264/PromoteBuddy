/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import SMMValueProp from './components/SMMValueProp';
import ServicesGrid from './components/ServicesGrid';
import PortfolioBento from './components/PortfolioBento';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import FreeAuditModal from './components/FreeAuditModal';
import CaseStudyModal from './components/CaseStudyModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { CaseStudy } from './data/agencyData';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditPrefillGoal, setAuditPrefillGoal] = useState<string | undefined>(undefined);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleOpenAudit = (goal?: string) => {
    setAuditPrefillGoal(goal);
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
    setAuditPrefillGoal(undefined);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans selection:bg-[#0071e3] selection:text-white">
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      <main>
        <Hero onOpenAudit={() => handleOpenAudit()} />

        <TrustSection onOpenAudit={() => handleOpenAudit()} />

        <SMMValueProp onOpenAudit={() => handleOpenAudit('Social Media Management (SMM)')} />

        <ServicesGrid onOpenAudit={(goal) => handleOpenAudit(goal)} />

        <PortfolioBento
          onOpenAudit={() => handleOpenAudit()}
          onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
        />

        <AboutSection onOpenAudit={() => handleOpenAudit()} />
      </main>

      <Footer onOpenAudit={() => handleOpenAudit()} />

      <WhatsAppFloatingButton />

      <FreeAuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
        prefillGoal={auditPrefillGoal}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenAudit={(goal) => handleOpenAudit(goal)}
      />
    </div>
  );
}
