<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToCartDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cart_details', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('cart_id')->constrained();
            $table->foreignId('product_store_id')->constrained();
            $table->foreignId('unit_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cart_details', function (Blueprint $table) {
            $table->dropForeign('cart_details_inserted_by_foreign');
            $table->dropForeign(['cart_id']);
            $table->dropForeign(['product_store_id']);
            $table->dropForeign(['unit_id']);
            $table->dropColumn(['inserted_by','cart_id','product_store_id','unit_id']);
        });
    }
}
