<?php

use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('comments')->delete();

        for ($i = 1; $i < 10; $i++) {
            \App\Comment::create([
                'user_id' => $i,
                'post_id' => $i,
                'content' => 'content number ' . $i,

            ]);
        }
    }
}
