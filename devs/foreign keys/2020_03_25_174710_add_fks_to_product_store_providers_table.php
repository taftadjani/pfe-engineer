<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFksToProductStoreProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_store_providers', function (Blueprint $table) {
            $table->unsignedBigInteger('inserted_by');
            $table->foreign('inserted_by')->references('id')->on('users');
            $table->foreignId('product_store_id')->constrained();
            $table->foreignId('provider_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_store_providers', function (Blueprint $table) {
            $table->dropForeign('product_store_providers_inserted_by_foreign');
            $table->dropForeign(['product_store_id']);
            $table->dropForeign(['provider_id']);
            $table->dropColumn(['inserted_by','product_store_id','provider_id']);
        });
    }
}
