<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('prices', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('product_store_id')->constrained();
            $table->foreignId('unit_id')->constrained();
            $table->foreignId('currency_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('prices', function (Blueprint $table) {
            $table->dropForeign('prices_inserted_by_foreign');
            $table->dropForeign(['product_store_id']);
            $table->dropForeign(['unit_id']);
            $table->dropForeign(['currency_id']);
            $table->dropColumn(['inserted_by','product_store_id','unit_id','currency_id']);
        });
    }
}
