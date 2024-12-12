import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";

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

    if (!lesson) return <div>Loading lesson...</div>;

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

    const playPronunciation = () => {
        const audio = new Audio(currentVocabulary.pronunciation);
        audio.play();
    };

    return (
        <div className="p-8">
            {showConfetti && <Confetti />}
            <h1 className="text-3xl font-bold mb-4">{lesson.name}</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2
                    className="text-2xl font-semibold cursor-pointer text-blue-500"
                    onClick={playPronunciation}
                >
                    {currentVocabulary.word}
                </h2>
                <p>Pronunciation: {currentVocabulary.pronunciation}</p>
                <p>Meaning: {currentVocabulary.meaning}</p>
                <p>When to Say: {currentVocabulary.whenToSay}</p>
            </div>
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
