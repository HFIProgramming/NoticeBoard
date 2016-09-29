<?php

use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('posts')->delete();

        for ($i = 0; $i < 10; $i++) {
            \App\Post::create([
                'user_id' => $i,
                'title' => 'post '. $i,
                'tags' => $i,
                'content' => 'content number ' . $i,

            ]);
        }
    }
}