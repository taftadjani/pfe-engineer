<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToStoreCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('store_commissions', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('store_id')->constrained();
            $table->foreignId('commission_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('store_commissions', function (Blueprint $table) {
            $table->dropForeign('store_commissions_inserted_by_foreign');
            $table->dropForeign(['store_id']);
            $table->dropForeign(['commission_id']);
            $table->dropColumn(['store_id','inserted_by','commission_id']);
        });
    }
}
