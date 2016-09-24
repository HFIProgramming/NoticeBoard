<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClubTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('avatar')->nullable();
            $table->string('powerschool_id')->nullable()->unique();
            $table->string('type');
            //社团信息
            $table->text('intro');
            $table->string('is_in_charge');  // 社长ID 多个用 | 分割
            $table->string('is_take_charge'); //负责人ID 多个用 | 分割
            $table->string('is_hidden');  //只对指定人员开放
            $table->string('created_at');

            $table->rememberToken();
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
       Schema::dropIfExists('clubs');
    }
}
