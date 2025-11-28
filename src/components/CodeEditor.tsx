import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeEditorProps {
  language: string;
  defaultCode?: string;
}

const defaultCodes: Record<string, string> = {
  javascript: `// JavaScript Code Editor
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`,
  python: `# Python Code Editor
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
  html: `<!-- HTML Code Editor -->
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
};

export const CodeEditor = ({ language: initialLanguage, defaultCode }: CodeEditorProps) => {
  const [code, setCode] = useState(defaultCode || defaultCodes[initialLanguage] || defaultCodes.javascript);
  const [language, setLanguage] = useState(initialLanguage);
  const [output, setOutput] = useState<string>("");
  const { toast } = useToast();

  const runCode = () => {
    try {
      if (language === 'javascript') {
        // Capture console.log output
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        };

        // Execute the code
        eval(code);

        // Restore console.log
        console.log = originalLog;

        setOutput(logs.join('\n') || 'Code executed successfully!');
      } else if (language === 'python') {
        setOutput('Python execution is not available in the browser. Use the offline version or a Python environment.');
      } else if (language === 'html') {
        // Open HTML in a new window
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(code);
          newWindow.document.close();
        }
        setOutput('HTML opened in new window');
      }
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      toast({
        title: "Execution Error",
        description: error instanceof Error ? error.message : 'Unknown error',
        variant: "destructive",
      });
    }
  };

  const resetCode = () => {
    setCode(defaultCode || defaultCodes[language] || '');
    setOutput('');
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(defaultCodes[newLanguage] || '');
    setOutput('');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Code Editor</CardTitle>
          <div className="flex items-center gap-2">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={resetCode}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button size="sm" onClick={runCode}>
              <Play className="h-4 w-4 mr-1" />
              Run
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <Editor
            height="400px"
            language={language}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
        {output && (
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-medium mb-2">Output:</p>
            <pre className="text-sm whitespace-pre-wrap font-mono">{output}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
