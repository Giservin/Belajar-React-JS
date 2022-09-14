  		/** jika sudah ditambahkan babel , maka pada script tambahkan type="text/babel"
 		const root = ReactDOM.createRoot(document.querySelector('.container'));

 		const element = (
 			<ul>	
 				<li>Apple</li>
 				<li>Orange</li>
 				<li>Grape</li>
 			</ul>	
 		); //namun ini masih error, maka perlu di compile dr JSX ini menjadi JS standard, akhir2nya bakal syntax nya bakal spt createElement jg yang akan di baca dan eksekusi oleh browser
 		// syntax yang tidak standard ini perlu di compile (jsx, sass, dll), setelah di compile akan di impor

 		root.render(element);**/

 		// function Tes(nama){
 		// 	return nama.toUpperCase();
 		// }

 		const root = ReactDOM.createRoot(document.querySelector('.container'));

 		// const name = 'Ervin';
 		// const element = (
 		// 	<>
 		// 	<h1 className="warna">Hello {new Date().toLocaleDateString()}</h1>
 		// 	<h1>Hello {Tes(name)}</h1>
 		// 	</>
 		// 	);

 		// const name = 'Ervin';
 		// const classnama = 'warna';
 		// const element = (
 		// 	<>
 		// 		<h1 className={classnama}>Hello G</h1>
 		// 		<h1>Hello H</h1>
 		// 	</>

 		// );

 		// menuliskan props pada JSX: spt penulisan atribut HTML , namun syntax2 nya spt props dalam React.CreateElement

 		// kemudian untuk empty element spt img , dll:
 		// const element = <img src="https://cdn.myanimelist.net/images/characters/15/315153.jpg"/>

 		// return JSX dari function
 		// function Halo(props){
 		// 	return <p>Halo <strong>{props.nama}</strong></p>
 		// }
 		// const element = (
 		// 	<>
 		// 		{halo('Ervin')}
 		// 		{halo('Rizky')}
 		// 		{halo('Abi')}
 		// 	</>
 		// );

 		// namun pada JSX ingin fucntion yg return elemen, bisa dipakai react Component
 		//  const element = (
 		// 	<>
 		// 		<Halo nama="Ervin"/>
 		// 		<Halo nama="Abi"/>
 		// 		<Halo nama="Rizky"/>
 		// 	</>

 		// );

 		// Misal ingin menampilkan jam yg berjalan:
 		function tick() {
 			const element = (
 				<div>
 					<h1>CURRENT TIME</h1>
 					<h2>{new Date().toLocaleTimeString()}</h2> 
 				</div>
 			); //<!--dgn ini h2 nya bakal berubah DOM setiap detik-->

 			root.render(element); 
 			//dgn React render DOM, dia scr otomatis hanya akan mengupdate elemen yang berubah (meskipun dia me-render nya pada root)
 			// kalau pada Javascript biasa, ketika merubah isi dari elemen root (innerHTML), maka semua child root nya akan berubah (serta child2nya yg tidak berubah)
 			// kalau pada JS ingin hanya update DOM yg berubah saja pada elemen root, itu butuh penulisan code yang lebih untuk mengatasi, sedangkan pada react penulisan syntax render ini sudah auto manipulasi pada elemennya (efficiency rendering)
 		}

 		tick();

 		setInterval(tick, 1000); //dgn ini h2 nya bakal berubah DOM setiap detik






