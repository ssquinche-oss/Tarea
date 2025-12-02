class Auto {

    acelerar(velocidadActual: number, incremento: number): number {
        return velocidadActual + incremento;
    }

    frenar(velocidadActual: number, decremento: number): number {
        const nuevaVel = velocidadActual - decremento;
        return nuevaVel < 0 ? 0 : nuevaVel;
    }

    recorrer(distancia: number, tiempo: number): number {
        return distancia / tiempo;
    }
}
