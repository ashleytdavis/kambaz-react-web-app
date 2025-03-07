import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function FacultyContent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "FACULTY") {
    return children;
  } else {
    return;
  }
}
