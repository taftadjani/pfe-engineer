<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToSubCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_comments', function (Blueprint $table) {
            $table->unsignedBigInteger('sender_id');
            $table->foreign('sender_id')->references('id')->on('users');
            $table->foreignId('comment_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_comments', function (Blueprint $table) {
            $table->dropForeign('sub_comments_sender_id_foreign');
            $table->dropForeign(['comment_id']);
            $table->dropColumn(['sender_id','comment_id']);
        });
    }
}
