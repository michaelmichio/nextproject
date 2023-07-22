/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('penjualan', function(table) {
        table.increments('id');
        table.string('kode_barang');
        table.string('nama_barang');
        table.float('harga_beli_barang', 14, 2);
        table.float('harga_jual_barang', 14, 2);
        table.float('jumlah_barang', 14, 2);
        table.float('diskon', 14, 2);
        table.float('ppn', 14, 2);
        table.float('harga_total', 14, 2);
        table.string('nomor_kuitansi');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('penjualan');
};
