let resposeParse = [];

const getTodos = async () => {
  fetch("http://localhost:8080/pessoa").then((response) => {
    responseParse = response.json();
    console.log(responseParse);
  });
};

/* const getTodos = async () => {
    let response = await fetch("http://localhost:8080/pessoa");
    resposeParse = await response.json();

    console.log(resposeParse);
} */

const getId = async () => {
  let response = await fetch("http://localhost:8080/pessoa/2");
  resposeParse = await response.json();

  console.log(resposeParse);
};

const getPost = async () => {
  await fetch("http://localhost:8080/pessoa", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: "4",
      nome: "Capitão América",
    }),
  });
};

const getPut = async () => {
  await fetch("http://localhost:8080/pessoa/3", {
    method: "PUT",
    body: JSON.stringify({
      nome: "Vovó Mafalda",
    }),
  });
};

const getDelete = async () => {
  await fetch("http://localhost:8080/pessoa/4", {
    method: "DELETE",
  });
};


