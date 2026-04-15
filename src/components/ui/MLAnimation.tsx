"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "typewriter" | "slide" | "morph";

interface MLExpansion {
  mWord: string;
  lWord: string;
  connector?: string;
}

const expansions: MLExpansion[] = [
  { mWord: "Machine", lWord: "Learning" },
  { mWord: "Michael", lWord: "Lina", connector: " & " },
  { mWord: "Michael", lWord: "Lucas", connector: " & " },
];

function getFullText(exp: MLExpansion) {
  return exp.mWord + (exp.connector ?? " ") + exp.lWord;
}

function getLIndex(exp: MLExpansion) {
  return exp.mWord.length + (exp.connector ?? " ").length;
}

// Renders a string with M (index 0) and L (at lIndex) highlighted
function HighlightedText({
  text,
  lIndex,
}: {
  text: string;
  lIndex: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => {
        const isHighlight = i === 0 || i === lIndex;
        return (
          <span
            key={i}
            className={
              isHighlight
                ? "bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent"
                : ""
            }
          >
            {char}
          </span>
        );
      })}
    </>
  );
}

// ─── Typewriter ───────────────────────────────────────────────

function Typewriter() {
  const [expIndex, setExpIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">(
    "typing"
  );

  const exp = expansions[expIndex];
  const fullText = getFullText(exp);
  const lIndex = getLIndex(exp);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 70);
      } else {
        timeout = setTimeout(() => setPhase("paused"), 100);
      }
    } else if (phase === "paused") {
      timeout = setTimeout(() => setPhase("deleting"), 2000);
    } else if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
      } else {
        setExpIndex((i) => (i + 1) % expansions.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, fullText.length]);

  const displayText = fullText.slice(0, charIndex);

  return (
    <span className="inline-flex items-baseline">
      <span>
        <HighlightedText text={displayText} lIndex={lIndex} />
      </span>
      <span className="inline-block w-[2px] h-[1em] bg-accent-teal ml-0.5 animate-pulse" />
    </span>
  );
}

// ─── Slide ────────────────────────────────────────────────────

function Slide() {
  const [expIndex, setExpIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpIndex((i) => (i + 1) % expansions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const exp = expansions[expIndex];
  const fullText = getFullText(exp);
  const lIndex = getLIndex(exp);

  return (
    <span className="inline-flex items-baseline overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={expIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <HighlightedText text={fullText} lIndex={lIndex} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── Morph ────────────────────────────────────────────────────

function Morph() {
  const [expIndex, setExpIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpIndex((i) => (i + 1) % expansions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const exp = expansions[expIndex];
  const fullText = getFullText(exp);
  const lIndex = getLIndex(exp);

  return (
    <span className="inline-flex items-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={expIndex}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <HighlightedText text={fullText} lIndex={lIndex} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── Main export ──────────────────────────────────────────────

export default function MLAnimation({
  variant = "typewriter",
}: {
  variant?: Variant;
}) {
  if (variant === "typewriter") return <Typewriter />;
  if (variant === "slide") return <Slide />;
  return <Morph />;
}
