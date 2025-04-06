<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sizes extends Model
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['id', 'name', 'slice_area', 'slices', 'price'];
}
