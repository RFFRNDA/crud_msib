// --- Ambil table html ---
const table = document.getElementById("table");

// ----- Convert Grade ke Nilai Rata-rata -----
const gradeValues = { 
    A: 4, 
    B: 3, 
    C: 2, 
    D: 1, 
    E: 0
};

// ------------------------ Logic Edit Data -----------------------------

// Function ketika tombol edit diklick
let rowIndexEdit = null;

function editRow(rowIndex) {
    const row = table.rows[rowIndex].cells;

    // Ambil nilai-nilai dari row yang akan diedit
    const nama = row[0].innerHTML;
    const matkul = row[1].innerHTML;
    const grade = row[2].innerHTML;

    // Tampilkan nilai-nilai tersebut di inputan user
    document.getElementById("nama").value = nama;
    document.getElementById("matkul").value = matkul;
    document.getElementById("grade").value = grade;

    // Setel variabel rowIndexToEdit ke indeks baris yang akan diedit
    rowIndexEdit = rowIndex;

    // Ganti tombol "Hitung" dnegan tombol "Submit"
    document.getElementById("addRowBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "inline";
}

// Function ketika tombol submit diklick
function submitEditedData() {
    if (rowIndexEdit !== null) {
        // Seleksi row yang akan dituju sesuai index yang telah diambil sebelumnya di function editRow
        const row = table.rows[rowIndexEdit].cells;

        // Ambil nilai-nilai dari inputan user yang sudah diedit
        let nama = document.getElementById("nama").value;
        let matkul = document.getElementById("matkul").value;
        let grade = document.getElementById("grade").value;
        let selectedGrade = gradeValues[grade];

        // Update nilai-nilai dalam row yang sesuai di tabel
        row[0].innerHTML = nama;
        row[1].innerHTML = matkul;
        row[2].innerHTML = grade;
        row[3].innerHTML = selectedGrade;

        // Kembalikan tampilan normal
        document.getElementById("addRowBtn").style.display = "inline";
        document.getElementById("submitBtn").style.display = "none";

        // Clear inputan user
        document.getElementById("nama").value = "";
        document.getElementById("matkul").value = "";
        document.getElementById("grade").value = "";

        // Reset variabel rowIndexEdit
        rowIndexEdit = null;
    }
}

// -------------- Logic Tambah dan Remove Data ----------------------------

function submitData() {
    // Ambil value inputan user
    let nama = document.getElementById("nama").value;
    let matkul = document.getElementById("matkul").value;
    let grade = document.getElementById("grade").value;
    let selectedGrade = gradeValues[grade];
        
    if (grade in gradeValues) {
        const newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = nama;
        newRow.insertCell(1).innerHTML = matkul;
        newRow.insertCell(2).innerHTML = grade;
        newRow.insertCell(3).innerHTML = selectedGrade;
        
        // Make Edit button
        const editButton = document.createElement('button'); // Bikin button-nya
        const teksEdit = document.createTextNode('Edit'); //Bikin teks untuk button-nya
        editButton.appendChild(teksEdit); // Gabungin button & teksnya
        editButton.classList.add('editBtn'); // Tambahkan class agar bisa di styling
        newRow.insertCell(4).appendChild(editButton); // taruh button yg dibuat ke row

        // event untuk Edit button
        editButton.addEventListener('click', function() {
            editRow(newRow.rowIndex); // edit row sesuai index row nya
        });

        // Make Remove button
        const removeButton = document.createElement('button'); // Bikin button-nya
        const teksRemove = document.createTextNode('Remove'); //Bikin teks untuk button-nya
        removeButton.appendChild(teksRemove); // Gabungin button & teksnya
        removeButton.classList.add('removeBtn'); // Tambahkan class agar bisa di styling
        newRow.insertCell(5).appendChild(removeButton); // taruh button yg dibuat ke row

        // event untuk Remove button
        removeButton.addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex); // delete row sesuai index row nya
            // Saat remove, clear form input
            document.getElementById("nama").value = "";
            document.getElementById("matkul").value = "";
            document.getElementById("grade").value = "";
        });

        // clear form inputan user agar add data berikutnya mudah
        document.getElementById("nama").value = "";
        document.getElementById("matkul").value = "";
        document.getElementById("grade").value = "";
    }
}