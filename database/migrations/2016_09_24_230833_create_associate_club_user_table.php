<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssociateClubUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('club_user', function (Blueprint $table) {
            $table->increments('id');
            $table->string('club_id');
            $table->string('user_id');
            $table->string('level')->default(1);  //  1:成员 2:负责人 3:社长
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('asscociate_club_user');
    }
}
