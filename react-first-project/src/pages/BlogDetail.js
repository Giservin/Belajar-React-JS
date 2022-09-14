import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const params = useParams();

    useEffect( () => {

        async function getArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if(!request.ok) {
                return setNotFound(true);
            }

            const response = await request.json();
            document.title = response.title;
            setArticle(response);
            setLoading(false);
        }

        getArticle();
    }, [params]);
    // params diberikan ke useEffect sbg dependency

    if (notFound) {
        return <h1>Artikel tidak ditemukan :(</h1>;
    }

    return (
        <section className="section">
                {loading ? <em>Loading article...</em> : (<article className="article">
                <h1 className="article-title">{article.title}</h1>
                <time className="article-time" style={{display: 'block'}}>{new Date(article.publishedAt).toLocaleDateString()}</time>
                <img className="article-image" src={article.imageUrl} alt={article.title} />
                <p className="article-summary">{article.summary}</p>
                <p className="article-source">Source: <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
                </article>)
                }
            </section>
    );
}