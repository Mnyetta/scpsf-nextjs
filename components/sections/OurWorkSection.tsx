"use client";

import { useState, useEffect } from "react";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image_path: string;
}

export default function OurWorkSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const workItems: WorkItem[] = [
    {
      id: 1,
      title: "Legal Aid for Prisoners",
      description:
        "To offer pro bono legal services targeting to prepare applications (Chamber summons and supporting affidavits) for review & revision, application for bail pending appeal, memorandum and or petition of appeal for prisoners, provide free or uncompensated high quality legal aid service, and legal representation to prisoners who cannot afford legal services and or who are not covered by automatic Government legal aid scheme/service. To provide legal education to inmates, prison-based para legal officers more particularly on the right to appeal, revision and review, and prepare strategic litigation for inmates’ appeals, revision, and review.",
      image_path: "/our-work-images/legal aid.jfif",
    },
    {
      id: 2,
      title: "Volunteer Lawyers Program",
      description:
        "Connecting skilled lawyers with prisoners in need of legal support.",
      image_path: "/our-work-images/our-work.jfif",
    },
    {
      id: 3,
      title: "Community Reintegration",
      description:
        "To contribute in ensuring Tanzania National Development Vision 2025–2050 is accessed by having post-released prisoners who are reformed, rejuvenated, rehabilitated, peace and harmony keepers, and are of good character and role models in their society, something that will create a conducive environment for the presence of foreign investors, donors, tourists, and the population at large in conducting economic activities.",
      image_path: "/our-work-images/images2.jfif",
    },
  ];

  useEffect(() => {
    workItems.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, idx]);
      }, idx * 200);
    });
  }, []);

  const toggleOpen = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="our-work-section">
      <h2 className="section-title">Our Work</h2>

      <div className="premium-container">
        {workItems.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          const isVisible = visibleIndexes.includes(idx);
          return (
            <div
              key={item.id}
              className={`timeline-item ${isVisible ? "visible" : ""}`}
            >
              <div className="bullet" />
              <div className="timeline-img">
                <img src={item.image_path} alt={item.title} />
              </div>
              <div className="timeline-content">
                <div
                  className={`timeline-header ${isOpen ? "open" : ""}`}
                  onClick={() => toggleOpen(idx)}
                >
                  <h3>{item.title}</h3>
                  <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
                </div>
                <div className={`timeline-description ${isOpen ? "show" : ""}`}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .our-work-section {
          padding: 60px; /* 60px spacing left and right */
        }

        .section-title {
          text-align: center;
          font-weight: 800;
          font-size: 2.5rem;
          margin-bottom: 50px;
          letter-spacing: 0.6px;
          font-family: "'Montserrat', sans-serif";
          background: linear-gradient(90deg, #1e3a8a, #b91c1c, #1e3a8a);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0px 3px 10px rgba(0,0,0,0.18);
        }

        .premium-container {
          position: relative;
          padding: 40px;
          background: linear-gradient(135deg, #f0f3f8 0%, #e1e7ee 100%);
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
          position: relative;
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .timeline-item.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .bullet {
          position: absolute;
          left: -12px;
          top: 20px;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #1e3a8a, #e21b1b);
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          animation: pulse 2s infinite alternate;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 8px rgba(226,27,27,0.6); }
          100% { box-shadow: 0 0 20px rgba(30,58,138,0.6); }
        }

        .timeline-img img {
          width: 200px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 10px 20px;
          border-radius: 12px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .timeline-header:hover, .timeline-header.open {
          background: linear-gradient(90deg, #f1f5f9, #e2e8f0);
        }

        .timeline-header h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: bold;
          color: #1e3a8a;
        }

        .toggle-icon {
          font-size: 1.5rem;
          color: #E21B1B;
          transition: all 0.3s ease;
        }

        .timeline-description {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.4s ease;
          opacity: 0;
          margin-top: 10px;
        }

        .timeline-description.show {
          max-height: 500px;
          opacity: 1;
        }

        .timeline-description p {
          margin: 0;
          line-height: 1.6;
          color: #1e3a8a; /* maintain original text color */
        }

        @media (max-width: 768px) {
          .timeline-img img { width: 120px; }
        }
      `}</style>
    </section>
  );
}