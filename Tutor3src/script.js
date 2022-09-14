

 		// const root = ReactDOM.createRoot(document.querySelector('.container'));

 		// // Misal ingin menampilkan jam yg berjalan:
 		// function tick() {
 		// 	const element = (
 		// 		<div>
 		// 			<h1>AUTOMATIC SECONDS</h1>
 		// 			<h2>{new Date().toLocaleTimeString()}</h2> 
 		// 		</div>
 		// 	); //<!--dgn ini h2 nya bakal berubah DOM setiap detik-->

 		// 	root.render(element); 
 		
 		// }

 		// tick();

 		// setInterval(tick, 1000); //dgn ini h2 nya bakal berubah DOM setiap detik

		const root = ReactDOM.createRoot(document.querySelector('.container'));
		// const element = (
		// 	<div style={{
		// 		width: 200, 
		// 		height: 200,
		// 		backgroundColor: 'lightblue'
		// 	}}></div>
		// );

		// const classname = 'box';
		// const element = (
		// 	<div className = {classname}></div>
		// );

		// // event handling on react
		// const element2 = (
		// 	<button className='box' onClick={() => alert(1)}>Click Me</button>
		// );
		// // cnth event binding:
		// function Skip(nama){
		// 	alert(nama);
		// }

		// const element3 = (
		// 	<button className='box' onClick={Skip.bind(this, 'Giservin')}>Click Me</button>
		// );

		// console.log(Skip.bind(this, 'Giservin'));
		// // React Component dan State:
		// function App(){
		// 	// const state = React.useState(1);
		// 	// const count = state[0] //index ke 0 ini merupakan value state saat itu
		// 	// const updateCount = state[1];

		// 	// penulisan state dgn destructuring Argument:
		// 	const [count, setCount] = React.useState(0);
		// 	// console.log(updateCount);
		// 	// lebih baik dgn nama set bukan update karena sudah best practice untuk team work dll
		// 	return (
		// 	<>
		// 		<button onClick={() => setCount(count - 1)}>-</button>
		// 		<span> {count} </span> 
		// 		<button onClick={() => setCount(count + 1)}>+</button>
		// 	</>
		// 	); //span mengambil nilai dr state, dan statenya ada perubhanan, dan yg berubah sesuai statenya aja yaitu elemen span nya doang (hanya span doang yg di re-render)
		// } 

		// function App() {
		// 	const [diklik, setDiklik] = React.useState(false);
		// 	const [count, setCount] = React.useState(0);

		// 	// React.useEffect(
		// 	// 	()=>console.log(document.getElementById('judul')),
		// 	// 	[count]
		// 	// 	); //misal meski komponen render lama, tetep akan ditangkap elemennya karena dijalankan saat me-render
		// 		// parameter kedua yaitu state saat itu

		// 	// useEffect untuk mount component saja
		// 	// React.useEffect(
		// 	// 	()=>console.log(document.getElementById('judul')),
		// 	// 	[]
		// 	// 	); //array kosong untuk menjalankan saat di render awal saja

		// 	// useEffect cleanup saat unmount
		// 	React.useEffect(
		// 		() => {
		// 			console.log('init carousel');

		// 			return () => console.log('destroy carousel');
		// 		}
		// 	); //dgn ini init library tidak akan di eksekusi lebih dari sekali

		// 	return (
		// 	<>
		// 		<h1 id="judul">Hello ini judul</h1>
		// 		<button onClick={() => setDiklik(true)}>Click me</button>
		// 		<button onClick={() => setCount(count + 1)}>Tambah</button>
		// 		<p>Nilai saat ini : {count}</p>
		// 	</>
		// 	);
		// }

		// Conditional Rendering:
		// function App() {
		// 	const [login, setLogin] = React.useState(false);

		// 	if(login){
		// 		return (
		// 		<>
		// 			<h1>Successfully Logged</h1>
		// 			<button onClick={()=>setLogin(false)}>Logout</button>	
		// 		</>
		// 		);
		// 	}

		// 	return (
		// 		<>
		// 			<h1>Login Please</h1>
		// 			<button onClick={() => setLogin(true)}>
		// 				LOGIN
		// 			</button>
		// 		</>
		// 	);
		// }

		// Conditional Rendering with Ternary Operator:
		// function App() {
		// 	const [login, setLogin] = React.useState(false);

		// 	// return (
		// 	// 	<>
		// 	// 		<h1>Login Please</h1>
		// 	// 		{/* <p>{login ? <b>Already Logged in</b> : ''}</p> */}
		// 	// 		{/* Ternary operator tanpa else: */}
		// 	// 		<p>{login && <b>Already Logged in</b>}</p>
		// 	// 		<button onClick={() => setLogin(true)}>
		// 	// 			LOGIN
		// 	// 		</button>
		// 	// 	</>
		// 	// );

		// 	return !login ? (
		// 				<>
		// 					<h1>Login Please</h1>
		// 					<button onClick={() => setLogin(true)}>
		// 						LOGIN
		// 					</button>
		// 				</>
		// 			) : (
		// 					<>
		// 						<h1>Successfully Logged</h1>
		// 						<button onClick={()=>setLogin(false)}>Logout</button>	
		// 					</>
		// 				);
		// }

		// React DOM Manipulation (reference hook ):
		// function DomManipulate() {

		// 	const judulRef = React.useRef(null); //null dulu karena baru di set setelah elemen ada di Dom Tree

		// 	React.useEffect(() => {
		// 		// const judul = document.getElementById('judul'); // tidak perlu nama ID , class untuk menangkap elemen , jika sudha melakukan reference hook
		// 		// DOM manipulation dilakukan disini:
		// 		judulRef.current.textContent = 'Aplikasi';
		// 	}, []);

		// 	return (
		// 	<>
		// 		{/* <h1 id="judul">Application</h1> */}
		// 		{/* Reference Hook: */}
		// 		<h1 ref={judulRef}>Application</h1>
		// 	</>
		// 	);
		// }

		// // react list
		// function App() {
		// 	const fruits = ['Apple', 'Grape', 'Mango'];

		// 	return (
		// 		<ul>
		// 			{/* foreach tidak mendukung return. maka render array dgn map */}
		// 			{/* {fruits.map(fruit => <li>{fruit}</li>)}  */}
		// 			{/* untuk me-render array sbg children dri ul ini, perlu ada key yang unik pada each childnya */}
					
		// 			{/* dengan key: */}
		// 			{fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
		// 		</ul>
		// 	);
		// }

		// // Uncontrol component form(vanilla JS)
		// function App() {
		// 	const namaRef = React.useRef(null);

		// 	function ketikaSubmit(e) {
		// 		e.preventDefault();
		// 		const isi = namaRef.current.value; // Uncontrol element form(vanilla JS), bergantung pada DOM node untuk mengambil value
		// 		console.log(isi);
		// 	}
		// 	return (
		// 		<form onSubmit={ketikaSubmit}>
		// 			<div>
		// 				<label>Nama: </label>
		// 				<input type="text" name="nama" ref={namaRef} />
		// 				{/* input di referensikan dgn useRef, agar dapat mengambil nilai inputnya langsung dari reference react */}
		// 			</div>
		// 			<button type="submit">Kirim</button>
		// 		</form>
		// 	);
		// }

		// control component (dgn useState)
		// function App() {
		// 	const [nama, setNama] = React.useState('');

		// 	function ketikaSubmit(e) {
		// 		e.preventDefault();

		// 		console.log(nama);
		// 	}

		// 	return (
		// 		<form onSubmit={ketikaSubmit}>
		// 			<div>
		// 				<label>Nama: </label>
		// 				<input type="text" name="nama" value={nama} onChange={function(e) {
		// 					setNama(e.target.value);
		// 				}}></input>
		// 			</div>
		// 			<button type="submit">Kirim</button>
		// 		</form>
		// 	);
		// }

		// Data Fetching (async):
		function App(){
			// React.useEffect(() => {
			// 					fetch('https://api.spaceflightnewsapi.net/v3/blogs')
			// 						.then(response => response.json())
			// 						.then(r => console.log(r)) 
			// 					}, []);
			// 						// promise chain

			const [news, setNews] = React.useState([]);
			const [loading, setLoading] = React.useState(true);
			// dgn async await:
						React.useEffect(() => {
							async function getData() {
									const dataFlight = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');

									const response = await dataFlight.json()
									// melakukan perubahan state setiap data fetching
									setNews(response)
									setLoading(false);
								}
							getData();
							}, []);
									
			return (<><h1>Data Fetch</h1>
						<ul>
							{!loading ? news.map(item => <li key={item.id}>{item.title}</li>) : <i>Loading data...</i>}
						</ul>
						</>
			);
		}

		root.render(<App />);
		// console.log(document.getElementById('judul')); //klo render nya delay bisa saja ini null jg karnea belom ada elemen/komponen yg dirender





