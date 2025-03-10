import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import StudentContent from "./StudentContent";
export default function EnrolledContent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid } = useParams();
  const enrollments = useSelector(
    (state: any) => state.coursesReducer.enrollments
  );

  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );

  return (
    <StudentContent>
      {isEnrolled ? children : <Navigate to="/Kambaz/Dashboard" />}
    </StudentContent>
  );
}
