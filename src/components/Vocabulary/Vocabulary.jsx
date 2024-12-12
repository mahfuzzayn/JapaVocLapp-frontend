import React from "react";
import { AiFillSound } from "react-icons/ai";

const Vocabulary = ({ vocabulary }) => {
    const handlePronunciation = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="word-name flex items-center gap-x-2">
                <h2 className="text-3xl font-semibold cursor-pointer text-blue-500">
                    {vocabulary.word}
                </h2>
                <AiFillSound
                    className="cursor-pointer"
                    size={28}
                    color="gray"
                    onClick={() => handlePronunciation(vocabulary.word)}
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <p className="text-xl font-medium">
                    Meaning:
                    <span className="font-normal ml-2">
                        {vocabulary.meaning}
                    </span>
                </p>
                <p className="text-xl font-medium">
                    Pronunciation:
                    <span className="font-normal ml-2">
                        {vocabulary.pronunciation}
                    </span>
                </p>
                <p className="text-xl font-medium">
                    Meaning:
                    <span className="font-normal ml-2">
                        When To Say: {vocabulary.whenToSay}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Vocabulary;
