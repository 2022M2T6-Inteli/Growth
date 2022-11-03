const APIError = require("../services/ErrorService");
const Model = require("./Model");

class CityModel extends Model {
    id;
    name;
    number_people;
    is_capital;
    state_id;

    constructor(cityInfo) {
        super({ 'tableName': 'ibge_city', 'identifierColumns': ['id'] })

        if(cityInfo.id){
            this.setCity(cityInfo)
        }else{
            this.setNewCity(cityInfo)
        }
    }

    setCity(cityInfo){
        this.setId(cityInfo.id);
        this.setName(cityInfo.name);
        this.setNumberPeople(cityInfo.number_people);
        this.setStateId(cityInfo.state_id);
        this.setIsCapital(cityInfo.is_capital);
    }

    setNewCity(cityInfo){
        this.setName(cityInfo.name);
        this.setNumberPeople(cityInfo.number_people);
        this.setStateId(cityInfo.state_id);
        this.setIsCapital(cityInfo.is_capital);
    }

    // SETTERS
    setId(id){
        if(!id) {
            throw new APIError("Construção precisa de um ID", 403);
        }

        this.id = id;
    }

    setName(name){
        if(name && name.length <= 5) {
            throw new APIError("Nome precisa ter mais que 5 caracteres", 403);
        }

        this.name = name;
    }

    setNumberPeople(number_people){
        this.number_people = number_people;
    }

    setStateId(state_id){
        this.state_id = state_id;
    }

    setIsCapital(is_capital){
        this.is_capital = is_capital;
    }


    // Retorna uma Cidade com base nas colunas passadas por parâmetro
    static async getByColumns(params){
        const rowInfo = await this.getSQL(
            `SELECT * 
            FROM ibge_city
            WHERE ${Object.keys(params).map(key => `${key} = $${key}`).join(" AND ")}`,
            params
        )

        if(rowInfo){
            return new CityModel(rowInfo)
        }else{
            throw new APIError("Cidade não encontrada", 404);
        }
    }

    // Retorna Cidades com base nas colunas passadas por parâmetro
    static async allByColumns(params = []){
        const rows = await this.allSQL(
            `SELECT * 
            FROM ibge_city
            ${params.length ? `WHERE ${Object.keys(params).map(key => `${key} = $${key}`).join(" AND ")}` : ``}`,
            params
        )

        if(rows.length){
            return rows.map(rowInfo => new CityModel(rowInfo).getObject())
        }else{
            throw new APIError("Cidade não encontrada", 404);
        }
    }

}

module.exports = CityModel;