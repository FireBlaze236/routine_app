import "./Dashboard.css";

const Dashboard = ()=>{
    return(
        <div className="dashboard">
            <h1>
                Welcome <span className="user_name"> Bro </span>
            </h1>
            <button className="dashboard_button">Create New Routine</button>
            <button className="dashboard_button">Manage your routines</button>
            <button className="logout_button"> Logout </button>
        </div>
    );
}

export default Dashboard;