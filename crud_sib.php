<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan 2</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="generator">
            <div class="head">
                <h2><b>Hitung Nilai Rata-Rata</b></h2>
            </div>
            <form action="" class="inputform">
                <div class="mb-3">
                    <label for="nama" class="form-label"><b>Nama</b></label>
                    <input type="text" class="form-control" id="nama"  required>
                </div>
                <div class="mb-3">
                    <label for="matkul" class="form-label"><b>Mata Kuliah</b></label>
                    <input type="text" class="form-control" id="matkul" required>
                </div>
                <div class="grade">
                    <label for="grade"><b>Grade:</b></label><br>
                    <select id="grade" required>
                        <option value="">Pilih Grade</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
            </form>
            <button type="button" onclick="submitData()" class="btn btn-primary" id="addRowBtn">Hitung</button>
            <button type="button" style="display:none;" onclick="submitEditedData()" class="btn btn-primary" id="submitBtn">Submit</button>
        </div>

        <div class="generate">
            <table id="table" border="2">
                <tr>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Grade</th>
                    <th>Nilai Rata-rata</th>
                    <th colspan="2">Aksi</th>
                </tr>
            </table>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>