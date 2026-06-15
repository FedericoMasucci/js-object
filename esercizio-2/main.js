const pers1 = {
    nome: "Federico",
    cognome: "Masucci",
    dataN: [29, 2, 1932],
    indirizzo: "Via Francesco de Sanctis",
    city: "Napoli",
    calcEta() {
        let annoCor = new Date().getFullYear();
        let eta = annoCor - this.dataN[2];
        return eta;
    }
}

console.log(pers1.calcEta());