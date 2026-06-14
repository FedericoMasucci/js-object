const triangolo = {
    lati: [3, 3, 5],
    angoli: [90, 45, 45],
    calcPer() {
        let perimetro = 0;
        for (let i = 0; i < this.lati.length; i++) {
            perimetro = perimetro + this.lati[i];
        }
        return perimetro;
    },
    calcArea() {
        let area = 0;
        if (this.angoli.some(angolo => angolo === 90)) {

            area = (this.lati[0] * this.lati[1]) / 2;
        }
        return area;
    }
}

console.log(triangolo.calcPer(), "m");
console.log(triangolo.calcArea(), "m²");