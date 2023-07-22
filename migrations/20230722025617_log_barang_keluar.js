/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('log_barang_keluar', function(table) {
        table.increments('id');
        table.string('jenis_keluar');
        table.string('kode_barang');
        table.string('nama_barang');
        table.float('harga_beli_barang', 14, 2);
        table.float('jumlah_barang', 14, 2);
        table.string('id_user');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('log_barang_keluar');
};
