<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToSigninoutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('signinouts', function (Blueprint $table) {
            $table->unsignedBigInteger('signout_by');
            $table->foreign('signout_by')->references('id')->on('users');
            $table->foreignId('user_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('signinouts', function (Blueprint $table) {
            $table->dropForeign('signinouts_signout_by_foreign');
            $table->dropForeign(['user_id']);
            $table->dropColumn(['user_id','signout_by']);
        });
    }
}
