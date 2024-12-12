import React from "react";

const Vocabulary = ({ word, pronunciation, meaning, whenToSay }) => {
    const handlePronunciation = () => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="vocabulary-card p-4 border rounded shadow">
            <h2
                className="text-2xl font-semibold cursor-pointer text-blue-600 hover:underline"
                onClick={handlePronunciation}
            >
                {word}
            </h2>
            <p className="text-gray-600 italic">
                Pronunciation: {pronunciation}
            </p>
            <p className="text-gray-800">Meaning: {meaning}</p>
            <p className="text-gray-800">When to Say: {whenToSay}</p>
        </div>
    );
};

export default Vocabulary;
