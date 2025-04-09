<?php

namespace App\Http\Controllers;

use App\Models\Toppings;
use Illuminate\Http\Request;

class ToppingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $topping = Toppings::All();
        return response()->json($topping);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function show(string $id)
    {
        $topping = Toppings::find($id);
        return response()->json($topping);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Toppings $toppings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Toppings $toppings)
    {
        //
    }
}
