/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pembelian', function(table) {
        table.increments('id');
        table.string('nomor_bukti_pembelian');
        table.string('tanggal_pembelian');
        table.string('nama_pemasok');
        table.string('kode_barang');
        table.string('nama_barang');
        table.float('harga_beli_barang', 14, 2);
        table.float('jumlah_barang', 14, 2);
        table.float('ppn', 14, 2);
        table.float('harga_total_barang', 14, 2);
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pembelian');
};
