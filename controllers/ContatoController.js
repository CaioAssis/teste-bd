import Contato from "../models/Contato.js"

class ContatoController { // precisa ser async para funcionar
    static async list(req, res) { //cria função list (ContatoController.list)
        const contatos = await Contato.findAll() //
        res.json(contatos)
    }
    
    static async getContatoById (req, res) {
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id) //
        if(!contato){
            res.status(404).json({error: "Não encontrado."})
            return
        }
        res.status(200).json(contato)
    }

    static async destroyContato(req,res){
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id) //
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }
        await Contato.destroy({where: {id: contato.id}}) // - se não tiver where, apaga TUDO
        res.json({message: "Removido com sucesso!"})
    }    

    static async createContato(req, res){
        const {nome, email, telefone} = req.body //req.body.nome, req.body.email, req.body.telefone
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"}) //status code
            return
        }
        
        const createdContato = await Contato.create(req.body) // Contato.create(nome, email, telefone) - se quiser pode não passar algum atributo
        res.status(201).json(createdContato)
    }

    static async updateContato(req, res){
        const id = parseInt(req.params.id)
        const contato = await Contato.findByPk(id)
        if(!contato){
            res.status(404).json({error:"Não encontrado"})
            return
        }

        const {nome, email, telefone} = req.body 
        if(!nome || !email || !telefone){
            res.status(400).json({error: "Informe todos os campos!"}) 
            return
        }

        const updatedContato = await Contato.update({nome, email, telefone}, {where: {id: contato.id}}) //
        res.json(updatedContato)
    }

}
export default ContatoController