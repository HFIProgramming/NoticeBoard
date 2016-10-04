<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('last_user')->nullable();
            $table->string('title');
            $table->string('type')->default(1);
            $table->string('is_login')->default(0);
           // $table->string('tags');  no need, https://github.com/rtconner/laravel-tagging does the same job
            $table->string('club_post_type')->default(0);  // 0 是默认
            $table->longText('content');
            $table->date('last_edited_at')->nullable();
            $table->string('edited_counts')->nullable();
            $table->string('is_hidden')->nullable(); //which groups of people cannot see 格式 1|2|3|5
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
        Schema::dropIfExists('posts');
    }
}
