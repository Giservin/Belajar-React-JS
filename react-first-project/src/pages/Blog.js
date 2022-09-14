import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Blog';
        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();
            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Blog Page</h1>
            <p className="section-description">Here's what I'm making so far: </p>
            {loading && <em>Loading articles...</em>}
            {!loading && (
                <div className="articles">
                    {articles.map(article => <article key={article.id} className="article"> 
                                                <h2 className="article-title"><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                                                <time className="article-time">
                                                    {new Date(article.publishedAt).toLocaleDateString()}
                                                </time>
                                            </article>)}
                </div>
            )}
        </section>
        );
}