<?php

namespace App\Http\Controllers;

use App\Models\Sizes;
use Illuminate\Http\Request;

class SizesController extends Controller
{
    /**
     * Obtener todos los tamaños de las pizza
     */
    public function index()
    {
        $size = Sizes::All();
        return response()->json($size);
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
    public function show(Sizes $sizes)
    {
        //
    }

    /**
     * update
     */
    public function update(Request $request, Sizes $sizes)
    {
        //
    }

    /**
     * destroy
     */
    public function destroy(Sizes $sizes)
    {
        //
    }
}
