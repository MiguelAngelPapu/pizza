<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Choose extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['id', 'choose_category', 'name', 'price', 'description'];
}
