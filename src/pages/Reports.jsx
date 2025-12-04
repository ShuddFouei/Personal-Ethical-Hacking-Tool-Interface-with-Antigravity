import React from 'react';
import { Download, FileText, Filter, ChevronDown } from 'lucide-react';

const vulnerabilities = [
    { id: 1, title: 'SQL Injection', severity: 'Critical', target: '192.168.1.10', cve: 'CVE-2023-1234', status: 'Open' },
    { id: 2, title: 'Cross-Site Scripting (XSS)', severity: 'High', target: 'web-server-01', cve: 'CVE-2023-5678', status: 'Open' },
    { id: 3, title: 'Outdated SSL/TLS', severity: 'Medium', target: '10.0.0.1', cve: 'CVE-2022-9999', status: 'Fixed' },
    { id: 4, title: 'Open Port 21 (FTP)', severity: 'Low', target: '192.168.1.15', cve: 'N/A', status: 'Ignored' },
];

const Reports = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cyber-text">Vulnerability Reports</h2>
                <div className="flex gap-3">
                    <button className="cyber-btn flex items-center gap-2">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="cyber-btn flex items-center gap-2 text-cyber-text border-cyber-text/50">
                        <Download size={16} /> Export PDF
                    </button>
                </div>
            </div>

            <div className="cyber-card p-0 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-cyber-muted text-xs uppercase">
                        <tr>
                            <th className="p-4">Vulnerability</th>
                            <th className="p-4">Severity</th>
                            <th className="p-4">Target</th>
                            <th className="p-4">CVE</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {vulnerabilities.map(vuln => (
                            <tr key={vuln.id} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold">{vuln.title}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${vuln.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                                            vuln.severity === 'High' ? 'bg-orange-500/20 text-orange-500' :
                                                vuln.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                                                    'bg-blue-500/20 text-blue-500'
                                        }`}>
                                        {vuln.severity}
                                    </span>
                                </td>
                                <td className="p-4 font-mono text-sm">{vuln.target}</td>
                                <td className="p-4 text-sm text-cyber-muted">{vuln.cve}</td>
                                <td className="p-4">
                                    <span className={`text-sm ${vuln.status === 'Fixed' ? 'text-green-400' : 'text-cyber-text'}`}>
                                        {vuln.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="text-cyber-accent hover:underline text-sm">Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
