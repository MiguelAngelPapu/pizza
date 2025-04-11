<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Categories;

class CategoriesController extends Controller
{
    /**
     * Obtener todas las categorías
     */
    public function index()
    {
        $category = Categories::All();
        return response()->json($category);
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        //
    }

     /**
     * Obtener la información de una categoría
     *
     * @param  string  $id Id de la categoria
     * @example 2
     */
    public function show(string $id)
    {
        
        $category = Categories::find($id);
        return response()->json($category);
    }

    /**
     * Update
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Destroy 
     */
    public function destroy(string $id)
    {
        //
    }
}
