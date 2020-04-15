<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('order_details', function (Blueprint $table) {
            $table->foreignId('product_store_id')->constrained();
            $table->foreignId('order_id')->constrained();
            $table->foreignId('tax_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('order_details', function (Blueprint $table) {
            $table->dropForeign(['product_store_id']);
            $table->dropForeign(['order_id']);
            $table->dropForeign(['tax_id']);
            $table->dropColumn(['product_store_id','order_id','tax_id']);
        });
    }
}
