'use client';

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Message } from '@/types';

export default function MessageBubble({ message }: { message: Message }) {
  const isAI = message.role === 'assistant';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn('flex gap-2', isAI ? 'justify-start' : 'justify-end')}
    >
      {isAI && (
        <div className="w-7 h-7 bg-sage-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Leaf className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
          isAI
            ? 'bg-stone-100 text-stone-800 rounded-tl-sm'
            : 'bg-sage-500 text-white rounded-tr-sm'
        )}
      >
        {/* Render markdown-like content for AI messages */}
        {isAI ? (
          <div
            className="prose prose-sm prose-stone max-w-none [&>h1]:text-lg [&>h1]:font-bold [&>h1]:mt-4 [&>h1]:mb-2 [&>h2]:text-base [&>h2]:font-bold [&>h2]:mt-3 [&>h2]:mb-1.5 [&>h3]:text-sm [&>h3]:font-semibold [&>h3]:mt-2 [&>h3]:mb-1 [&>p]:my-1.5 [&>ul]:my-1.5 [&>ul]:pl-4 [&>ol]:my-1.5 [&>ol]:pl-4 [&>li]:my-0.5 [&>table]:my-2 [&>table]:text-xs [&>hr]:my-3"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
          />
        ) : (
          message.content
        )}
      </div>
    </motion.div>
  );
}

function renderMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(new RegExp('(<li>.*</li>)', 's'), '<ul>$1</ul>')
    .replace(/^---$/gm, '<hr/>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br/>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return match;
    });
}
