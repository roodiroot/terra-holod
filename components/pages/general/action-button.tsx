"use client";

import useModal from "@/hooks/use-modal";

const ActionButton = ({ children }: { children: React.ReactNode }) => {
  const { onOpen } = useModal();
  return (
    <span onClick={() => onOpen()} className="">
      {children}
    </span>
  );
};
export default ActionButton;
