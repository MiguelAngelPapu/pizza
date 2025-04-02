<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $casts = [
        'price' => 'float',
    ];
    
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['id', 'name', 'description', 'price', 'imageUrl'];
    
    // Relación con categorías a través de la tabla menus
    public function categories()
    {
        return $this->belongsToMany(Categories::class, 'menus', 'product_id', 'category_id');
    }
}
