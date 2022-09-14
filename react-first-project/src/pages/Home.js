import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
    <section className="section">
        <h1 className="section-title">Welcome to Giservin Tifira Zain's Website</h1>
        <p className="section-description">My personal website created for practicing my developing skill and build a possible portofolio.</p>
    </section>
    );
}