<?php

namespace App\Http\Controllers;

use App\Models\Crusts;
use Illuminate\Http\Request;

class CrustsController extends Controller
{
    /**
     * Obtener todas las cortezas de la pizza
     */
    public function index()
    {
        $crusts = Crusts::All();
        return response()->json($crusts);
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
    public function show(Crusts $crusts)
    {
        //
    }

    /**
     * update
     */
    public function update(Request $request, Crusts $crusts)
    {
        //
    }

    /**
     * destroy
     */
    public function destroy(Crusts $crusts)
    {
        //
    }
}
