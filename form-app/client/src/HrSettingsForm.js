import React from 'react';

function HrSettingsForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h5>Family Status</h5>
      <input name="marital_status" placeholder="Marital Status" onChange={handleChange} />
      <input name="dependents" placeholder="Number of Dependents" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default HrSettingsForm;
