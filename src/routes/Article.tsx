import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';

type Paragraph = { type: 'paragraph', text: string };
type Image = { type: 'image', url: string };

type ContentElement = Paragraph | Image;
export type ContentType = Array<ContentElement>;

export type ArticleProps = {
    title: string;
    banner: string;
    content: ContentType;
    slug: string;
}

const Article: React.FC<ArticleProps> = ({ title, banner, content, slug }) => {
    const [isShrink, setIsShrink] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsShrink(true);
        } else {
            setIsShrink(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderContent = () => {
        const htmlContent = [];
        for (let i = 0; i < content.length; i++) {
            const item = content[i];
            if (item.type === 'paragraph') {
                htmlContent.push(
                    <div className="article-paragraph">
                        <p>{item.text}</p>
                    </div>
                );
            } else if (item.type === 'image') {
                htmlContent.push(
                    <div>
                        <img className="article-img" src={`${process.env.PUBLIC_URL}/images/${slug}/${item.url}`} alt=""/>
                    </div>
                );
            }
        }

        return (
            <div className="article-body">
                {htmlContent}
            </div>
        );
    }

    return (
        <div className="article-page">
            <Navigation/>
            <div className={`article-heading ${isShrink ? 'small' : ''}`}>
                <div className={`article-banner ${isShrink ? 'small' : ''}`}>
                    <h1 className={`article-title ${isShrink ? 'small' : ''}`}>{title}</h1>
                    <img src={`${process.env.PUBLIC_URL}/images/${slug}/${banner}`} alt=""/>
                </div>
            </div>
            {renderContent()}
        </div>
    );
}

export default Article;