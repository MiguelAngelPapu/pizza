<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;


class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Buscamos el producto por su ID y cargamos la relación con categorías
        // usando el método with() para evitar la carga perezosa
        $product = Products::with('categories')->find($id);
        // Eliminamos la relación pivot de la respuesta
        // para que no se incluya en la respuesta JSON
        $product->categories->each->makeHidden('pivot');
        if (!$product) return response()->json(['error' => 'El producto no existe'], 404);
        return response()->json($product);
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
    public function findProductInLocalStorage(Request $request){
        $data = json_decode($request->input('localStorage'));
        $processedData = collect($data)->map(function($value, $key) {
            if($value->id == "CUSTOM"){
                $value->name = "Pizza personalizada";
                $value->total = $value->price * $value->amount;
                return $value;
            }
            $product = Products::with('categories')->find($value->id);
            $product->categories->each->makeHidden('pivot');
            $product->amount = $value->amount;
            $product->total = $value->price * $value->amount;
            if (!$product) return response()->json(['error' => 'El producto no existe'], 404);
            return $product;
        });
        return response()->json($processedData);
    }
}
