import React from "react";
import { Button } from "./ui/button";
import { Settings, Wifi, WifiOff } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HeaderProps {
  isConnected?: boolean;
  onSettingsClick?: () => void;
  title?: string;
}

const Header = ({
  isConnected = true,
  onSettingsClick = () => {},
  title = "AI Documentation Generator",
}: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-background border-b border-border px-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>

      <div className="flex items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <Wifi className="h-5 w-5 text-green-500" />
                ) : (
                  <WifiOff className="h-5 w-5 text-destructive" />
                )}
                <span className="text-sm text-muted-foreground">
                  {isConnected ? "Connected to AI Provider" : "Disconnected"}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {isConnected
                  ? "AI Provider is available"
                  : "Check your AI provider settings"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={onSettingsClick}
                className="ml-2"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;
