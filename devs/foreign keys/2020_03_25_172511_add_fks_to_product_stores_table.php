<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToProductStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_stores', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('store_id')->constrained();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('condition_id')->constrained();
            $table->foreignId('unit_id')->constrained();
            $table->foreignId('tax_id')->constrained();
            $table->foreignId('location_id')->constrained();
            $table->foreignId('warranty_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_stores', function (Blueprint $table) {
            $table->dropForeign('product_stores_inserted_by_foreign');
            $table->dropForeign(['location_id']);
            $table->dropForeign(['store_id']);
            $table->dropForeign(['product_id']);
            $table->dropForeign(['condition_id']);
            $table->dropForeign(['unit_id']);
            $table->dropForeign(['warranty_id']);
            $table->dropForeign(['tax_id']);
            $table->dropColumn(['location_id','store_id','product_id','condition_id','unit_id','tax_id','inserted_by','warranty_id']);
        });
    }
}
