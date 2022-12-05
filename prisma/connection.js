import { PrismaClient } from "@prisma/client";

// membuat sebuah koneksi ke database
const db = new PrismaClient();

export default db;