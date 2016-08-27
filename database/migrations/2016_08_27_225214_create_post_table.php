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
            $table->string('author_id')->nullable();
            $table->string('type');
            $table->string('club_post_type');  // 1 是默认
            $table->longText('content');
            $table->date('created_at');
            $table->date('last_edited_at');
            $table->string('edited_counts');
            $this->string('is_hidden'); //which groups of people cannot see 格式 1|2|3|5
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
        Schema::drop('posts');
    }
}
