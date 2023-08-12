"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMonted] = useState(false);

  useEffect(() => {
    setIsMonted(true);
  }, []);

  //! Defend from hydration error (in SSR we dont want render any modals)
  if (!isMounted) {
    return null;
  }

  //!When we are on Client side we going to render this StoreModal
  return (
    <>
      <StoreModal />
    </>
  );
};
