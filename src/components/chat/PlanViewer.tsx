'use client';

import { useRef, useState } from 'react';
import { Download, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanViewerProps {
  content: string;
  onClose: () => void;
}

function renderMarkdown(text: string): string {
  let html = text
    .replace(/^### (.+)$/gm, '<h3 style="font-size:16px;font-weight:700;margin:16px 0 8px;color:#304f3a">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size:20px;font-weight:700;margin:24px 0 12px;color:#293f31;border-bottom:2px solid #c9d7c9;padding-bottom:8px">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 style="font-size:26px;font-weight:800;margin:0 0 16px;color:#233529">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<div style="margin:4px 0;padding-left:16px">• $1</div>')
    .replace(/^(\d+)\. (.+)$/gm, '<div style="margin:4px 0;padding-left:16px">$1. $2</div>')
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
  return html;
}

export default function PlanViewer({ content, onClose }: PlanViewerProps) {
  const planRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const downloadPDF = async () => {
    setDownloading(true);

    try {
      // Build standalone HTML string so html2canvas never touches Tailwind's lab() colors
      const htmlString = `<div style="padding:32px;font-size:14px;line-height:1.75;color:#44403c;font-family:Inter,system-ui,sans-serif;background:#ffffff;">${renderMarkdown(content)}</div>`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const html2pdf = (await import('html2pdf.js')).default as any;
      await html2pdf()
        .set({
          margin: [15, 15, 15, 15],
          filename: 'NutriAI-Nutrition-Plan.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(htmlString, 'string')
        .save();
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-sage-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sage-500 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-stone-900">Your Nutrition Plan</h2>
                <p className="text-xs text-stone-500">Personalized by NutriAI</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadPDF}
                disabled={downloading}
                className="flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {downloading ? 'Generating...' : 'Download PDF'}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Plan content */}
          <div className="flex-1 overflow-y-auto chat-scroll">
            <div
              ref={planRef}
              style={{
                padding: '32px',
                fontSize: '14px',
                lineHeight: '1.75',
                color: '#44403c',
                fontFamily: 'Inter, system-ui, sans-serif',
                backgroundColor: '#ffffff',
              }}
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
