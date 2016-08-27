<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
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
            $table->string('email')->unique();
            $table->string('password');
            $table->string('class')->nullable();
            $table->string('grade');
            $table->string('avatar')->nullable();
            $table->string('powerschool_id')->nullable()->unique();
            $table->string('type');
            $table->string('created_counts'); //累计发言数
            $table->string('identity'); // 用|分割不同身份,比如 1|2|3
            //个人信息
            $table->string('nickname');
            $table->string('condition');
            $table->text('self_intro');
            $table->string('wechat_ID');
            $table->string('QQ');
            $table->string('alternative_email');
            $table->string('phone');
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
        Schema::drop('users');
    }
}
