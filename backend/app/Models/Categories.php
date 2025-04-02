<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['id', 'name', 'description', 'price', 'imageUrl'];
    
    // Relación con productos a través de la tabla menus
    public function products()
    {
        return $this->belongsToMany(Products::class, 'menus', 'category_id', 'product_id');
    }
}
