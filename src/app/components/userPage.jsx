import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/index";
import QualiitiesList from "./qualiitiesList";

const UserPage = () => {
    const [currentUser, setCurrentUser] = useState();
    const params = useParams();
    const { userId } = params;
    useEffect(() => {
        api.users.getById(userId).then((data) => setCurrentUser(data));
    }, []);
    if (currentUser) {
        return (
            <div>
                <h1>{currentUser.name}</h1>
                <h2>Профессия:{currentUser.profession.name}</h2>
                <QualiitiesList qualities={currentUser.qualities} />
                <h2>Встретился, раз: {currentUser.completedMeetings}</h2>
                <h2>Оценка: {currentUser.rate}</h2>
                <Link to="/users">
                    <button>Все пользователи</button>
                </Link>
            </div>
        );
    }
    return <h1>Loading...</h1>;
};

export default UserPage;
