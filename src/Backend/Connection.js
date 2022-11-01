const sqlite = require('sqlite3').verbose();

const LogService = require('./services/LogService');

class Connection {
    static db;

    static setDatabase(databasePath){
       this.db = new sqlite.Database(databasePath)
    }

    // Realiza uma query de inserção e retorna o ID inserido
    static async insert(query, params = []){
        return await new Promise(async (resolve) => {
            this.db.run(query, params, function (err){
                if(err){
                    throw err
                }

                LogService.logSuccess(`INSERT successed with ID (${this.lastID})`)
                resolve(this.lastID)
            })
        })
     }

    // Realiza uma query de Update e retorna a quantidade de rows afetadas
    static async update(query, params = []){
        return await new Promise(async (resolve) => {
            this.db.run(query, params, function (err){
                if(err){
                    throw err
                }

                LogService.logSuccess(`UPDATE successed with (${this.changes}) rows affected`)
                resolve(this.changes)
            })
        })
    }

    // Realiza uma query de delete e retorna a quantidade de rows afetadas
    static async delete(query, params = []){
        return await new Promise(async (resolve) => {
            this.db.run(query, params, function (err){
                if(err){
                    throw err
                }

                LogService.logSuccess(`DELETE successed`)
                resolve(this.changes)
            })
        })
    }

    // Realiza uma query de select e retorna todas as rows
    static async all(query, params = []){
        return await new Promise(async (resolve) => {
            this.db.all(query, params, function (err, rows){
                if(err){
                    throw err
                }
                
                if(rows.lenght){
                    LogService.logSuccess(`GET ALL successed with (${rows.lenght}) rows returned`)
                } else {
                    LogService.logWarning(`GET ALL didn't return rows`)
                }

                resolve(rows)
            })
        })
    }

    // Realiza uma query de select e retorna todas apenas uma row
    static async get(query, params = []){
        return await new Promise(async (resolve) => {
            this.db.get(query, params, function (err, rows){
                if(err){
                    throw err
                }

                if(rows){
                    LogService.logSuccess(`GET successed`)
                } else {
                    LogService.logWarning(`GET didn't return anything`)
                }

                resolve(rows)
            })
        })
    }
}

module.exports = Connection