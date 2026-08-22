const cursos = [
    {
      id: 1,
      nome:"HTML e CSS",
      decricao:"Aprenda a estrutura",
      carHoraria: 40,
      ativo: true,
      categoria: "Frontend"  
    },
     {
      id: 2,
      nome:"javascript",
      decricao:"Aprenda a estrutura",
      carHoraria: 40,
      ativo: true,
      categoria: "Backend"  
    }

];

const listaCursos = document.querySelector("#listaCursos");
const btnTodos = document.querySelector("#btnTodos");
const btnAtivos = document.querySelector("#btnAtivos"); 

function renderizarCursos(lista){

    listaCursos.innerHTML = "";

    lista.forEach(curso => {

        const card = `
        <div>
        <span>
        $CATEGORIA  
        </span>

            ${curso.categoria}
            <h3>
            ${curso.nome}
            </h3>
            <p>
            ${curso.decricao}
            </p>
            </div>  
        `;

        listaCursos.insertAdjacentHTML("beforeend", card);
    });

 }

 rensderizarCursos(cursos);
 btnTodos.addEventListener("click", () => {} );