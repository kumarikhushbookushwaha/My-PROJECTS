import React from 'react';

function WorkeInformationForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h5>Emergency</h5>
      <input name="emergency_contact" placeholder="Emergency Contact" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default WorkeInformationForm;
