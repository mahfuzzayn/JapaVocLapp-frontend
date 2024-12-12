import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Lesson = () => {
    const { lessonNumber } = useParams();
    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/v1/lessons/${lessonNumber}`
                );
                setLesson(response.data.data);
            } catch (err) {
                setError("Failed to fetch lesson. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchLesson();
    }, [lessonNumber]);

    if (loading) {
        return (
            <div className="lesson flex justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="lesson p-8">
            <h1 className="text-3xl font-bold mb-6 text-cyan-500">
                {lesson?.name}
            </h1>
            <p>Lesson Number: {lesson?.lessonNumber}</p>
            <p>Vocabulary Count: {lesson?.vocabularyCount}</p>
        </div>
    );
};

export default Lesson;
