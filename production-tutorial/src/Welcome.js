// misal buat komponen spesifik di satu file ini

function Welcome(props) {
    return <h1>Welcome {props.text}, mempunya child {props.children}</h1>;
}

export function WelcomeH2() {
    return <h2>Welcome H2</h2>
}

// aslinya cuma accessible disini, maka perlu di export
export default Welcome; //export ini adalah kode JS ES6
// export default artinya yg di export function Welcome() doang

// bisa export banyak di satu file
export function WelcomeH3() {
    return <h3>Welcome H3</h3>
}