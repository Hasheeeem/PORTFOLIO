import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'code';
  delay: number;
}

export const AnimatedTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines: TerminalLine[] = [
    { text: '$ whoami', type: 'command', delay: 500 },
    { text: '> Hasheem - Full-Stack Developer & Founder', type: 'output', delay: 800 },
    { text: '', type: 'output', delay: 500 },
    { text: '$ cat about.json', type: 'command', delay: 600 },
    { text: '{', type: 'code', delay: 300 },
    { text: '  "name": "Hasheem",', type: 'code', delay: 300 },
    { text: '  "role": "Developer × Founder × Creator",', type: 'code', delay: 300 },
    { text: '  "company": "ZYPHER",', type: 'code', delay: 300 },
    { text: '  "passion": "Building the Future"', type: 'code', delay: 300 },
    { text: '}', type: 'code', delay: 300 },
    { text: '', type: 'output', delay: 500 },
    { text: '$ ls ./skills', type: 'command', delay: 600 },
    { text: 'React  TypeScript  Node.js  Python  AI/ML  Mobile', type: 'output', delay: 800 },
    { text: '', type: 'output', delay: 500 },
    { text: '$ echo $STATUS', type: 'command', delay: 600 },
    { text: '✓ Available for new projects', type: 'output', delay: 800 },
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      // Reset and loop
      const timer = setTimeout(() => {
        setCurrentLine(0);
        setDisplayedText('');
      }, 3000);
      return () => clearTimeout(timer);
    }

    const line = terminalLines[currentLine];
    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (charIndex < line.text.length) {
        setDisplayedText(line.text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
        }, line.delay);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'output':
        return 'text-gray-300';
      case 'code':
        return 'text-blue-300';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 text-sm ml-4 font-mono">
              hasheem@terminal:~
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm min-h-[400px] max-h-[500px] overflow-hidden">
            <AnimatePresence mode="sync">
              {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${getLineColor(line.type)} leading-relaxed`}
                >
                  {index === currentLine ? (
                    <span>
                      {displayedText}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-green-400 ml-1"
                        />
                      )}
                    </span>
                  ) : (
                    line.text
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};