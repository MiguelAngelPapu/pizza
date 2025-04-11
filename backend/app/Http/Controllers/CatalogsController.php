<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Categories;
use App\Models\Products;
use App\Models\Menus;

class CatalogsController extends Controller
{
    /**
     * Index
     */
    public function index(Request $request)
    {
        
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * destroy
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Obtener todos los productos de una categoría.
     * @param string $categoryId
     */
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
