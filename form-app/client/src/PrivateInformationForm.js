import React from 'react';

function PersonalInformationForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h5>Private Contact</h5>
      <div>
        <label>Name:</label>    
        <input name="name" placeholder="Name" onChange={handleChange} />
      </div>
      <div>
        <label>Address:</label>    
        <input name="address" placeholder="Address" onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>    
        <input name="email" placeholder="Email" onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>    
        <input name="phone" placeholder="Phone" onChange={handleChange} />
      </div>

      <h5>Private Information</h5>
      <div>
        <label>Language Spoken at Home:</label>    
        <input name="language" placeholder="Language Spoken at Home" onChange={handleChange} />
      </div>
      <div>
        <label>Home-Work Distance (Km):</label>    
        <input name="distance" placeholder="Home-Work Distance (Km)" onChange={handleChange} />
      </div>
      <div>
        <label>Private Car Plate:</label>    
        <input name="carPlate" placeholder="Private Car Plate" onChange={handleChange} />
      </div>

      <h5>HR Settings</h5>
      {/* Add HR settings fields here */}

      <h5>Family Status</h5>
      <div>
        <label>Marital Status:</label>    
        <input name="maritalStatus" placeholder="Marital Status" onChange={handleChange} />
      </div>
      <div>
        <label>Number of Dependent Children:</label>    
        <input name="dependentChildren" placeholder="Number of Dependent Children" onChange={handleChange} />
      </div>

      <h5>Emergency Contact</h5>
      <div>
        <label>Emergency Contact Name:</label>    
        <input name="emergencyName" placeholder="Emergency Contact Name" onChange={handleChange} />
      </div>
      <div>
        <label>Emergency Contact Phone:</label>    
        <input name="emergencyPhone" placeholder="Emergency Contact Phone" onChange={handleChange} />
      </div>

      <h5>Citizenship</h5>
      <div>
        <label>Nationality (Country):</label>    
        <input name="nationality" placeholder="Nationality (Country)" onChange={handleChange} />
      </div>
      <div>
        <label>Identification No.:</label>    
        <input name="identificationNo" placeholder="Identification No." onChange={handleChange} />
      </div>
      <div>
        <label>Passport No.:</label>    
        <input name="passportNo" placeholder="Passport No." onChange={handleChange} />
      </div>
      <div>
        <label>Place of Birth:</label>    
        <input name="placeOfBirth" placeholder="Place of Birth" onChange={handleChange} />
      </div>
      <div>
        <label>Gender:</label>    
        <input name="gender" placeholder="Gender" onChange={handleChange} />
      </div>
      <div>
        <label>
          <input type="checkbox" name="nonResident" onChange={handleChange} />
          Non-resident
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonalInformationForm;
