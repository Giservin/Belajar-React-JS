// Mini project to do list app
const root = ReactDOM.createRoot(document.querySelector('.container'));

function App() {
  const [activity, setActivity] = React.useState('');
  const [toDo, setTodo] = React.useState([]);
  const [edit, setEdit] = React.useState({}); //menangkap objek pada todo , agar bisa diedit

  const [message, setMessage] = React.useState('');

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(e) {
    e.preventDefault();

    if (!activity) {
      return setMessage('isikan kolom');
    }

    setMessage('');

    if (edit.id) {
      const updatedTodo = { ...edit,
        activity,
        done: false
      }; //objek baru sesuaikan id todo nya
      // update yang elemen tertentu (padahal todo array, maka ambil index nya todo yang diedit)
      // dengan findIndex(), cara kerja nya sama spt filter method

      const editTodoIndex = toDo.findIndex(todo => todo.id === edit.id); // cloning dulu agar source nya tidak berubah tanpa setTodo, maka array baru dgn data baru

      const updatedTodos = [...toDo];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodo(updatedTodos); // maka dgn clone ini , dirubah nya tidak langsung namun melalui set State, itu cara yg benar dalam react agar perubahan state nya terdeteksi

      return cancelEditHandler();
    }

    setTodo([...toDo, {
      id: generateId(),
      activity,
      done: false //karena nama properti dan value nay sama

    }]); //disini tidak ada perubahan pada toDo sebelumnya , makanya render nya cuma dilakukan untuk menambah li baru

    setActivity(''); //karena value pada input sudah diberi state activity, maka ini terkontrol, 
    // setActivity string kosong menjadikan setelah memberi setToDo, inputnya jadi string kosong
    // objek tidak dapat dijadikan react child
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity); // karena value input dari activity, jd edit nya di input juga

    setEdit(todo);
  }

  function removeToDoHandler(id) {
    const filterToDo = toDo.filter(toDo => toDo.id !== id); //menghapus dgn filter

    setTodo(filterToDo);
    if (edit.id) cancelEditHandler();
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity('');
  }

  function doneTodoHandler(todo) {
    console.log(todo); // konsep nya spt update

    const updatedToDo = { ...todo,
      done: todo.done ? false : true
    }; //untuk properti sebelumnya yg udh ada (id dan activity),// maksudnya untuk toggle

    console.log(updatedToDo);
    const doneToDoIndex = toDo.findIndex(td => td.id === todo.id);
    const updatedToDos = [...toDo];
    updatedToDos[doneToDoIndex] = updatedToDo;
    setTodo(updatedToDos);
    console.log(toDo);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple To-do List"), message && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'red'
    }
  }, /*#__PURE__*/React.createElement("em", null, message)), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama aktivitas",
    value: activity,
    onChange: e => setActivity(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan perubahan' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "cancel")), /*#__PURE__*/React.createElement("ul", null, toDo.map(todo => /*#__PURE__*/React.createElement("li", {
    key: todo.id
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: todo.done,
    onChange: doneTodoHandler.bind(this, todo)
  }), todo.activity, " ", todo.done ? ' (Selesai)' : ' (Belum selesai)', /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      removeToDoHandler(todo.id);
    }
  }, "hapus"), /*#__PURE__*/React.createElement("button", {
    onClick: editTodoHandler.bind(this, todo)
  }, "edit")))));
} // check={todo.done} agar menjadikan controlled dgn state


root.render( /*#__PURE__*/React.createElement(App, null));