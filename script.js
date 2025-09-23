document.addEventListener("DOMContentLoaded", async () => {
    try {
        // pakai path relatif yang sesuai GitHub Pages
        const response = await fetch("./summary.json");
        if (!response.ok) throw new Error("Gagal memuat summary.json");
        const data = await response.json();

        const tbody = document.querySelector("#summary-table tbody");
        tbody.innerHTML = "";

        data.forEach(item => {
            const pemasukan = item.totalPemasukan || 0;
            const pengeluaran = item.totalPengeluaran || 0;
            const saldoAkhir = item.saldoAkhir || 0;

            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.bulan}</td>
        <td>Rp${pemasukan.toLocaleString("id-ID")}</td>
        <td>Rp${pengeluaran.toLocaleString("id-ID")}</td>
        <td>Rp${saldoAkhir.toLocaleString("id-ID")}</td>
      `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Error:", error);
        document.querySelector("#summary-table tbody").innerHTML =
            "<tr><td colspan='4'>Gagal memuat data</td></tr>";
    }
});
