import { Constants } from "./constants";

export class Utils {
    static esNumero(valor:number) {
        // Verifica si el valor es un número
        if (typeof valor === 'number' && !isNaN(valor)) {
            // Verifica si el número tiene decimales
            return valor % 1 !== 0;
        }
        return false;
    }
    static esConDecimales(value:number) {
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        const cadena:string = String(value);
        const split:string[] = cadena.split('.');
        const value1 = Number(split[0]);
        return Number.isInteger(value1) && split[1].length >= Constants.TWO;
    }
    static esNumeroConDecimales(value:number) {
        return typeof value === 'number' && isFinite(value) && !Number.isInteger(value);
    }
}