SQL CREATE DATABASE form_db; 
USE form_db;CREATE TABLE form_data (     
    id INT AUTO_INCREMENT PRIMARY KEY,     
    name VARCHAR(255),     
    contact VARCHAR(255),     
    address VARCHAR(255),     
    marital_status VARCHAR(255),     
    dependents INT,     
    emergency_contact VARCHAR(255),     
    education_level VARCHAR(255),     
    field_of_study VARCHAR(255),     
    nationality VARCHAR(255),     
    passport_number VARCHAR(255),     
    visa_type VARCHAR(255),     
    visa_expiry DATE ); 