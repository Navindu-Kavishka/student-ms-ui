import { useEffect, useState } from "react";
import "./UpdateStudent.css"
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateStudent = () => {

    const {id} = useParams();
    
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

    useEffect(()=>{
        const fetchStudent = async () =>{
            try {
                const response = await fetch(`http://localhost:8080/student/get-by-id/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.log("Error Retriving students : ",error.message);
                
            }
        }

        fetchStudent();
    },{id})

  return (
    <div className="center-form">
      <h1>Edit Student Details</h1>
      <Form >
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

export default UpdateStudent
