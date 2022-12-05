import express from "express";
import { mahasiswa_create, mahasiswa_read } from "../controllers/Mahasiswa_controller.js";

// membuat variabel mahasiswa routes
const mahasiswa_routes = express.Router();

// membuat route create mahasiswa 
mahasiswa_routes.post("/api/mahasiswa/create", mahasiswa_create);

// membuat route membaca mahasiswa
mahasiswa_routes.get("/api/mahasiswa/read", mahasiswa_read);

// memanggil secara default
export default mahasiswa_routes;