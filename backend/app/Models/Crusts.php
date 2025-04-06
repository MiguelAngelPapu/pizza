<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Crusts extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['id', 'name', 'extra_price'];
}
