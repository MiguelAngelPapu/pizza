<?php

namespace App\Http\Controllers;

use App\Models\Crusts;
use Illuminate\Http\Request;

class CrustsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $crusts = Crusts::All();
        return response()->json($crusts);
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
    public function show(Crusts $crusts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Crusts $crusts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Crusts $crusts)
    {
        //
    }
}
