import { Link } from "react-router-dom";
import { Button, Card, Col, Row, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FacultyContent from "../FacultyContent";
import { useState } from "react";
import { enrollCourse } from "../Courses/reducer";
import StudentContent from "../StudentContent";
import * as courseClient from "../Courses/client"

export default function Dashboard(
    { courses, addNewCourse, deleteCourse, updateCourse, setCourses, fetchCourses }: {
        courses: any[]; addNewCourse: (course: any) => void; deleteCourse: (courseId: string) => void;
        updateCourse: (course: any) => void; setCourses: () => void; fetchCourses: () => void;
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({});
    const [showAllCourses, setShowAllCourses] = useState(false);

    const handleAddCourse = () => {
        addNewCourse(course);
        setCourse({});
    };

    const handleUpdateCourse = () => {
        updateCourse(course);
        setCourse({});
    };

    const handleEnroll = (courseId: string) => {
        courseClient.handleEnroll(currentUser._id, courseId)
        dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    };

    const handleShowCourses = () => {
        setShowAllCourses(!showAllCourses)
        if (showAllCourses) {
            fetchCourses();
        } else {
            setCourses();
        }

    }

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <FacultyContent>
                <h5>New Course
                    <button className="btn btn-danger float-end"
                        id="wd-add-new-course-click"
                        onClick={handleAddCourse}> Add </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={handleUpdateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br />
                <FormControl value={course.name || ''} className="mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <FormControl value={course.description || ''}
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <hr />
            </FacultyContent>
            <StudentContent>
                <Button
                    className="float-end mb-3"
                    variant="primary"
                    onClick={handleShowCourses}
                >
                    {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
                </Button>
            </StudentContent>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses.map((course) => (
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img src={course.image_filepath} variant="top" width="100%" height={160} />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name} </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                            {course.description} </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="danger"> Go </Button>
                                            <FacultyContent>
                                                <Button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-danger me-2">
                                                    Edit
                                                </Button>
                                                <Button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </Button>

                                            </FacultyContent>
                                            <StudentContent>
                                                {currentUser && (
                                                    course.isEnrolled
                                                        ? (
                                                            <Button
                                                                variant="danger"
                                                                onClick={handleEnroll(course._id)}
                                                            >
                                                                Unenroll
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                variant="success"
                                                                onClick={handleEnroll(course._id)}
                                                            >
                                                                Enroll
                                                            </Button>
                                                        )
                                                )}
                                            </StudentContent>
                                        </div>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div >
    );
}