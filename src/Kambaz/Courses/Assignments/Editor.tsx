export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h3>
                <label htmlFor="wd-name">Assignment Name</label>
            </h3>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" rows={10} cols={50}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambaz application Links to all relevant source code repositories The Kambaz application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label><br />
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label><br />
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="POINT">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                        </select>
                        <br />
                        <br />
                        <label>Online Entry Options</label><br />
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                        <br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <span>
                            Assign To
                            <br />
                            <input id="wd-assign-to" value={"Everyone"} />
                        </span>
                        <br />
                        <br />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                        <br />
                        <input id="wd-due-date" type="date" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td />
                    <td style={{ display: "flex" }}>
                        <div>
                            <label htmlFor="wd-available-from">Available from</label>
                            <br />
                            <input id="wd-available-from" type="date" />
                        </div>
                        <div>
                            <label htmlFor="wd-available-until">Until</label>
                            <br />
                            <input id="wd-available-until" type="date" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td /> <td />
                    <td align="right">
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div >
    );
}
