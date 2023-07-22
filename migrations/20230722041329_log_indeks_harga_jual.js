/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('log_indeks_harga_jual', function(table) {
        table.increments('id');
        table.string('jenis_berubah');
        table.float('harga_jual_barang_lama', 14, 2).notNullable().defaultTo('0');
        table.float('harga_jual_barang_baru', 14, 2).notNullable().defaultTo('0');
        table.string('id_user');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('log_indeks_harga_jual');
};
