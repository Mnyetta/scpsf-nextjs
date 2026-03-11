"use client";

import { useState, useRef, useEffect } from "react";

interface PopupModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function PopupModal({ title, isOpen, onClose, children }: PopupModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);

  // Drag handlers
  const startDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMaximized) return;
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onDrag = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const stopDrag = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  });

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      style={{
        position: "fixed",
        top: isMaximized ? 0 : position.y,
        left: isMaximized ? 0 : position.x,
        width: isMaximized ? "100%" : 600,
        height: isMaximized ? "100%" : 400,
        background: "white",
        border: "2px solid #1e3a8a",
        borderRadius: 8,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1e3a8a",
          color: "white",
          padding: "8px 12px",
          cursor: isMaximized ? "default" : "move",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onMouseDown={startDrag}
      >
        <span>{title}</span>
        <div>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            style={{ marginRight: 8, cursor: "pointer" }}
          >
            {isMaximized ? "🗗" : "🗖"}
          </button>
          <button onClick={onClose} style={{ cursor: "pointer" }}>
            ✖
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 12,
        }}
      >
        {children}
      </div>
    </div>
  );
}