<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('nationality');
            $table->foreign('nationality')->references('id')->on('countries');
            $table->unsignedBigInteger('live_at');
            $table->foreign('live_at')->references('id')->on('cities');

            // $table->foreignId('mail_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_nationality_foreign');
            $table->dropForeign('users_live_at_foreign');
            // $table->dropForeign(['mail_id']);
            $table->dropColumn(['live_at','nationality']);
            // $table->dropColumn(['mail_id']);
        });
    }
}
