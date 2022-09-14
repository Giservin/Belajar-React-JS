import { useEffect } from "react";

export default function Contact() {

    useEffect(() => {
        document.title = 'Contact';
        // alternatif manipulasi tag <head> bisa dgn react-helmet
        // <Helmet> di tuliskan spt JSX untuk return component
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contacts</h1>
            <p className="section-description">You can contact me at:</p>
            <ul>
                <li>Instagram: @giservin.t</li>
                <li>Email: giservin2000@gmail.com</li>
            </ul>
        </section>);
}