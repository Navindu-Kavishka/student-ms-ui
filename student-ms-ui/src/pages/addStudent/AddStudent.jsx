
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./AddStudent.css";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {

    const [formData, setFormData] = useState({
        name: "",
        age:"",
        contact:"",
        guardianName:"",
        address:"",
        guardianContact:""
        
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const response = await fetch("http://localhost:8080/student", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            
           const data = await response.json();
           console.log("Student added : ",data);
           navigate("/")

            
        } catch (error) {
            console.error("Error adding student:", error.message);
            // Handle error 
        }
    }


  return (
    <div className="center-form">
      <h1>Student Details</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
            <Form.Control
                type="text"
                name="name"
                placeholder="EnterName"
                value={formData.name}
                onChange={handleInputChange}
            />
        </Form.Group>
        
        <Form.Group controlId="formBasicAge">
            <Form.Control
                type="text"
                name="age"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
            <Form.Control
                type="text"
                name="contact"
                placeholder="Enter Contact No"
                value={formData.contact}
                onChange={handleInputChange}
            />
        </Form.Group>
        <hr />
        <h3>Guardian Details</h3>
        <Form.Group controlId="formBasicGuardianName">
            <Form.Control
                type="text"
                name="guardianName"
                placeholder="Enter Name"
                value={formData.guardianName}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group controlId="formBasicAddress">
            <Form.Control
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group controlId="formBasicGuardianContact">
            <Form.Control
                type="text"
                name="guardianContact"
                placeholder="Enter Guardian Contact"
                value={formData.guardianContact}
                onChange={handleInputChange}
            />
        </Form.Group>

        <Button variant="primary" type="sumbit" className="w-100 mt-2">Save Student</Button>
      </Form>
    </div>
  )
}

export default AddStudent
