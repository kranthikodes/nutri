'use client';

import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import type { Message } from '@/types';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, messages[messages.length - 1]?.content]);

  return (
    <div className="flex-1 overflow-y-auto chat-scroll px-4 py-6 space-y-4">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
