import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr />
            <Row xs={1} md={5} className="g-4">
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class1.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS4550 Web Development</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Spring 2025</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class2.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">DS4300 Large Scale Data Storage and Retrieval</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Spring 2025</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class3.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS4400 Programming Languages</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Spring 2025</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class4.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS4700 Network Fundamentals</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Fall 2024</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class5.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS3560 Computer Systems</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Spring 2024</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class6.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS3500 Object Oriented Design</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Summer I 2022</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class7.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS2500 Fundamentals of Computer Science I</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Spring 2022</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class8.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS2510 Fundamentals of Computer Science II</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Fall 2021</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link to="/Kambaz/Courses/1234/Home"
                            className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/class9.gif" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title">CS2501 Lab</Card.Title>
                                <Card.Text className="wd-dashboard-course-description">Fall 2021</Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
