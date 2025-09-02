<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    // Obtener todos los pedidos con su cliente relacionado
    public function index()
    {
        return Pedido::with('cliente')->get();
    }

    // Crear un nuevo pedido
    public function store(Request $request)
    {
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'descripcion' => 'required|string',
            'total' => 'required|numeric',
        ]);

        $pedido = Pedido::create($request->all());

        // Cargar la relación con el cliente
        $pedido->load('cliente');

        return response()->json($pedido, 201);
    }

    // Mostrar un pedido específico con su cliente
    public function show($id)
    {
        return Pedido::with('cliente')->findOrFail($id);
    }

    // Actualizar un pedido
    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->update($request->all());

        // Recargar la relación por si el cliente_id cambió
        $pedido->load('cliente');

        return response()->json($pedido);
    }

    // Eliminar un pedido
    public function destroy($id)
    {
        Pedido::findOrFail($id)->delete();

        return response()->json(['mensaje' => 'Pedido eliminado']);
    }
}
