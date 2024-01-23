"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMobileSidebar } from "@/storage/use-mobile-sidebar";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onOpen, onClose } = useMobileSidebar();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close the sidebar on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        onClick={onOpen}
        className="block md:hidden mr-2"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
