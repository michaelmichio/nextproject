/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('log_barang_berubah', function(table) {
        table.increments('id');
        table.string('jenis_berubah');
        table.string('kode_barang_lama');
        table.string('kode_barang_baru');
        table.string('nama_barang_lama');
        table.string('nama_barang_baru');
        table.float('harga_beli_barang_lama', 14, 2);
        table.float('harga_beli_barang_baru', 14, 2);
        table.float('jumlah_barang_lama', 14, 2);
        table.float('jumlah_barang_baru', 14, 2);
        table.string('id_user');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('log_barang_berubah');
};
