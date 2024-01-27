import React from 'react';
import Navigation from './Navigation';
import PuzzleGame from './PuzzleGame';

const PuzzlePage: React.FC = () => {
    return (
        <div className="puzzle-container">
            <Navigation/>
            <PuzzleGame/>
        </div>
    );
}

export default PuzzlePage;