class LogService {
    // Cria um log de sucesso no sistema
    static logSuccess(string){
        console.log(`\x1b[32m [SUCCESS]\x1b[0m ${string}`);
    }

    // Cria um log de warning no sistema
    static logWarning(string){
        console.log(`\x1b[33m [SUCCESS]\x1b[0m ${string}`);
    }
}

module.exports = LogService;