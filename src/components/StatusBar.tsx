import React from "react";
import { Progress } from "./ui/progress";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusBarProps {
  status?: "idle" | "generating" | "error" | "success";
  progress?: number;
  message?: string;
  aiProvider?: string;
}

const StatusBar = ({
  status = "idle",
  progress = 0,
  message = "Ready",
  aiProvider = "OpenAI",
}: StatusBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-6 bg-background border-t flex items-center px-4 text-sm">
      <div className="flex items-center space-x-2 flex-1">
        {/* Status Icon */}
        <div className="flex items-center">
          {status === "generating" && (
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          )}
          {status === "error" && (
            <AlertCircle className="h-4 w-4 text-destructive" />
          )}
          {status === "success" && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </div>

        {/* Status Message */}
        <span
          className={cn(
            "text-muted-foreground",
            status === "error" && "text-destructive",
            status === "success" && "text-green-500",
          )}
        >
          {message}
        </span>

        {/* Progress Bar - Only show when generating */}
        {status === "generating" && (
          <div className="w-24">
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </div>

      {/* AI Provider Info */}
      <div className="text-muted-foreground">AI Provider: {aiProvider}</div>
    </div>
  );
};

export default StatusBar;
