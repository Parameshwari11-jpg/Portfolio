import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseDuration = 1800
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span>{currentText}</span>
      <span 
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.15em',
          background: 'var(--accent-light)',
          marginLeft: '4px',
          animation: 'cursorBlink 1s infinite'
        }}
        aria-hidden="true"
      />
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};
