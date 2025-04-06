<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sauces extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['id', 'name', 'price'];
}
