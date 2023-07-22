/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('penggunaan_layanan', function(table) {
        table.increments('id');
        table.string('kode_layanan');
        table.string('nama_layanan');
        table.float('harga_layanan', 14, 2).notNullable().defaultTo('0');
        table.float('jumlah_layanan', 14, 2).notNullable().defaultTo('0');
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
    return knex.schema.dropTable('penggunaan_layanan');
};
