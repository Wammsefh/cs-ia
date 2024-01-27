import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './routes/Homepage';
import AboutUs from './routes/AboutUs';
import PuzzlePage from './routes/PuzzlePage';
import Article, { ArticleProps, ContentType } from './routes/Article';

import './App.css';

function App() {
    const context = require.context('./articles', true, /\.json$/);
    const articles: ArticleProps[] = context.keys().map(key => {
        const article: ArticleProps = context(key);
        return {
            ...article,
            slug: key.replace('./', '').replace('.json', '')
        };
    });

    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/about-us" element={<AboutUs />}/>
                    <Route path="/puzzle-page" element={<PuzzlePage />}/>
                    {articles.map((article, index) => (
                        <Route
                            key={index}
                            path={`/articles/${article.slug}`}
                            element={<Article title={article.title} banner={article.banner} content={article.content} slug={article.slug}/>}
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
