<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        /// El orden es importante debido a las relaciones
        $this->call([
            ProductSeeder::class,
            CategoriesSeeder::class,
            MenusSeeder::class,
            SizeSeeder::class
        ]);
    }
}
