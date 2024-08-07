import React from 'react';

function HrSettingsForm({ handleSubmit, handleChange, generatePin, generateBadgeId }) {
  return (
    <form onSubmit={handleSubmit}>
      <h5>HR Settings</h5>

      <h6>Status</h6>
      <div>
        <label>Employee Type:</label>    
        <input name="employeeType" placeholder="Employee Type" onChange={handleChange} />
      </div>
      <div>
        <label>Related User:</label>    
        <input name="relatedUser" placeholder="Related User" onChange={handleChange} />
      </div>

      <h6>Attendance/Point of Sale</h6>
      <div>
        <label>PIN Code:</label>    
        <input name="pinCode" placeholder="PIN Code" onChange={handleChange} />
        <button type="button" onClick={generatePin}>Generate</button>
      </div>
      <div>
        <label>Badge ID:</label>    
        <input name="badgeId" placeholder="Badge ID" onChange={handleChange} />
        <button type="button" onClick={generateBadgeId}>Generate</button>
      </div>

      <h6>Payroll</h6>
      <div>
        <label>Registration Number of the Employee:</label>    
        <input name="registrationNumber" placeholder="Registration Number" onChange={handleChange} />
      </div>
      <div>
        <label>Job Position:</label>    
        <input name="jobPosition" placeholder="Job Position" onChange={handleChange} />
      </div>

      <h6>Application Settings</h6>
      <div>
        <label>Hourly Cost:</label>    
        <input name="hourlyCost" placeholder="£0.00" onChange={handleChange} />
      </div>
      <div>
        <label>Fleet Mobility Card:</label>    
        <input name="fleetMobilityCard" placeholder="Fleet Mobility Card" onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default HrSettingsForm;
