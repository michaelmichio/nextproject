/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('barang', function(table) {
        table.increments('id');
        table.string('kode_barang');
        table.string('nama_barang');
        table.float('harga_beli_barang', 14, 2).notNullable().defaultTo('0');
        table.float('jumlah_barang', 14, 2).notNullable().defaultTo('0');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('barang');
};
