<?php

namespace App\Http\Controllers;

use App\Models\Sauces;
use Illuminate\Http\Request;

class SaucesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sauce = Sauces::All();
        return response()->json($sauce);
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
    public function show(Sauces $sauces)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sauces $sauces)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sauces $sauces)
    {
        //
    }
}
