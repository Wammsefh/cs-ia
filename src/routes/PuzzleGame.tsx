import React, { useEffect, useState } from 'react';
import PuzzleImg1 from '../images/puzzle.jpeg';
import PuzzleImg2 from '../images/puzzle2.jpeg';
import PuzzleImg3 from '../images/puzzle3.jpeg';

type Piece = {
    id: number;
    backgroundImage: string;
    backgroundPosition: string;
}

const puzzleSize = 400;

const puzzleImgs = [
    PuzzleImg1,
    PuzzleImg2,
    PuzzleImg3,
];

const PuzzleGame: React.FC = () => {
    const [difficulty, setDifficulty] = useState<number>(3);
    const [gridSize, setGridSize] = useState<number>(difficulty);
    const [pieces, setPieces] = useState<Piece[]>([]);
    const [emptyIndex, setEmptyIndex] = useState<number>(gridSize * gridSize - 1);
    const [imgIndex, setImgIndex] = useState<number>(0);

    useEffect(() => {
        initPieces();
        setEmptyIndex(gridSize * gridSize - 1);
    }, [gridSize, imgIndex]);

    useEffect(() => {
        setGridSize(difficulty);
    }, [difficulty]);

    const handleDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDifficulty = parseInt(event.target.value);
        const newImgIndex = parseInt(event.target.value) - 3;
        setDifficulty(newDifficulty);
        setImgIndex(newImgIndex);
    };

    const checkWin = () => {
        return pieces.every((piece, index) => piece.id === index);
    }

    const canSwap = (index: number) => {
        if (index < 0 || index >= gridSize * gridSize) return false;
        const pieceX = index % gridSize;
        const pieceY = Math.floor(index / gridSize);
        const emptyX = emptyIndex % gridSize;
        const emptyY = Math.floor(emptyIndex / gridSize);

        const check = (Math.abs(pieceX - emptyX) === 1 && pieceY === emptyY) || (Math.abs(pieceY - emptyY) === 1 && pieceX === emptyX);
        return check;
    }

    const swapPieces = (index: number) => {
        if (!canSwap(index)) return;

        let newPieces = [...pieces];
        [newPieces[emptyIndex], newPieces[index]] = [newPieces[index], newPieces[emptyIndex]];
        setPieces(newPieces);
        setEmptyIndex(index);

        if (checkWin()) {
            alert("You win!");
        }
    }

    const shufflePieces = (newPieces: Piece[]) => {
        let shuffledPieces = [...newPieces];
        let emptyIndex = gridSize * gridSize - 1;
        let shuffleAmount = gridSize * gridSize * 10;
    
        for (let m = 0; m < shuffleAmount; m++) {
            const potential = [
                emptyIndex - gridSize,
                emptyIndex + gridSize,
                emptyIndex % gridSize === 0 ? -1 : emptyIndex - 1,
                emptyIndex % gridSize === (gridSize - 1) ? -1 : emptyIndex + 1,
            ].filter(index => index >= 0 && index < gridSize * gridSize);
    
            const randomIndex = potential[Math.floor(Math.random() * potential.length)];
            if (randomIndex !== -1) {
                [shuffledPieces[emptyIndex], shuffledPieces[randomIndex]] = [shuffledPieces[randomIndex], shuffledPieces[emptyIndex]];
                emptyIndex = randomIndex;
            }
        }

        setPieces(shuffledPieces);
        setEmptyIndex(emptyIndex);
    };

    const initPieces = () => {
        let newPieces: Piece[] = [];
        for (let i = 0; i < gridSize * gridSize; i++) {
            newPieces.push({
                id: i,
                backgroundImage: `url(${puzzleImgs[imgIndex]})`,
                backgroundPosition: `-${(i % gridSize) * (puzzleSize / gridSize)}px -${Math.floor(i / gridSize) * (puzzleSize / gridSize)}px`,
            });
        }
        shufflePieces(newPieces);
    };

    return (
        <div>
            <div className="game-title">
                <h1>Puzzle Game</h1>
            </div>
            <div className="game-slider">
                <p>Easy</p>
                <input
                    type="range"
                    min="3"
                    max="5"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                />
                <p>Hard</p>
            </div>
            <div className="game-full-container">
                <div>
                    <div
                        className="game-original"
                        style={{
                            backgroundImage: `url(${puzzleImgs[imgIndex]})`,
                            width: `${puzzleSize}px`,
                            height: `${puzzleSize}px`,
                        }}
                    ></div>
                </div>
                <div
                    className="game-container"
                    style={{
                        width: puzzleSize,
                        height: puzzleSize,
                        gridTemplateColumns: `repeat(${gridSize}, 1fr)`
                    }}
                >
                    {pieces.map((piece, i) => (
                        <div
                            key={piece.id}
                            className="game-piece"
                            style={{
                                backgroundImage: piece.backgroundImage,
                                backgroundPosition: piece.backgroundPosition,
                                backgroundSize: `${puzzleSize}px ${puzzleSize}px`,
                                width: `${puzzleSize / gridSize}px`,
                                height: `${puzzleSize / gridSize}px`,
                                opacity: i === emptyIndex ? 0 : 1,
                            }}
                            onClick={() => swapPieces(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PuzzleGame;