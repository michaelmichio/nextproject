/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('layanan', function(table) {
        table.increments('id');
        table.string('kode_layanan');
        table.string('nama_layanan');
        table.float('harga_layanan', 14, 2).notNullable().defaultTo('0');
        table.float('jumlah_layanan', 14, 2).notNullable().defaultTo('0');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('layanan');
};
