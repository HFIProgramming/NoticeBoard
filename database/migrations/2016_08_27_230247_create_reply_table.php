<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReplyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('replys', function (Blueprint $table) {
            $table->increments('id');
            $table->string('belongs_to')->nullable();
            $table->string('type');
            $table->longText('content');
            $table->date('created_at');
            $table->date('last_edited_at');
            $table->string('type');
            $table->string('edited_counts');
            $this->text('tags');
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
        Schema::drop('replys');
    }
}
