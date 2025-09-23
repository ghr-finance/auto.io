// script.js

// Fungsi untuk format angka ke format Rupiah
function formatRupiah(num) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(num);
}

// Fungsi render data summary.json
async function loadSummary() {
    try {
        const response = await fetch("summary.json");
        if (!response.ok) {
            throw new Error("Gagal memuat summary.json");
        }

        const data = await response.json();
        renderSummary(data);
    } catch (err) {
        console.error(err);
        document.getElementById("summary").innerHTML =
            "<p style='color:red;'>Gagal memuat data summary.json</p>";
    }
}

function renderSummary(data) {
    const container = document.getElementById("summary");
    container.innerHTML = ""; // reset

    // Judul
    const title = document.createElement("h2");
    title.textContent = "Ringkasan Keuangan";
    container.appendChild(title);

    // Tabel
    const table = document.createElement("table");
    table.classList.add("summary-table");

    // Header
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
      <th>Bulan</th>
      <th>Total Pemasukan</th>
      <th>Total Pengeluaran</th>
      <th>Saldo Akhir</th>
    </tr>
  `;
    table.appendChild(thead);

    // Body
    const tbody = document.createElement("tbody");
    data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${row.bulan}</td>
      <td>${formatRupiah(row.total_pemasukan)}</td>
      <td>${formatRupiah(row.total_pengeluaran)}</td>
      <td>${formatRupiah(row.saldo_akhir)}</td>
    `;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.appendChild(table);
}

// Panggil loadSummary saat halaman siap
document.addEventListener("DOMContentLoaded", loadSummary);
