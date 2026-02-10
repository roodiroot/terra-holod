"use client";

import useModal from "@/hooks/use-modal";
import { useEffect } from "react";

const FeedbackModalAutoOpener = ({
  delay = 60_000,
  storageKey = "feedback_modal_shown",
}: {
  delay?: number;
  storageKey?: string;
}) => {
  const { onOpen } = useModal();

  useEffect(() => {
    // не показываем повторно в рамках вкладки/сессии
    if (sessionStorage.getItem(storageKey)) return;

    const timer = window.setTimeout(() => {
      onOpen();
      sessionStorage.setItem(storageKey, "1");
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay, onOpen, storageKey]);

  return null;
};

export default FeedbackModalAutoOpener;
