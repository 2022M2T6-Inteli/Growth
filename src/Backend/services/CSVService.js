class CSVService {
    headerColumns = [];
    lines = [];
    breakLine = '\n';
    columnSeparator = ',';

    constructor(lines, columnSeparator = ',', breakLine = '\n'){
        this.setData(lines);
        this.setColumnSeparator(columnSeparator);
        this.setBreakLine(breakLine);
    }

    setBreakLine(breakLine){
        this.breakLine = breakLine;
    }

    setColumnSeparator(columnSeparator){
        this.columnSeparator = columnSeparator;
    }

    setLines(lines = []) {
        this.lines = lines;
    }

    setHeaderColumns(headerColumns = []) {
        this.headerColumns = headerColumns;
    }

    addLine(line) {
        this.lines.push(line);
    }

    setData(lines = []) {
        if(lines.length > 0) {
            this.setHeaderColumns(Object.keys(lines[0]));
        }
        this.setLines(lines);
    }
    
    getData(){
        return this.lines;
    }

    bindData(data) {
        if(typeof data == 'boolean') {
            return data ? '"Sim"' : '"Não"'
        } else if(typeof data == 'object') {
            if(data){
                if(Array.isArray(data)){
                    return `"${data.join(",")}"`
                } else {
                    return `"${JSON.stringify(data)}"`
                }
            }else {
                return '""';
            }
        }
    }

    getCSVString(){
        return [this.headerColumns].concat(this.lines).map(line => {
            return Object.entries(line).map(column => `"${column[1]}"`).join(this.columnSeparator)
        }).join(`${this.columnSeparator} ${this.breakLine}`)
    }
}

module.exports = CSVService;