import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <Container className="mt-4">
            <Form>
                <Form.Group className="mb-4">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control type="text" value="A1" />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Control
                        as="textarea"
                        rows={6}
                        value="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambaz application Links to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page."
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Col md={3}>
                        <Form.Label className="text-end d-block">Points</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Control type="number" value={100} />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={3}>
                        <Form.Label className="text-end d-block">Assignment Group</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Select>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={3}>
                        <Form.Label className="text-end d-block">Display Grade as</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Form.Select>
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="POINT">Points</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={3}>
                        <Form.Label className="text-end d-block">Submission Type</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Card>
                            <Card.Body>
                                <Form.Select className="mb-3">
                                    <option value="ONLINE">Online</option>
                                </Form.Select>

                                <Form.Label>Online Entry Options</Form.Label>
                                <Form.Check type="checkbox" label="Text Entry" id="text-entry" />
                                <Form.Check type="checkbox" label="Website URL" id="website-url" checked />
                                <Form.Check type="checkbox" label="Media Recordings" id="media-recordings" />
                                <Form.Check type="checkbox" label="Student Annotation" id="student-annotation" />
                                <Form.Check type="checkbox" label="File Uploads" id="file-uploads" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={3}>
                        <Form.Label className="text-end d-block">Assign</Form.Label>
                    </Col>
                    <Col md={9}>
                        <Card>
                            <Card.Body>
                                <Form.Label>Assign to</Form.Label>
                                <Form.Control type="text" value="Everyone" className="mb-3" />

                                <Form.Label>Due</Form.Label>
                                <Form.Control type="datetime-local" className="mb-3" />

                                <Row>
                                    <Col>
                                        <Form.Label>Available from</Form.Label>
                                        <Form.Control type="datetime-local" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Until</Form.Label>
                                        <Form.Control type="datetime-local" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <hr />

                <div className="d-flex justify-content-end gap-2">
                    <Button variant="light">Cancel</Button>
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </Container>
    );
}
