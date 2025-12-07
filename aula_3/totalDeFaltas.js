const contarFaltas = () => {
    const alunos = [
        { nome: "Ana", presente: true },
        { nome: "Bruno", presente: false },
        { nome: "Carla", presente: true },
        { nome: "Diego", presente: false },
        { nome: "Eva", presente: true }
    ];

    const faltas = alunos.filter((aluno) => {
        return aluno.presente === false;
    });

    console.log("Total de faltas:", faltas.length);
};

contarFaltas();
