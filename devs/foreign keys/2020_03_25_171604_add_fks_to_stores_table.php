<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stores', function (Blueprint $table) {
            $table->unsignedBigInteger('created_by');
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreignId('location_id')->constrained();
            $table->foreignId('mail_id')->constrained();
            $table->foreignId('phone_id')->constrained();
            $table->foreignId('currency_id')->constrained();
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
        Schema::table('stores', function (Blueprint $table) {
            $table->dropForeign('stores_created_by_foreign');
            $table->dropForeign(['warranty_id']);
            $table->dropForeign(['currency_id']);
            $table->dropForeign(['phone_id']);
            $table->dropForeign(['location_id']);
            $table->dropForeign(['mail_id']);
            $table->dropColumn(['warranty_id','currency_id','phone_id','mail_id','location_id','created_by']);
        });
    }
}
