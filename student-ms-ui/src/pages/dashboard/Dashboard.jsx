import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        const fetchStudents = async () => {
            try {
                const response = await fetch("http://localhost:8080/student/all");
                const data= await response.json();
                setStudents(data);
            } catch (error) {
                console.log("Error Retriving students : ",error.message);
                
            }
        }
        fetchStudents();
    }, []);

    const handleDelete = async (studentId)=>{
        try {
            const response = await fetch(`http://localhost:8080/student/delete/${studentId}`,{
                method:"DELETE",
            });

            if(response.ok){
                setStudents((prevStudents) => 
                    prevStudents.filter((student) => student.id !== studentId)
                )
            }
            console.log("Student Deleted Successfully...");
            

        } catch (error) {
            console.log("Error! Delete Failed :",error.message);
            
        }
    }

    const handleUpdate = (studentId) =>{
        navigate(`/student/${studentId}`);
    }

  return (
    <>
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="text-center">Students</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </thead>

                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.contact}</td>
                                    <td>{student.address}</td>
                                    <td>
                                    <Button variant="outline-secondary" onClick={()=>handleUpdate(student.id)}>Update</Button>{" "}
                                    <Button className="" variant="outline-danger" onClick={()=>handleDelete(student.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Dashboard
