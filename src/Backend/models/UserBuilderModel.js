const Model = require('./Model')
const crypto = require('crypto');

class BuilderModel extends Model {
    id;
    name;
    email;
    cellphone;
    cnpj;
    employees_number;
    password_hash;
    password_salt;
    owner_name;
    owner_cellphone;
    owner_cpf;
    owner_birth_date;
    creation_date;
    update_date;
    avatar_image_id;

    constructor(builderInfo) {
        super({ 'tableName': 'cmrv_user_builder', 'identifierColumns': ['id'] })

        if(builderInfo.id){
            this.setAttributesByBuilderInfo(builderInfo)
        }else{
            this.setAttributesForNewBuilder(builderInfo)
        }
    }

    setPassword(password){
        if(String(password).length >= 8){
            this.password_salt = crypto.randomBytes(10).toString(`hex`); 

            this.password_hash = crypto.pbkdf2Sync(password, this.password_salt, 1000, 64, 'sha1').toString(`hex`); 
        }else{
            throw new Error("Senha precisa ter 8 carecteres ou mais")
        }
    }

    validatePassword(password) {
        return this.password_hash == crypto.pbkdf2Sync(password, this.password_salt, 1000, 64, 'sha1').toString(`hex`); 
    }


    // Preenche as informações do objeto esperando que o objeto já foi instanciado corretamenta
    setAttributesByBuilderInfo(builderInfo){
        if(typeof builderInfo.id != 'undefined'){
            this.id = builderInfo.id;
        } else if(!this.id) {
            throw new Error("É necessário um ID para preencher as informações do usuário")
        }

        if(typeof builderInfo.name != 'undefined'){
            this.name = builderInfo.name;
        }
        if(typeof builderInfo.email != 'undefined'){
            this.email = builderInfo.email;
        }
        if(typeof builderInfo.cellphone != 'undefined'){
            this.cellphone = builderInfo.cellphone;
        }
        if(typeof builderInfo.cnpj != 'undefined'){
            this.cnpj = builderInfo.cnpj;
        }
        if(typeof builderInfo.employees_number != 'undefined'){
            this.employees_number = builderInfo.employees_number;
        }
        if(typeof builderInfo.password_hash != 'undefined'){
            this.password_hash = builderInfo.password_hash;
        }
        if(typeof builderInfo.password_salt != 'undefined'){
            this.password_salt = builderInfo.password_salt;
        }
        if(typeof builderInfo.owner_name != 'undefined'){
            this.owner_name = builderInfo.owner_name;
        }
        if(typeof builderInfo.owner_cellphone != 'undefined'){
            this.owner_cellphone = builderInfo.owner_cellphone;
        }
        if(typeof builderInfo.owner_cpf != 'undefined'){
            this.owner_cpf = builderInfo.owner_cpf;
        }
        if(typeof builderInfo.owner_birth_date != 'undefined'){
            this.owner_birth_date = builderInfo.owner_birth_date;
        }
        if(typeof builderInfo.creation_date != 'undefined'){
            this.creation_date = builderInfo.creation_date;
        }
        if(typeof builderInfo.update_date != 'undefined'){
            this.update_date = builderInfo.update_date;
        }
        if(typeof builderInfo.avatar_image_id != 'undefined'){
            this.avatar_image_id = builderInfo.avatar_image_id;
        }
    }

    // Preenche as informações do objeto de forma a preparar para a criação de um registro
    setAttributesForNewBuilder(builderInfo) {
        this.name = builderInfo.name;
        this.email = builderInfo.email;
        this.cellphone = builderInfo.cellphone;
        this.cnpj = builderInfo.cnpj;
        this.employees_number = builderInfo.employees_number;
        this.setPassword(builderInfo.password)
        this.owner_name = builderInfo.owner_name;
        this.owner_cellphone = builderInfo.owner_cellphone;
        this.owner_cpf = builderInfo.owner_cpf;
        this.owner_birth_date = builderInfo.owner_birth_date;
    }

    async insert() {
        if(!this.id){
            this.id = await super.insert();
        }
    }

    
    static async getByColumns(params){
        const newParams = {}

        Object.entries(params).forEach(entrie => {
            newParams[`$${entrie[0]}`] = entrie[1]
        })

        const rowInfo = await this.getSQL(
            `SELECT * 
            FROM cmrv_user_builder
            WHERE ${Object.keys(params).map(key => `${key} = $${key}`).join(" AND ")}`,
            newParams
        )

        if(rowInfo){
            return new BuilderModel(rowInfo)
        }
    }
}

module.exports = BuilderModel