/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('kuitansi', function(table) {
        table.increments('id');
        table.string('nomor_kuitansi');
        table.string('nomor_polisi');
        table.string('jenis_kendaraan');
        table.string('nomor_rangka');
        table.string('nomor_mesin');
        table.string('nomor_spk');
        table.integer('jumlah_cetak').notNullable().defaultTo('0');
        table.string('id_customer');
        table.string('id_user');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('kuitansi');
};
