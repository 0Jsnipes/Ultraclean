import React from 'react';
import '../../../../styles/ProcessStyles/CleanProcess.css'; // Ensure CSS file name is updated

const Process = () => {
        return (
            <section className="process-section">
                <div className="process-content">
                    <h2>How We Clean Your Bathroom</h2>
                    <p>Our bathroom cleaning process is thorough and tailored to meet the highest standards of hygiene and cleanliness. Here’s what we do:</p>
                    <ul>
                        <li>Sanitization of all surfaces to kill germs and bacteria.</li>
                        <li>Scrubbing of tiles, shower doors, and fixtures to remove soap scum and water stains.</li>
                        <li>Cleaning and polishing of mirrors and glass surfaces to a streak-free shine.</li>
                        <li>Deep cleaning of sinks, toilets, and bathtubs with eco-friendly and powerful cleansers.</li>
                        <li>Detailed attention to corners and hard-to-reach areas to ensure no spot is missed.</li>
                    </ul>
                    <div className="process-tips">
                        <h3>Cleaning Recommendations</h3>
                        <p>Regular cleaning is crucial for maintaining a sanitary bathroom environment. We recommend:</p>
                        <ul>
                            <li>Weekly cleaning for frequently used bathrooms.</li>
                            <li>Bi-weekly cleanings for less frequented bathrooms.</li>
                            <li>Additional deep clean sessions every six months to maintain optimal cleanliness.</li>
                        </ul>
                    </div>
                </div>
                <div className="process-image">
                    <img src="assets/bathroom-process.jpg" alt="Bathroom Cleaning Process" />
                </div>
            </section>
        );
    };

export default Process;
