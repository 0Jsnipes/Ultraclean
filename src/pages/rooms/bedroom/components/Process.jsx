import '../../../../styles/ProcessStyles/CleanProcess.css'; 

const Process = () => {
        return (
            <section className="process-section">
            <div className='process-content'>
    <h2>How We Clean Your Bedroom</h2>
    <p>Our bedroom cleaning process is designed to create a serene and hygienic environment where you can relax and recharge.</p>
    <br/>
    <p><strong>Here’s what we do:</strong></p>
    <ul>
        <li>Dusting of all surfaces to remove allergens and dust particles.</li>
        <li>Vacuuming carpets and rugs, including under the bed and other furniture.</li>
        <li>Cleaning windows, mirrors, and any glass surfaces to a streak-free shine.</li>
        <li>Changing bed linens and fluffing pillows to ensure a comfortable sleeping area.</li>
        <li>Organizing and tidying up to create a clutter-free space that promotes relaxation.</li>
    </ul>
    <div className="process-tips">
        <h3>Cleaning Recommendations</h3>
        <p>Regular cleaning is essential for a refreshing sleep environment and maintaining air quality.</p>
        <br/>
        <p><strong>We recommend:</strong></p>
        <ul>
            <li>Weekly cleaning for optimal freshness, especially for allergy sufferers.</li>
            <li>Monthly deep cleaning of carpets and curtains to remove deeper dirt and allergens.</li>
            <li>Seasonal organization sessions to keep your space serene and manageable.</li>
        </ul>
    </div>
</div>

                <div className="process-image">
                    <img src="assets/bedroom-process.jpg" alt="Bathroom Cleaning Process" />
                </div>
            </section>
        );
    };

export default Process;
