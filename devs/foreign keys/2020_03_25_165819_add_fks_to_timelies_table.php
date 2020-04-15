<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToTimeliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('timelies', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('dayly_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('timelies', function (Blueprint $table) {
            $table->dropForeign('timelies_inserted_by_foreign');
            $table->dropForeign(['dayly_id']);
            $table->dropColumn(['dayly_id','inserted_by']);
        });
    }
}
