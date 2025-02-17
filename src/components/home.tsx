import React, { useState } from "react";
import Header from "./Header";
import EditorPanel from "./EditorPanel";
import PreviewPanel from "./PreviewPanel";
import StatusBar from "./StatusBar";
import SettingsDialog from "./SettingsDialog";

interface HomeProps {
  initialCode?: string;
  initialDocumentation?: string;
  isConnected?: boolean;
}

const Home = ({
  initialCode = '// Your code here\nfunction example() {\n  console.log("Hello World");\n}',
  initialDocumentation = "# Sample Documentation\n\nThis is a preview of the generated documentation.\n\n## Features\n- Automatic generation\n- Multiple formats supported\n- Real-time preview",
  isConnected = true,
}: HomeProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "generating" | "error" | "success"
  >("idle");
  const [progress, setProgress] = useState(0);

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header
        isConnected={isConnected}
        onSettingsClick={() => setIsSettingsOpen(true)}
      />

      <main className="flex-1 flex overflow-hidden">
        <div className="w-1/2 p-4 overflow-auto">
          <EditorPanel
            code={initialCode}
            isWatching={isWatching}
            onToggleWatch={() => setIsWatching(!isWatching)}
          />
        </div>

        <div className="w-1/2">
          <PreviewPanel documentation={initialDocumentation} />
        </div>
      </main>

      <StatusBar
        status={status}
        progress={progress}
        message={
          status === "idle"
            ? "Ready"
            : status === "generating"
              ? "Generating documentation..."
              : status === "error"
                ? "Error generating documentation"
                : "Documentation generated successfully"
        }
      />

      <SettingsDialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
    </div>
  );
};

export default Home;
