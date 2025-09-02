<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function index()
    {
        return response()->json(Cliente::all(), 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|unique:clientes,email',
            'telefono' => 'nullable|string|max:20',
        ]);

        $cliente = Cliente::create($validated);
        return response()->json($cliente, 201);
    }

    public function show(Cliente $cliente)
    {
        return response()->json($cliente, 200);
    }

    public function update(Request $request, Cliente $cliente)
    {
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:clientes,email,' . $cliente->id,
            'telefono' => 'nullable|string|max:20',
        ]);

        $cliente->update($validated);
        return response()->json($cliente, 200);
    }

    public function destroy(Cliente $cliente)
    {
        $cliente->delete();
        return response()->json(['message' => 'Cliente eliminado correctamente'], 200);
    }
}
