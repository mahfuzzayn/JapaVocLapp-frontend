import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lessons = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/v1/lessons"
                );
                setLessons(response.data.data);
            } catch (err) {
                setError("Failed to fetch lessons. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchLessons();
    }, []);

    const handleLessonClick = (lessonNumber) => {
        navigate(`/lessons/${lessonNumber}`);
    };

    if (loading) {
        return (
            <div className="lessons flex justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="lessons p-8">
            <h1 className="text-3xl font-bold mb-6 text-cyan-500">
                Lessons Page
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {lessons.map((lesson) => (
                    <div
                        key={lesson._id}
                        className="bg-white p-4 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-semibold">{lesson.name}</h2>
                        <p className="text-sm text-gray-600">
                            Lesson Number: {lesson.lessonNumber}
                        </p>
                        <p className="text-sm text-gray-600">
                            Vocabulary Count: {lesson.vocabularyCount}
                        </p>
                        <button
                            onClick={() =>
                                handleLessonClick(lesson.lessonNumber)
                            }
                            className="btn btn-primary mt-4"
                        >
                            Study Lesson
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;
