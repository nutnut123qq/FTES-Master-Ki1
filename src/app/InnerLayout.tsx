"use client";

import { HeroUIProvider } from "@/components/providers/HeroUIProvider";
import { NextThemesProvider } from "@/components/providers/NextThemesProvider";
import { PrivyProvider } from "@/components/providers/PrivyProvider";
import { SwrProvider } from "@/components/providers/SwrProvider";
import { DrawerContainer } from "@/components/drawers/DrawerContainer";
import { ModalContainer } from "@/components/modals/ModalContainer";
import { ToastProvider } from "@/components/toasts/ToastProvider";
import { WorkersContainer } from "@/components/workers/WorkersContainer";
import { SingletonHookProvider } from "@/hooks/singleton";
import { ReduxProvider } from "@/redux";
import { InnerUILayout } from "./InnerUILayout";

export function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider>
      <HeroUIProvider>
        <SwrProvider>
          <PrivyProvider>
            <ReduxProvider>
              <SingletonHookProvider>
                <InnerUILayout>
                  {children}
                  <ModalContainer />
                  <DrawerContainer />
                  <ToastProvider />
                  <WorkersContainer />
                </InnerUILayout>
              </SingletonHookProvider>
            </ReduxProvider>
          </PrivyProvider>
        </SwrProvider>
      </HeroUIProvider>
    </NextThemesProvider>
  );
}
