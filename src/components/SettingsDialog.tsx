import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Settings, X } from "lucide-react";

interface SettingsDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SettingsDialog = ({ open = true, onOpenChange }: SettingsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[600px] h-[500px] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>Settings</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange?.(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 p-6">
          {/* AI Provider Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">AI Provider</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="provider">Provider</Label>
                <Select defaultValue="openai">
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai">OpenAI</SelectItem>
                    <SelectItem value="azure">Azure OpenAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  defaultValue=""
                />
              </div>
            </div>
          </div>

          {/* Documentation Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Documentation Preferences</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="outputFormat">Default Output Format</Label>
                <Select defaultValue="markdown">
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="markdown">Markdown</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoGenerate">Auto-generate on save</Label>
                  <div className="text-sm text-gray-500">
                    Automatically generate documentation when file is saved
                  </div>
                </div>
                <Switch id="autoGenerate" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="watchMode">Watch Mode</Label>
                  <div className="text-sm text-gray-500">
                    Monitor files for changes and update documentation
                  </div>
                </div>
                <Switch id="watchMode" defaultChecked />
              </div>
            </div>
          </div>

          {/* File Types */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Supported File Types</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="typescript">.ts/.tsx files</Label>
                <Switch id="typescript" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="javascript">.js/.jsx files</Label>
                <Switch id="javascript" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="python">.py files</Label>
                <Switch id="python" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
