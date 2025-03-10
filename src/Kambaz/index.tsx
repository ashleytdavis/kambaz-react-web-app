import './styles.css';
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from './Dashboard';
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from './Account/ProtectedRoute';
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from './Courses/reducer';
import EnrolledContent from './EnrolledContent';
export default function Kambaz() {
    const dispatch = useDispatch();
    const courses = useSelector((state: any) => state.coursesReducer.courses);

    const handleAddCourse = (course: any) => {
        dispatch(addCourse(course));
    };

    const handleDeleteCourse = (courseId: string) => {
        dispatch(deleteCourse(courseId));
    };

    const handleUpdateCourse = (course: any) => {
        dispatch(updateCourse(course));
    };

    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard
                                courses={courses}
                                addNewCourse={handleAddCourse}
                                deleteCourse={handleDeleteCourse}
                                updateCourse={handleUpdateCourse} />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={
                        <ProtectedRoute>
                            <EnrolledContent>
                                <Courses courses={courses} />
                            </EnrolledContent>
                        </ProtectedRoute>
                    } />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div >
    );
}

