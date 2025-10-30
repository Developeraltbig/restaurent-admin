import React, { useState, useRef, useEffect, useMemo } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

const Qr = () => {
    // IMPORTANT: Replace this with your actual website's menu URL
    const BASE_URL = 'https://your-restaurant-website.com/menu';

    // State for the input field
    const [tableNumberInput, setTableNumberInput] = useState('');
    
    // State to store the history of generated QR codes
    const [qrHistory, setQrHistory] = useState(() => {
        // Load history from localStorage on initial render
        const savedHistory = localStorage.getItem('qrHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    
    // State for the search filter
    const [searchTerm, setSearchTerm] = useState('');

    // A ref to the QR code preview element for downloading
    const qrCodeRef = useRef(null);

    // Effect to save history to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('qrHistory', JSON.stringify(qrHistory));
    }, [qrHistory]);

    // Function to generate the QR code
    const handleGenerateQrCode = () => {
        if (!tableNumberInput.trim()) {
            alert('Please enter a table number.');
            return;
        }

        const newQrCode = {
            id: Date.now(),
            table: tableNumberInput.trim(),
            // Embed the table number as a URL query parameter
            url: `${BASE_URL}?table=${encodeURIComponent(tableNumberInput.trim())}`,
            date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
        };

        // Add to the beginning of the history array
        setQrHistory([newQrCode, ...qrHistory]);
        // Clear the input field
        setTableNumberInput('');
    };

    // Function to download the QR code from the preview
    const handleDownload = () => {
        if (!qrCodeRef.current) return;
        
        toPng(qrCodeRef.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `qr-code-table-${tableNumberInput}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to download QR code', err);
            });
    };

    // Function to delete a QR code from history
    const handleDelete = (id) => {
        setQrHistory(qrHistory.filter((qr) => qr.id !== id));
    };

    // Memoized filtered history for performance
    const filteredHistory = useMemo(() => {
        return qrHistory.filter(qr => 
            qr.table.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [qrHistory, searchTerm]);

    return (
        <main className="flex-1 p-6 lg:p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-text-light-primary dark:text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">QR Code Generator</h1>
                        <p className="text-text-light-secondary dark:text-dark-secondary text-base font-normal leading-normal">Create, view, and manage QR codes for your tables.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Generator and Preview */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                            <h2 className="text-text-light-primary dark:text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-2">Create New QR Code</h2>
                            <p className="text-text-light-secondary dark:text-dark-secondary text-sm font-normal leading-normal pb-4">Enter a table number to generate a unique QR code.</p>
                            <label className="flex flex-col w-full">
                                <p className="text-text-light-primary dark:text-dark-primary text-base font-medium leading-normal pb-2">Table Number</p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary dark:text-dark-primary focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                                    placeholder="Enter table number, e.g., '12A'"
                                    value={tableNumberInput}
                                    onChange={(e) => setTableNumberInput(e.target.value)}
                                />
                            </label>
                            <button onClick={handleGenerateQrCode} disabled={!tableNumberInput.trim()} className="mt-4 flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                                <span className="material-symbols-outlined">qr_code_2_add</span>
                                <span className="truncate">Generate QR Code</span>
                            </button>
                        </div>
                        
                        {/* Preview Section - Only shows when there's input */}
                        {tableNumberInput && (
                            <div className="bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex flex-col items-center gap-6">
                                <h3 className="text-text-light-primary dark:text-dark-primary text-lg font-bold">Preview for Table: {tableNumberInput}</h3>
                                <div ref={qrCodeRef} className="bg-white p-4 rounded-lg">
                                    <QRCode value={`${BASE_URL}?table=${encodeURIComponent(tableNumberInput.trim())}`} size={192} />
                                </div>
                                <button onClick={handleDownload} className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                                    <span className="material-symbols-outlined">download</span>
                                    <span className="truncate">Download QR Code</span>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {/* Right Column: History */}
                    <div className="lg:col-span-2 bg-content-light dark:bg-content-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
                            <h2 className="text-text-light-primary dark:text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em]">Generated QR History</h2>
                            <div className="relative w-full sm:w-64">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">search</span>
                                <input
                                    className="form-input w-full rounded-lg text-sm pl-10 pr-4 py-2 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-light-primary dark:text-dark-primary placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                    placeholder="Search by table number..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        {filteredHistory.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="border-b border-border-light dark:border-border-dark">
                                        <tr>
                                            <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Table Number</th>
                                            <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary">Generated On</th>
                                            <th className="p-4 text-sm font-semibold text-text-light-secondary dark:text-dark-secondary text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredHistory.map((qr) => (
                                            <tr key={qr.id} className="border-b border-border-light dark:border-border-dark last:border-0 hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                                <td className="p-4 font-medium text-text-light-primary dark:text-dark-primary">{qr.table}</td>
                                                <td className="p-4 text-text-light-secondary dark:text-dark-secondary">{qr.date}</td>
                                                <td className="p-4">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button onClick={() => handleDelete(qr.id)} aria-label={`Delete QR code for ${qr.table}`} className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-danger dark:text-danger/80 transition-colors">
                                                            <span className="material-symbols-outlined text-xl">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center py-16">
                                <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600 mb-4">qr_code_scanner</span>
                                <h3 className="text-lg font-semibold text-text-light-primary dark:text-dark-primary">
                                    {qrHistory.length > 0 ? 'No Matching Results' : 'No QR Codes Generated Yet'}
                                </h3>
                                <p className="text-sm text-text-light-secondary dark:text-dark-secondary mt-1">
                                    {qrHistory.length > 0 ? 'Try a different search term.' : 'Use the form on the left to create your first QR code.'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Qr;