"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PreviewPortalContext } from "@/app/(main)/components/DynamicComponentPreview";

// Import the preview portal context

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger
      data-slot="alert-dialog-trigger"
      {...props}
      className="cursor-pointer"
    />
  );
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogOverlay({
  className,
  isInPortal,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay> & {
  isInPortal?: boolean;
}) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 inset-0 z-50 bg-black/50",
        isInPortal ? "absolute pointer-events-auto" : "fixed z-0",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  container,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
  container?: HTMLElement | null;
}) {
  // Use preview portal container from context if available
  const contextPortal = React.useContext(PreviewPortalContext);

  // Determine which portal container to use
  const portalContainer = container !== undefined ? container : contextPortal;

  // Use absolute positioning when in a portal container, fixed otherwise
  const isInPortal = !!portalContainer;

  // Remove scroll lock when inside a portal to allow scrolling outside the preview
  React.useEffect(() => {
    if (!isInPortal) return;

    // Function to remove scroll lock styles
    const removeScrollLock = () => {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("pointer-events");
      document.body.style.removeProperty("padding-right");
      document.body.style.removeProperty("margin-right");
      document.body.removeAttribute("data-scroll-locked");
      document.documentElement.style.removeProperty("overflow");
      document.documentElement.removeAttribute("data-scroll-locked");
    };

    // Use MutationObserver to detect when Radix adds scroll lock
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "data-scroll-locked" ||
            mutation.attributeName === "style")
        ) {
          removeScrollLock();
        }
      });
    });

    // Observe both body and html
    observer.observe(document.body, { attributes: true });
    observer.observe(document.documentElement, { attributes: true });

    // Initial cleanup
    removeScrollLock();

    // Add wheel event handler to allow scrolling outside the preview tab
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;

      // Check if target is inside the preview container
      const isInsidePreview = target.closest('[data-preview-container="true"]');

      // If wheel is outside the preview container, scroll the page
      // Use deltaMode to properly calculate scroll amount
      if (!isInsidePreview) {
        let deltaY = e.deltaY;

        // Normalize delta based on deltaMode
        // 0 = pixels, 1 = lines, 2 = pages
        if (e.deltaMode === 1) {
          deltaY *= 10; // line height approximation
        } else if (e.deltaMode === 2) {
          deltaY *= window.innerHeight;
        }

        // Apply a smaller multiplier to prevent too fast scrolling
        window.scrollBy({ top: deltaY * 0.1, behavior: "auto" });
      }
    };

    // Use capture phase to intercept before react-remove-scroll blocks it
    window.addEventListener("wheel", handleWheel, {
      capture: true,
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, [isInPortal, portalContainer]);

  return (
    <AlertDialogPortal container={portalContainer}>
      <AlertDialogOverlay isInPortal={isInPortal} />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          isInPortal
            ? "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-auto"
            : "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className, "cursor-pointer")}
      {...props}
    />
  );
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(
        buttonVariants({ variant: "outline" }),
        className,
        "cursor-pointer"
      )}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
