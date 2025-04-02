<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Categories;
use App\Models\Products;
use App\Models\Menus;

class CatalogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function getProductsByCategory(string $categoryId)
    {   
        if($categoryId == 'all'){
            $products = Products::all();
            return response()->json($products);
        }
        $products = Products::whereHas('categories', function($query) use ($categoryId) {
            $query->where('categories.id', $categoryId);
        })->get();
        
        return response()->json($products);
    }
}
