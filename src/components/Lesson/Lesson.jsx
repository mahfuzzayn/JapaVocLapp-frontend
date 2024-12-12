import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";
import Vocabulary from "../Vocabulary/Vocabulary";

const Lesson = () => {
    const { lessonNumber } = useParams();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/v1/lessons/${lessonNumber}`
                );
                setLesson(response.data.data);
            } catch (err) {
                console.error("Failed to fetch lesson:", err);
            }
        };

        fetchLesson();
    }, [lessonNumber]);

    if (!lesson)
        return (
            <div className="home flex flex-col items-center my-5">
                <h2 className="text-2xl font-semibold">
                    Loading Lesson with Vocabularies
                </h2>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );

    if (!lesson.vocabularyCount)
        return (
            <div className="home flex flex-col items-center my-5">
                <h2 className="text-2xl font-semibold">
                    There is no vocabulary in this lesson
                </h2>
                <button className="btn btn-primary text-white text-xl mt-4">
                    <Link to="/lessons">Go to Lessons</Link>
                </button>
            </div>
        );

    const { vocabularies } = lesson;
    const currentVocabulary = vocabularies[currentIndex];

    const handleNext = () => {
        if (currentIndex < vocabularies.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setShowConfetti(true);
            setTimeout(() => {
                navigate("/lessons");
            }, 5000);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="p-8">
            {showConfetti && <Confetti />}
            <h1 className="text-3xl font-bold mb-4">{lesson.name}</h1>
            <Vocabulary vocabulary={currentVocabulary} />
            <div className="mt-6 flex justify-between">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="btn btn-secondary"
                >
                    Previous
                </button>
                <button onClick={handleNext} className="btn btn-primary">
                    {currentIndex < vocabularies.length - 1
                        ? "Next"
                        : "Complete"}
                </button>
            </div>
        </div>
    );
};

export default Lesson;
