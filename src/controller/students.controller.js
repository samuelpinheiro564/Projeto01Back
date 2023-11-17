export const getStudents = (req,res) => {

    const id = req.params;
    return res.status(200).send({
        message : `Get student with id ${id} controller`
    });
}

export const createStudent = (req,res) => {
    const {name,email,age} = req.body

    age>18
    ?res.status(201).send({
        message: "Aluno com idade maior que 18 anos"
    })
    :res.status(201).send({
message:"Aluno com idade menor que 18 anos"
    })
    if(!name || !email || !age){
        return res.status(400).send({
            message:"Missing required  informations",
        });
        }

        return res.status(200).send({
            message:`Create student with name ${name}, email ${email} and age ${age}`
        });
};
export const updateStudent = (req,res) => {
    const {id} = req.params;    
    const {nome,desc,alunos} = req.body
    if(!nome || !descriçao || !alunos){
        return res.status(400).send({
            message:"Missing required  informations",
        });
        }
        return res.status(200).send({
            message:`Create student with name ${nome}, email ${desc} and age ${alunos} e id ${id}`
        });
};
export const deleteStudent = (req,res) => {
    const {id} = req.params;
    if(!id){
        return res.status(400).send({
            message:"Missing required  informations",
        });
        }
        return res.status(200).send({
            message:`Create student with name ${id}`
        });
}

