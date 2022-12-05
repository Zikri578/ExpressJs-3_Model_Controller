import { request, respons } from "express";
import db from "../../prisma/connection.js"

// membuat data mahasiswa
export const mahasiswa_create = async (req = request, res = respons) => {
    try {
        // menangkap request data dalam bentuk json 
        const data = await req.body;

        // membuat variabel createMahasiswa
        const createMahasiswa = await db.dataMahasiswa.create({
            // mengambil data yang ada di request body
            data: data
        });

        // mengambalikan respons status ketika sudah dibuat akan dirubah menjadi 201 dalam bentuk json
        return res.status(201).json({
            success: true,
            data: createMahasiswa
        });

    } catch (error) {
        // mengembalikan status error kedalam bentuk json
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// membaca data mahasiswa
export const mahasiswa_read = async (req = request, res = respons) => {
    try {
        // membuat variabel hasil 
        const result = await db.dataMahasiswa.findMany();

        // mengembalikan status respons membaca data mahasiswa kedalam bentuk json
        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        // mengembalikan status error kedalam bentuk json
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};  