<?php

namespace App\Http\Controllers;

use App\Models\Choose;
use Illuminate\Http\Request;

class ChooseController extends Controller
{
    /**
     * Obtener todos los adicionales
     */
    public function index()
    {
        $Choose = Choose::All();
        return response()->json($Choose);
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
    public function show(Choose $choose)
    {
        //
    }

    /**
     * update
     */
    public function update(Request $request, Choose $choose)
    {
        //
    }

    /**
     * destroy
     */
    public function destroy(Choose $choose)
    {
        //
    }
}
