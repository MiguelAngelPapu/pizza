<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePizzaOrderRequest;

use App\Models\Products;
use App\Models\Toppings;
use App\Models\Sauces;
use App\Models\Choose;

use Illuminate\Http\Request;


class ProductsController extends Controller
{
    /**
     * Obtener todos los productos
     */
    public function index()
    {
        $products = Products::All();
        return response()->json($products);
    }

    /**
     * store
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Obtener un producto y sus categorias relacionadas
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
     * update
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
     * Informacion de los productos en el localStorage
    */
    public function findProductInLocalStorage(StorePizzaOrderRequest $request)
    {
        // Los datos ya están validados por StorePizzaOrderRequest
        $data = $request->validated()['localStorage'];

        $processedData = collect($data)->map(function($value) {
            if(preg_match('/CUSTOM/i', $value['id'])){
     
                $customProduct = (object) $value;
                $customProduct->name = "Pizza personalizada";
                $customProduct->categories = [ [ "id" => $customProduct->id, "name" => $customProduct->name] ];
                $customProduct->total = $customProduct->price * $customProduct->amount;
                $topping = Toppings::select('image_url')->find($customProduct->topping);
                $customProduct->imageUrl = $topping ? $topping->image_url : null;

                $customProduct->{'left-half'}['sauce'] = Sauces::find($customProduct->{'left-half'}['sauce']);
                $customProduct->{'left-half'}['choose'] = Choose::whereIn('id', $customProduct->{'left-half'}['choose'])
                    ->select('id', 'name', 'price')
                    ->get();

                $customProduct->{'right-half'}['sauce'] = Sauces::find($customProduct->{'right-half'}['sauce']);
                $customProduct->{'right-half'}['choose'] = Choose::whereIn('id', $customProduct->{'right-half'}['choose'])
                    ->select('id', 'name', 'price')
                    ->get();

                return $customProduct;
            }
            $product = Products::with('categories')->find($value['id']);           
            $product->categories->each->makeHidden('pivot');
            $product->amount = $value['amount'];
            $product->total = $value['price'] * $value['amount'];
            
            return $product;
        })->filter();
        
        return response()->json($processedData);
    }

    
}


