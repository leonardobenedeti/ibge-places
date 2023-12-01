export interface UF {
    id: number;
    nome: string;
    sigla: string;
}

export interface City {
    id: number;
    nome: string;
}

export interface Names {
    nome: string;
    res: Interval[];
}

export interface Interval {
    periodo: string;
    frequencia: number;
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