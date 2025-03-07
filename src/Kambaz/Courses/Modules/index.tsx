import { addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import ModulesControls from "./ModulesControls";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModulesControlButton from "./ModulesControlButton";
import LessonControlButtons from "./LessonControlButtons";
import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FacultyContent from "../../FacultyContent";

export default function Modules() {
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const [moduleName, setModuleName] = useState("");
    return (
        <div>
            <FacultyContent>
                <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
                    dispatch(addModule({ name: moduleName, course: cid }));
                    setModuleName("");
                }} />
            </FacultyContent>

            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                        onChange={(e) => dispatch(
                                            updateModule({ ...module, name: e.target.value })
                                        )}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...module, editing: false }));

                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}
                                <ModulesControlButton moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        dispatch(deleteModule(moduleId));
                                    }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))} />
                            </div>
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                        </li>
                                    ))}</ul>)}</li>))}
            </ul>
        </div >
    );
}
