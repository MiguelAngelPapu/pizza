<?php

namespace App\Http\Controllers;

use App\Models\Sizes;
use Illuminate\Http\Request;

class SizesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $size = Sizes::All();
        return response()->json($size);
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
    public function show(Sizes $sizes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sizes $sizes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sizes $sizes)
    {
        //
    }
}
