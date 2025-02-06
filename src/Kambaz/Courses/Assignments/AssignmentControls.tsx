import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AssignmentControls = () => {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <Col>
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>
                <InputGroup>
                    <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
            </Col>
        </div>
    );
}

export default AssignmentControls