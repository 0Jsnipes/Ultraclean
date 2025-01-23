import '../../../../styles/ProcessStyles/CleanProcess.css'; 

const Process = () => {
        return (
            <section className="process-section">
            <div className='process-content'>
    <h2>How We Clean Your Kitchen</h2>
    <p>Our kitchen cleaning process is designed to ensure a sanitary and inviting space where you can enjoy cooking and dining.</p>
    <br/>
    <p><strong>Here’s what we do:</strong></p>
    <ul>
        <li>Deep cleaning of countertops and surfaces to remove food particles and disinfect.</li>
        <li>Scrubbing sinks, faucets, and fixtures to prevent lime scale and maintain shine.</li>
        <li>Cleaning appliances inside and out, including the microwave, refrigerator, and oven.</li>
        <li>Mopping floors with special attention to dining and cooking areas to ensure they are spotless and hygienic.</li>
        <li>Organizing cabinets and pantries to improve functionality and accessibility.</li>
    </ul>
    <div className="process-tips">
        <h3>Cleaning Recommendations</h3>
        <p>Regular cleaning is crucial to prevent food contamination and to maintain a pleasant cooking environment.</p>
        <br/>
        <p><strong>We recommend:</strong></p>
        <ul>
            <li>Daily wiping down of surfaces and sink after use to prevent buildup.</li>
            <li>Weekly thorough cleaning of the kitchen, including all appliances and floors.</li>
            <li>Monthly deep cleaning of storage areas and a detailed clean of less accessible spots.</li>
        </ul>
    </div>
</div>


                <div className="process-image">
                    <img src="assets/kitchen-process.jpg" alt="Bathroom Cleaning Process" />
                </div>
            </section>
        );
    };

export default Process;
