import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class1.gif" width={200} />
                        <div>
                            <h5> CS4550 Web Development </h5>
                            <p className="wd-dashboard-course-title">
                                Spring 2025  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class2.gif" width={200} />
                        <div>
                            <h5> DS4300 Large Scale Data Storage and Retrieval</h5>
                            <p className="wd-dashboard-course-title">
                                Spring 2025  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class3.gif" width={200} />
                        <div>
                            <h5> CS4400 Programming Languages </h5>
                            <p className="wd-dashboard-course-title">
                                Spring 2025  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class4.gif" width={200} />
                        <div>
                            <h5> CS4700 Network Fundamentals </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2024  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class5.gif" width={200} />
                        <div>
                            <h5> CS3560 Computer Systems </h5>
                            <p className="wd-dashboard-course-title">
                                Spring 2024  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class6.gif" width={200} />
                        <div>
                            <h5> CS3500 Object Oriented Design </h5>
                            <p className="wd-dashboard-course-title">
                                Summer I 2022  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class7.gif" width={200} />
                        <div>
                            <h5> CS2500 Fundamentals of Computer Science I </h5>
                            <p className="wd-dashboard-course-title">
                                Spring 2022  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class8.gif" width={200} />
                        <div>
                            <h5> CS2510 Fundamentals of Computer Science II </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2021  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div><div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/class9.gif" width={200} />
                        <div>
                            <h5> CS2501 Lab </h5>
                            <p className="wd-dashboard-course-title">
                                Fall 2021  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
