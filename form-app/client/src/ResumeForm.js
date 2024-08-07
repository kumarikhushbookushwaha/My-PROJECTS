import React from 'react';

function EmployeeProfileForm({ handleSubmit, handleChange }) {
  // Placeholder functions for button click events
  const addEntry = (type) => {
    console.log(`Add new entry for ${type}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Employee Profile</h5>
      <div>
        <label>Name:</label>    
        <input name="name" placeholder="Name" onChange={handleChange} />
      </div>
      <div>
        <label>Position:</label>    
        <input name="position" placeholder="Position" onChange={handleChange} />
      </div>
      <div>
        <label>Department:</label>    
        <input name="department" placeholder="Department" onChange={handleChange} />
      </div>
      <div>
        <label>Work Phone:</label>    
        <input name="workPhone" placeholder="Work Phone" onChange={handleChange} />
      </div>
      <div>
        <label>Job Position:</label>    
        <input name="jobPosition" placeholder="Job Position" onChange={handleChange} />
      </div>
      <div>
        <label>Work Email:</label>    
        <input name="workEmail" placeholder="Work Email" onChange={handleChange} />
      </div>
      <div>
        <label>Manager:</label>    
        <input name="manager" placeholder="Manager" onChange={handleChange} />
      </div>

      <h5>Tabs</h5>
      <div>
        <button type="button">Resume</button>
        <button type="button">Work Information</button>
        <button type="button">Private Information</button>
        <button type="button">HR Settings</button>
      </div>

      <h5>Resume</h5>
      <div>
        <button type="button" onClick={() => addEntry('resume')}>Create a new entry</button>
      </div>

      <h5>Skills</h5>
      <div>
        <button type="button" onClick={() => addEntry('skills')}>Create a new entry</button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeProfileForm;
