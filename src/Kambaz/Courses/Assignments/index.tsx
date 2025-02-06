import { ListGroup } from "react-bootstrap";
import { BsGripVertical, BsCaretDownFill, BsSearch, BsPlusLg } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import AssignmentControlButtonGroup from "./AssignmentControlButtonGroup";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="position-relative w-25">
                    <BsSearch className="position-absolute top-50 translate-middle-y text-secondary" style={{ left: "12px" }} />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="form-control ps-5"
                    />
                </div>
                <div>
                    <button className="btn btn-light me-2">
                        <BsPlusLg className="me-1" />
                        Group
                    </button>
                    <button className="btn btn-danger">
                        <BsPlusLg className="me-1" />
                        Assignment
                    </button>
                </div>
            </div>

            <ListGroup className="rounded-0">
                <ListGroup.Item className="p-0">
                    <div className="d-flex align-items-center bg-light p-3">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2" />
                            <BsCaretDownFill className="me-2" />
                            <span className="fw-bold">ASSIGNMENTS</span>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                            <span className="rounded-pill border border-secondary px-3 py-1 me-2">
                                40% of Total
                            </span>
                            <BsPlusLg className="me-2 fs-5" />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>

                    <ListGroup className="rounded-0">
                        {[
                            {
                                id: "A1",
                                title: "ENV + HTML",
                                date: "May 6",
                                dueDate: "May 13",
                                points: "100"
                            },
                            {
                                id: "A2",
                                title: "CSS + BOOTSTRAP",
                                date: "May 13",
                                dueDate: "May 20",
                                points: "100"
                            },
                            {
                                id: "A3",
                                title: "JAVASCRIPT + REACT",
                                date: "May 20",
                                dueDate: "May 27",
                                points: "100"
                            }
                        ].map((assignment) => (
                            <ListGroup.Item
                                key={assignment.id}
                                className="border-1"
                            >
                                <div className="d-flex align-items-center py-2">
                                    <BsGripVertical className="me-2 text-secondary" />
                                    <FaRegListAlt className="me-2 text-success" />
                                    <div className="flex-grow-1">
                                        <a href="#/Kambaz/Courses/1234/Assignments/123"
                                            className="wd-assignment-link fw-bold text-decoration-none text-dark" >
                                            {assignment.id} - {assignment.title}
                                        </a>
                                        <br />
                                        <small>
                                            <span className="text-danger">Multiple Modules</span>
                                            <span className="text-secondary"> | Not available until {assignment.date} at 12:00am |</span>
                                            <br />
                                            <span className="text-secondary">Due {assignment.dueDate} at 11:59pm | {assignment.points} pts</span>
                                        </small>
                                    </div>
                                    <AssignmentControlButtonGroup />
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
