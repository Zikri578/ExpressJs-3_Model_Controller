import express from "express";
import env from "dotenv";
import mahasiswa_routes from "./routes/Mahasiswa_routes.js";

// untuk membaca file env
env.config();

const app = express();

// mengambil PORT di env
const PORT = process.env.PORT;

// menambahkan middleware
app.use(express.json());

// menambahkan route
app.use(mahasiswa_routes);
// cara lain 
// app.get("/", (request, respons) => {
//     // ketika memberikan respons akan menampilkan status responsnya
//     respons.status(200).json({
//         status: true,
//         message: "Berhasil Terhubung ke BackEnd"
//     });
// });

// menampilkan pesan PORT bahwa servernya sudah berjalan
app.listen(PORT, () => {
    console.info("Server Berjalan");
});