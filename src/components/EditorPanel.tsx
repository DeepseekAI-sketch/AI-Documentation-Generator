import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Eye, EyeOff, FileCode2 } from "lucide-react";

interface EditorPanelProps {
  code?: string;
  language?: string;
  isWatching?: boolean;
  onToggleWatch?: () => void;
}

const EditorPanel = ({
  code = '// Your code here\nfunction example() {\n  console.log("Hello World");\n}',
  language = "javascript",
  isWatching = false,
  onToggleWatch = () => {},
}: EditorPanelProps) => {
  return (
    <Card className="h-full w-full bg-background p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode2 className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Code Editor</h2>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={onToggleWatch}
                className="w-8 h-8"
              >
                {isWatching ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isWatching ? "Stop watching file" : "Start watching file"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="relative flex-grow bg-muted rounded-md p-4 font-mono text-sm overflow-auto">
        <pre className="whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="px-2 py-1 rounded-md bg-muted">{language}</span>
        <span>
          {isWatching ? "Watching for changes..." : "File watching paused"}
        </span>
      </div>
    </Card>
  );
};

export default EditorPanel;
