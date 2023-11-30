export interface UF {
    id: Number;
    nome: String;
    sigla: String;
}

export interface City {
    id: Number;
    nome: String;
}

export function isUF(obj: any): obj is UF {
    return 'id' in obj && typeof obj['id'] === 'number' &&
        'nome' in obj && typeof obj['nome'] === 'string' &&
        'sigla' in obj && typeof obj['sigla'] === 'string'
}

export function isCity(obj: any): obj is UF {
    return 'id' in obj && typeof obj['id'] === 'number' &&
        'nome' in obj && typeof obj['nome'] === 'string'
}