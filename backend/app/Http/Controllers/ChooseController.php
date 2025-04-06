<?php

namespace App\Http\Controllers;

use App\Models\Choose;
use Illuminate\Http\Request;

class ChooseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Choose = Choose::All();
        return response()->json($Choose);
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
    public function show(Choose $choose)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Choose $choose)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Choose $choose)
    {
        //
    }
}
