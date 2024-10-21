"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import useModal from "@/hooks/use-modal";
import ProfileForm from "../forms/profile-form";

const Modal = () => {
  const { isOpen, onClose } = useModal();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg sm:rounded-[40px] sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Добро пожаловать в TERRA-HOLOD
            </DialogTitle>
            <DialogDescription>
              Оставьте свои контактные данные, и наш специалист свяжется с вами,
              чтобы ответить на все вопросы и помочь найти лучшее решение для
              вас.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="rounded-t-[40px]">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl">
            Добро пожаловать в TERRA-HOLOD
          </DrawerTitle>
          <DrawerDescription>
            Оставьте свои контактные данные, и наш специалист свяжется с вами,
            чтобы ответить на все вопросы и помочь найти лучшее решение для вас.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Отменить</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Modal;
