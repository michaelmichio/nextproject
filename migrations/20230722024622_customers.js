/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customers', function(table) {
        table.increments('id');
        table.string('nama_customer');
        table.string('alamat_customer');
        table.string('email_customer');
        table.string('telepon_customer');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customers');
};
