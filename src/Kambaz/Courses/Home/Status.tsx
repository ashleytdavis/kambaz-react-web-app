export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ display: "flex", flexDirection: "column" }}>
            <h2>Course Status</h2>
            <div className="wd-publish-btn-group">
                <button className="wd-btn">Unpublish</button>
                <button className="wd-btn">Publish</button>
            </div>
            <br />
            <button className="wd-btn">Import Existing Content</button>
            <button className="wd-btn">Import from Commons</button>
            <button className="wd-btn">Choose Home Page</button>
            <button className="wd-btn"> View Course Stream</button>
            <button className="wd-btn">New Announcement</button>
            <button className="wd-btn">New Analytics</button>
            <button className="wd-btn">View Course Notifications</button>
        </div>);
}