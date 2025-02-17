import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code } from "lucide-react";

interface PreviewPanelProps {
  documentation?: string;
  format?: "markdown" | "html";
}

const PreviewPanel = ({
  documentation = "# Sample Documentation\n\nThis is a preview of the generated documentation.\n\n## Features\n- Automatic generation\n- Multiple formats supported\n- Real-time preview",
  format = "markdown",
}: PreviewPanelProps) => {
  const [activeFormat, setActiveFormat] = useState(format);

  const renderContent = () => {
    if (activeFormat === "html") {
      return (
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{
            __html: documentation.replace(/\n/g, "<br/>"),
          }}
        />
      );
    }
    return (
      <pre className="font-mono text-sm whitespace-pre-wrap">
        {documentation}
      </pre>
    );
  };

  return (
    <div className="h-full w-full bg-background border-l">
      <Card className="h-full rounded-none border-0">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Documentation Preview</h2>
            <Button variant="outline" size="sm">
              Copy to Clipboard
            </Button>
          </div>
          <Tabs
            defaultValue={activeFormat}
            className="w-full"
            onValueChange={(value) =>
              setActiveFormat(value as "markdown" | "html")
            }
          >
            <TabsList className="grid w-60 grid-cols-2">
              <TabsTrigger value="markdown" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Markdown
              </TabsTrigger>
              <TabsTrigger value="html" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                HTML
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <CardContent className="p-4 h-[calc(100%-8rem)] overflow-auto">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviewPanel;
