import React from "react";
import { CERTIFICATIONS } from "../constants";

const Certification = () => {
  return (
    <div>
      <section className="px-6 py-10 mb-5 mt-3" id="certification">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          Certifications
        </h1>
        <div className="h-1 w-20 mb-8 bg-white"></div>

        <div className="space-y-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-white mb-4">{cert.certificateName}</h2>
              <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                {cert.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certification;

