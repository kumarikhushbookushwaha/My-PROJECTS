import React from 'react';

function ResumeForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h5>Resume</h5>
      <input name="education_level" placeholder="Education Level" onChange={handleChange} />
      <input name="field_of_study" placeholder="Field of Study" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ResumeForm;
