<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToWishlistDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('wishlist_details', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('product_store_id')->constrained();
            $table->foreignId('wishlist_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('wishlist_details', function (Blueprint $table) {
            $table->dropForeign('wishlist_details_inserted_by_foreign');
            $table->dropForeign(['product_store_id']);
            $table->dropForeign(['wishlist_id']);
            $table->dropColumn(['inserted_by','product_store_id','wishlist_id']);
        });
    }
}
