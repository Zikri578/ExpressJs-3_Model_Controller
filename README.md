# ExpressJs-3_Model_Controller

Dalam arsitektur aplikasi web, model-view-controller (MVC) adalah pola desain yang digunakan untuk memisahkan logika aplikasi menjadi tiga komponen yaitu model, view, dan controller.

Dalam Express.js, komponen controller dalam arsitektur MVC bertanggung jawab untuk menangani permintaan dari client, memproses data, dan mengirimkan respons yang sesuai ke client. Controller dapat digunakan untuk mengatur logika aplikasi, seperti mengambil data dari basis data, memvalidasi input dari client, atau mengatur akses ke fitur tertentu dalam aplikasi.

Secara umum, sebuah controller dalam Express.js adalah sebuah modul yang meng-export sekumpulan fungsi callback yang digunakan untuk menangani rute dalam aplikasi. Contohnya:

    const express = require('express');
    const router = express.Router();
    const controller = require('path/to/controller');

    router.get('/', controller.getIndex);
    router.post('/add', controller.postAdd);
    router.put('/update/:id', controller.putUpdate);
    router.delete('/delete/:id', controller.delete);

    module.exports = router;

Setiap fungsi callback yang digunakan dalam controller dapat mengambil request dan response sebagai parameter, seperti halnya middleware pada express.

    const controller = {
      getIndex: (req, res) => {
        res.send("This is index page")
      },
      postAdd: (req, res) => {
        // doing something with req.body
        res.send("Add new data")
      }
    }

    module.exports = controller;

Beberapa keuntungan dari menggunakan controller dalam Express.js adalah:
* Memudahkan dalam manajemen kode, sehingga lebih mudah untuk dimaintain dan dikembangkan
* Memudahkan dalam manajemen akses terhadap fitur-fitur dalam aplikasi
* Memudahkan dalam manajemen error handling
* Menyederhanakan proses testing karena kode yang dapat di test terpisah dari routing.
