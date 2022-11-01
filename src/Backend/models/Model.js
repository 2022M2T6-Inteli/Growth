const Connection = require('../Connection')
const LogService = require('../services/LogService')

class Model {
    tableName; // Nome da tabela no banco de dados
    identifierColumns = ['id']; // Nome das colunas de identificação (id em entidades fortes e ids de relações em tabelas de relacionamento)

    constructor(params) {
        this.tableName = params['tableName'];
        this.identifierColumns = params['identifierColumns'];
    }

    // Retorna como Entries ([[key, value]]) todos os atributos da classe que não sejam de lógica como tableName e identifierColumns
    getRealModelParamsEntries() {
        return Object.entries(this).filter(entrie => {
            return entrie[0] != 'tableName' && entrie[0] != 'identifierColumns'
        })
    }

    getRealModelObject() {
        const object = {}

        this.getRealModelParamsEntries().forEach(entrie => {
            object[entrie[0]] = entrie[1]
        })

        return object;
    }

    // Retorna como um objeto todos os atributos reais da classe da forma que devem ser passados como parâmetro para queries 
    getModelAsSQLParams() {
        const object = {};

        this.getRealModelParamsEntries().forEach(entrie => {
            object[`$${entrie[0]}`] = entrie[1]
        })

        return object;
    }

    // Retorna como um objeto todos os atributos de identificação da classe da forma que devem ser passados como parâmetro para queries 
    getModelIdentifierColumnsAsSQLParams() {
        const object = {};

        this.getRealModelParamsEntries().filter(entrie => this.identifierColumns.includes(entrie[0])).forEach(entrie => {
            object[`$${entrie[0]}`] = entrie[1]
        })

        return object
    }

    // Seta os atributos da classe de acordo com o array ou objeto passado por parâmetro dinâmicamente
    async setRealModelAttributes(attributes) {
        return this.getRealModelParamsEntries().forEach(entrie => {
            this[entrie[0]] = attributes[entrie[0]]
        })
    }

    // Obtem uma tupla da tabela de acordo com as colunas identificadoras
    async getByIdentifierColumns() {
        return Connection.get(
            `SELECT ${this.tableName}.* 
            FROM ${this.tableName} 
            WHERE ${this.identifierColumns.map(key => `${key} = $${key}`).join(" AND ")}`,
            this.getModelIdentifierColumnsAsSQLParams()
        )
    }

    static async getSQL(query, params) {
        return Connection.get(query, params);
    }

    static async allSQL(query, params) {
        return Connection.all(query, params);
    }

    // Insere um registro no banco de dados com os valores que estão na classe
    async insert() {
        return Connection.insert(
            `INSERT INTO ${this.tableName} 
                (${this.getRealModelParamsEntries().map(entrie => entrie[0]).join(", ")})
            VALUES
                (${this.getRealModelParamsEntries().map(entrie => `$${entrie[0]}`).join(", ")})`,
            this.getModelAsSQLParams()
        )
    }

    static async insertSQL(query, params) {
        return Connection.insert(query, params);
    }

    // Atualiza no banco de dados a tupla referente ao objeto atual
    async update() {
        if (this.identifierColumns.length) { // Só aplica o update se existirem colunas de identificação setadas, previnindo atualizações em toda a tabela por acidente
            return Connection.update(
                `UPDATE ${this.tableName} 
                    SET ${this.getRealModelParamsEntries().map(entrie => `${entrie[0]} = $${entrie[0]}`).join(", ")} 
                WHERE ${this.identifierColumns.map(key => `${key} = $${key}`).join(" AND ")}`,
                this.getModelAsSQLParams()
            )
        }
    }

    static async updateSQL(query, params) {
        return Connection.update(query, params);
    }

    // Deleta um registro no banco de dados referente ao objeto atual
    async delete() {
        if (this.identifierColumns.length) { // Só aplica o delete se existirem colunas de identificação setadas, previnindo exclusões em toda a tabela por acidente
            return Connection.delete(
                `DELETE FROM ${this.tableName} WHERE ${this.identifierColumns.map(key => `${key} = $${key}`).join(" AND ")}`,
                this.getModelIdentifierColumnsAsSQLParams()
            )
        }
    }

    static async deleteSQL(query, params) {
        return Connection.delete(query, params);
    }
}

module.exports = Model;