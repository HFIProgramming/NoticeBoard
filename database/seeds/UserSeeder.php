<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->delete();

        for ($i = 0; $i < 10; $i++) {
            \App\User::create([
                'name' => 'name' . $i,
                'email' => $i . "@test.com",
            ]);
        }
    }
}