import { useEffect } from "react";

export default function Profile() {
    useEffect(() => {
        document.title = 'Profile';
    }, []);
    return (
        <section className="section">
            <h1 className="section-title">Profile Page</h1>
            <p className="section-description">
                My name is Giservin Tifira Zain, I'm a fresh graduate of Computer Engineering on Univeristy of Brawijaya. Currently 22 years old and searching for a job related to IT.
            </p>
        </section>
        );
}