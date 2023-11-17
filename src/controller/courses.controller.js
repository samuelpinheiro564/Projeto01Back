export const getCursos = (req, res) => {
    
    return res.status(200).send({
        message: `O curso ${nome}:${desc} e pode ter ate ${alunos}`
    });
}

export const createCurso = (req, res) => {
    const { nome, desc, alunos } = req.body
 
    if (!nome || !desc || !alunos) {
        return res.status(400).send({
            message: "Missing required  informations",
        });
    }

    return res.status(200).send({
        message: `Create student with name ${nome}, email ${desc} and age ${alunos}`
    });
};

export const updateCurso = (req, res) => {
    const { id } = req.params;
    const { nome, desc, alunos } = req.body
    if (!nome || !descriçao || !alunos) {
        return res.status(400).send({
            message: "Missing required  informations",
        });
    }
    return res.status(200).send({
        message: `Create student with name ${nome}, email ${desc} and age ${alunos} e id ${id}`
    });
};

export const deleteCurso = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send({
            message: "Missing required  informations",
        });
    }
    return res.status(200).send({
        message: `Create student with name ${id}`
    });
}


