export function verifyIfIdIsValid(res, id) {
    if(!Number(id)) {
        res.status(400).json({message: "Informe um id válido"})
    }
}