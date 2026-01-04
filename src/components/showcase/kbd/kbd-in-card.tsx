"use client";

import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function KbdInCard() {
  return (
    <div className="flex items-center justify-center p-8">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Keyboard Shortcuts</CardTitle>
          <CardDescription>
            Master these shortcuts to boost your productivity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="text-sm font-semibold">Navigation</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Go to Dashboard
                </span>
                <KbdGroup>
                  <Kbd>G</Kbd>
                  <span className="text-muted-foreground">then</span>
                  <Kbd>D</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Go to Settings
                </span>
                <KbdGroup>
                  <Kbd>G</Kbd>
                  <span className="text-muted-foreground">then</span>
                  <Kbd>S</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Editing</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Bold Text
                </span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span>+</span>
                  <Kbd>B</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Italic Text
                </span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span>+</span>
                  <Kbd>I</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Insert Link
                </span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span>+</span>
                  <Kbd>K</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Search</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Open Search
                </span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span>+</span>
                  <Kbd>/</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
