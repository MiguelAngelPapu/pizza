<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// Agregar estos clases para ejecurtar la los Seeder en la base de datos
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            // All products
            [
                'id' => 'P002',
                'name' => 'Fresh Farm House',
                'description' => 'crisp capsicum, succulent mushrooms and fresh tomatoes',
                'price' => 14.25,
                'imageUrl' => '/assets/img/product1.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P003',
                'name' => 'Peppy Paneer',
                'description' => 'Chunky paneer with crisp capsicum and spicy red pepper',
                'price' => 16.75,
                'imageUrl' => '/assets/img/product2.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P004',
                'name' => 'Mexican Green Wave',
                'description' => 'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes',
                'price' => 20.00,
                'imageUrl' => '/assets/img/product3.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P005',
                'name' => 'Peppy Paneer',
                'description' => 'Chunky paneer with crisp capsicum and spicy red pepper',
                'price' => 16.75,
                'imageUrl' => '/assets/img/product4.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P006',
                'name' => 'Mexican Green Wave',
                'description' => 'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes',
                'price' => 20.00,
                'imageUrl' => '/assets/img/product5.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P007',
                'name' => 'Mexican Green Wave',
                'description' => 'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes',
                'price' => 20.00,
                'imageUrl' => '/assets/img/product5.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'P008',
                'name' => 'Mexican Green Wave',
                'description' => 'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes',
                'price' => 20.00,
                'imageUrl' => '/assets/img/product5.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Starters
            [
                'id' => 'ST001',
                'name' => 'Garlic Bread',
                'description' => 'Freshly baked bread topped with garlic butter, herbs, and a sprinkle of parmesan',
                'price' => 5.99,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'ST002',
                'name' => 'Mozzarella Sticks',
                'description' => 'Crispy breaded mozzarella sticks served with tangy marinara sauce',
                'price' => 7.50,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'ST003',
                'name' => 'Chicken Wings',
                'description' => 'Juicy chicken wings tossed in your choice of sauce: buffalo, BBQ, or honey garlic',
                'price' => 9.95,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Asian
            [
                'id' => 'AS001',
                'name' => 'Vegetable Spring Rolls',
                'description' => 'Crispy rolls filled with cabbage, carrots, and mushrooms, served with sweet chili sauce',
                'price' => 6.50,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'AS002',
                'name' => 'Chicken Satay',
                'description' => 'Grilled chicken skewers marinated in exotic spices, served with peanut sauce',
                'price' => 9.25,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Plancha & roasts & grills
            [
                'id' => 'PR001',
                'name' => 'Grilled Ribeye Steak',
                'description' => '12oz ribeye steak grilled to your liking, served with roasted vegetables and fries',
                'price' => 24.95,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'PR002',
                'name' => 'Roast Chicken',
                'description' => 'Half chicken roasted with herbs and garlic, served with rosemary potatoes',
                'price' => 16.50,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            // Classic
            [
                'id' => 'CL001',
                'name' => 'Classic Margherita',
                'description' => 'Traditional pizza with tomato sauce, fresh mozzarella, basil leaves, and olive oil',
                'price' => 12.95,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 'CL002',
                'name' => 'Pepperoni',
                'description' => 'Tomato sauce, mozzarella cheese and pepperoni slices',
                'price' => 13.75,
                'imageUrl' => '/assets/img/not-found-pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('products')->insert($products);
    }
}
