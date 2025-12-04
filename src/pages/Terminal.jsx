import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', content: 'NEXUS Terminal Interface v1.0' },
        { type: 'output', content: 'Type "help" for available commands.' },
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            setHistory(prev => [...prev, { type: 'input', content: cmd }]);

            // Process command
            let output = '';
            switch (cmd.toLowerCase()) {
                case 'help':
                    output = 'Available commands: help, clear, scan <target>, list, status, whoami';
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'list':
                    output = 'Targets:\n- 192.168.1.10 (Web)\n- 10.0.0.1 (Gateway)\n- 192.168.1.15 (DB)';
                    break;
                case 'status':
                    output = 'System Status: ONLINE\nCPU: 12%\nMemory: 4.2GB / 16GB\nActive Scans: 2';
                    break;
                case 'whoami':
                    output = 'root@nexus-core';
                    break;
                default:
                    if (cmd.startsWith('scan ')) {
                        output = `Initiating scan on ${cmd.split(' ')[1]}...\n[+] Port 80 open\n[+] Port 443 open\n[+] Scan complete.`;
                    } else {
                        output = `Command not found: ${cmd}`;
                    }
            }

            if (output) {
                setHistory(prev => [...prev, { type: 'output', content: output }]);
            }
            setInput('');
        }
    };

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-cyber-text mb-4">Terminal Access</h2>
            <div className="flex-1 bg-black/80 border border-cyber-accent/30 rounded-lg p-4 font-mono text-sm overflow-hidden flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="flex-1 overflow-auto space-y-1 custom-scrollbar">
                    {history.map((line, i) => (
                        <div key={i} className={`${line.type === 'input' ? 'text-cyber-accent' : 'text-cyber-text'} whitespace-pre-wrap`}>
                            {line.type === 'input' ? '> ' : ''}{line.content}
                        </div>
                    ))}
                    <div ref={bottomRef}></div>
                </div>
                <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-2">
                    <span className="text-cyber-accent">{'>'}</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent border-none outline-none flex-1 text-cyber-text focus:ring-0"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
