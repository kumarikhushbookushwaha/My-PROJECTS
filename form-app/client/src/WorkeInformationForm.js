import React from 'react';

function WorkeInformationForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h5>Employee Work Information</h5>
      
      <h5>Location</h5>
      <div>
        <label>Work Address:</label>    
        <input name="workAddress" placeholder="anwarb.com" onChange={handleChange} />
      </div>
      <div>
        <label>Work Location:</label>    
        <input name="workLocation" placeholder="India" onChange={handleChange} />
      </div>

      <h5>Approvers</h5>
      <div>
        <label>Expense?</label>    
        <input type="checkbox" name="expense" onChange={handleChange} />
      </div>
      <div>
        <label>Time Off?</label>    
        <input type="checkbox" name="timeOff" onChange={handleChange} />
      </div>

      <h5>Schedule</h5>
      <div>
        <label>Working Hours:</label>    
        <input name="workingHours" placeholder="Standard 40 hours/week" onChange={handleChange} />
      </div>
      <div>
        <label>Timezone:</label>    
        <input name="timezone" placeholder="Asia/Calcutta" onChange={handleChange} />
      </div>

      <h5>Planning</h5>
      <div>
        {/* Additional fields for Planning can be added here */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default WorkeInformationForm;
