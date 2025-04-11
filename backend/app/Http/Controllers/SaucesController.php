<?php

namespace App\Http\Controllers;

use App\Models\Sauces;
use Illuminate\Http\Request;

class SaucesController extends Controller
{
    /**
     * Obetener todas las salsas
     */
    public function index()
    {
        $sauce = Sauces::All();
        return response()->json($sauce);
    }

    /**
     * store
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Obetener la información de una salsa
     */
    public function show(string $id)
    {
        $sauce = Sauces::find($id);
        if (!$sauce) return response()->json(['error' => 'El producto no existe'], 404);
        return response()->json($sauce);
    }

    /**
     * update
     */
    public function update(Request $request, Sauces $sauces)
    {
        //
    }

    /**
     * destroy
     */
    public function destroy(Sauces $sauces)
    {
        //
    }
}
