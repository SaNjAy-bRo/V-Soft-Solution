"use client";

import React, { createContext, useContext, useState } from "react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationModalContextType {
  isOpen: boolean;
  openModal: (defaultService?: string) => void;
  closeModal: () => void;
  selectedService: string;
}

const ConsultationModalContext = createContext<ConsultationModalContextType | undefined>(undefined);

export function ConsultationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("AI Solutions");

  const openModal = (service?: string) => {
    if (service) setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal, selectedService }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeModal} defaultService={selectedService} />
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return context;
}
