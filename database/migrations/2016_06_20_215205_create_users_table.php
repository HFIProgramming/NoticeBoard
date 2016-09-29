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
            $table->string('type'); // 数字为用户身份: 1 public, 2 admin
            $table->string('created_counts')->default(0); //累计发言数
            $table->string('identity'); // 用|分割不同权限,对应到assoc表单中的id
            //个人信息
            $table->string('nickname')->nullable()->unique();
            $table->string('condition');
            $table->text('self_intro')->nullable();
            $table->string('wechat_ID')->nullable()->unique();
            $table->string('QQ')->nullable()->unique();
            $table->string('alternative_email')->nullable();
            $table->string('phone')->nullable()->unique();
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
        Schema::dropIfExists('users');
    }
}
