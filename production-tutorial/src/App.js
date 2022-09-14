// import logo from './logo.svg';
import './App.css';
// import Welcome, { WelcomeH2, WelcomeH3 } from './Welcome'
// import Welcome from './Welcome'
//gk perlu pakai .js, karena auto tau bahwa dia JS, kalau gk pake ./ , akan dianggap dependencies , maka dicari nya di node_modules
// jadi ketika export default , import tanpa curly braces mengimport export defaultnya
// import Button from './Button'
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import AboutTeam from './AboutTeam';
import Blog from './Blog'
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <nav>
        {/* biasanya make <a> untuk navigasi , srkg menggunakan <Link /> agar tidak full reload */}
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/blog"> Blog </Link>
        {/* Tag Link ini dijadikan <a> dan ditambahkan event listener */}
      </nav>
      {/* <Welcome text="Ini Kesatu" children={<li>first</li>}/>
      <Welcome text="Ini Keduas" children={<li>second</li>}/> */}
      {/* biasanya self closing tag, bagaimana untuk penulisan spt dibawah */}
      {/* <Welcome>Saya adalah content</Welcome> 
      <Button>Click Me</Button>
      <img src="/logo512.png" alt="gambar" style={{display: 'block', margin: 'auto'}}/> */}
      {/* gambar diawali dgn slash supaya jadi absolute pointing ke root URL (public) */}
      {/* Saya adalah content masuknya ke props children */}
      {/* maka memang untuk mengambil konten nya , ya bisa dgn props.children */}
      {/* Jadi jika tanpa self closing tag, bisa diberikan text kontent yang akan menjadi children dr elemen (component instance) */}
      {/* <Welcome /> memanggil komponen Welcome yg di import */}
      {/* agar dua komponen memiliki konten berbeda berikan props */}
      {/* bisa jg nge pass children melalui props JSX */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* path="/" merupakan halaman utama nya, URL ini akan dicontrol React router */}
        {/* element pada route artinya jika dia mengakses path itu, elemnt yg tertulis akan dirender */}
        {/* Ketika ganti page , yg berubah hanya elemen render nya , bukan bener2 pindah halaman, full body gak berubah */}
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
          {/* dgn jadi route child, path nya gausah dikasih about/team lagi, langsung aja team */}
          {/* ketika bikin nested route dari child route, perlu namanya outlet untuk menampilkan child route ke parent route */}
        </Route>
        <Route path="blog" element={<Blog />}/>
        {/* <Route path="blog/artikel-1" element={<BlogDetail />} /> */}
        {/* Bagaimana kalau banyak artikel, maka slug nya dijadikan dynamic, agar define satu route aja */}
        {/* agar dynamic maka berikan param dgn tanda ':', ngasih indikator dia bukan static text, ngambil dri URL full */}
        <Route path="blog/:slug" element={<BlogDetail />} />
        {/* /:slug ini mengambil url params yang ada contohnya yaitu (/artikel-1, /artikel-2, /artikel-3) */}
        {/* kemudian url params dapat diakses dengan useParams (method dari react router dom) */}
        {/* nama :/slug sendiri akan jadi key pada object useParams */}
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* No match route handler: */}
        <Route path="*" element={<NotFound />} />
        {/* path='*' asterisk sign adalah special key, ketika gaada route yg match */}
       </Routes>
    </div>
  );
}


export default App;
