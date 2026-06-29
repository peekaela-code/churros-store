function hitung(){

    let harga = 8000;

    let rasa = document.getElementById("rasa").value;

    let jumlah = document.getElementById("jumlah").value;

    let total = harga * jumlah;

    document.getElementById("hasil").innerHTML=
    `
    Rasa : ${rasa}<br>
    Jumlah : ${jumlah}<br>
    Total Bayar : Rp${total.toLocaleString()}
    `;
}