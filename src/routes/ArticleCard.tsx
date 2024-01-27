import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type ArticleCardProps = {
    title: string;
    image: string;
    link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, image, link }) => {
    return (
        <div className="article-card-container">
            <Link
                to={link}
                className="article-card"
            >
                <div
                    className="article-card-img"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <p className="article-card-text">{title}</p>
            </Link>
        </div>
    );
}

export default ArticleCard;