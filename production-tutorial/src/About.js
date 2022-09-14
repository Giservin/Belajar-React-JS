import { Link, Outlet } from 'react-router-dom';

export default function About() {
    return (<>
            <h1>About Us</h1>
            <li><Link to="/about/team">Team</Link></li>
            <Outlet />
            {/* Outlet ditaruh dibawah, menjadikan saat ia merender child route, tetap terbawa komponen parent routenya */}
            </>);
            // Link pakai slash didepan agar tidak membentuk path baru
}