<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('providers', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('location_id')->constrained();
            $table->foreignId('phone_id')->constrained();
            $table->foreignId('mail_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('providers', function (Blueprint $table) {
            $table->dropForeign('providers_inserted_by_foreign');
            $table->dropForeign(['location_id']);
            $table->dropForeign(['phone_id']);
            $table->dropForeign(['mail_id']);
            $table->dropColumn(['mail_id','phone_id','location_id','inserted_by']);
        });
    }
}
