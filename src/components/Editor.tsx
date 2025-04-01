import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import { editor } from 'monaco-editor';

const EditorComponent = () => {
  const [code, setCode] = useState('// Start coding here...');
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Main Editor */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <select className="bg-background-light text-white px-3 py-1 rounded-md border border-gray-700">
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="html">HTML</option>
            </select>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue={code}
            theme="vs-dark"
            onChange={handleCodeChange}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: true },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      {/* AI Chat Panel */}
      <motion.div
        initial={false}
        animate={{ width: isAIChatOpen ? '300px' : '0px' }}
        className="bg-background-light border-l border-gray-800 overflow-hidden"
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <h3 className="text-white font-semibold">AI Assistant</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t border-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask AI for help..."
                className="flex-1 bg-background text-white px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Chat Toggle Button */}
      <button
        onClick={() => setIsAIChatOpen(!isAIChatOpen)}
        className="fixed bottom-4 right-4 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default EditorComponent; 