"use client";

import { useEffect, useState } from "react";

export default function useSectionTracker(sectionIds: string[]) {

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {

      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          threshold: 0.5,
        }
      );

      observer.observe(element);
      observers.push(observer);

    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };

  }, [sectionIds]);

  return activeSection;
}