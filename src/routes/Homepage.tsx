import React from 'react';
import Navigation from './Navigation';
import Carousel from './Carousel';
import ArticleCard from './ArticleCard';

import Article, { ArticleProps, ContentType } from './Article';

const Homepage: React.FC = () => {
    const context = require.context('../articles', true, /\.json$/);
    const articles: ArticleProps[] = context.keys().map(key => {
        const article: ArticleProps = context(key);
        return {
            ...article,
            slug: key.replace('./', '').replace('.json', '')
        };
    });

    return (
        <div>
            <Navigation/>
            <div className="body-container">
                <h1 className="homepage-title">Welcome!</h1>
                <Carousel/>
                <div className="article-card-area">
                    {articles.map((article, index) => (
                        <ArticleCard
                            title={article.title}
                            image={`${process.env.PUBLIC_URL}/images/${article.slug}/${article.banner}`}
                            link={`/articles/${article.slug}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homepage;