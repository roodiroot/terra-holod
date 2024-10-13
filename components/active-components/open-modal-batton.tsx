"use client";

import useModal from "@/hooks/use-modal";
import { Button } from "../ui/button";

interface OpenModalBattonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

const OpenModalBatton: React.FC<OpenModalBattonProps> = ({
  variant,
  children,
  ...props
}) => {
  const { onOpen } = useModal();
  return (
    <Button asChild variant={variant} {...props} onClick={() => onOpen()}>
      {children}
    </Button>
  );
};

export default OpenModalBatton;
