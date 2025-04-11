<?php

namespace App\Http\Controllers;

use App\Models\Toppings;
use Illuminate\Http\Request;

class ToppingsController extends Controller
{
    /**
     * Obtener todosd los estilo de cobertura
     */
    public function index()
    {
        $topping = Toppings::All();
        return response()->json($topping);
    }

    /**
     * store
     */
    public function store(Request $request)
    {
        //
    }
    /**
     * show
     */
    public function show(string $id)
    {
        $topping = Toppings::find($id);
        return response()->json($topping);
    }

    /**
     * update
     */
    public function update(Request $request, Toppings $toppings)
    {
        //
    }

    /**
     * destroy
     */
    public function destroy(Toppings $toppings)
    {
        //
    }
}
