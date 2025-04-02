import './styles.css';
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from './Dashboard';
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from './Account/ProtectedRoute';
import { useSelector } from "react-redux";
import EnrolledContent from './EnrolledContent';
import Session from "./Account/Session";
import { useEffect, useState } from 'react';
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
export default function Kambaz() {

    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
        console.log(courses);
    }, [currentUser]);

    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async (course: any) => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        }))
    };

    const addNewCourse = async (course: any) => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
        console.log(courses);
    };


    return (
        <Session>
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
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />
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
        </Session>
    );
}

