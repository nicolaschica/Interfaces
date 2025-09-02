<?php

namespace App\Http\Controllers;

use App\Models\Libro;
use Illuminate\Http\Request;

class LibroController extends Controller
{
    // Listar todos los libros
    public function index()
    {
        return response()->json(Libro::all());
    }

    // Registrar un nuevo libro
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'autor' => 'required|string|max:255',
            'anio' => 'required|digits:4|integer',
            'categoria' => 'required|string|max:255',
        ]);

        $libro = Libro::create($request->all());

        return response()->json($libro, 201);
    }

    // Eliminar un libro
    public function destroy($id)
    {
        $libro = Libro::findOrFail($id);
        $libro->delete();

        return response()->json(null, 204);
    }

    // Actualizar un libro
    public function update(Request $request, $id)
    {
        $libro = Libro::findOrFail($id);

        $request->validate([
            'titulo' => 'sometimes|required|string|max:255',
            'autor' => 'sometimes|required|string|max:255',
            'anio' => 'sometimes|required|digits:4|integer',
            'categoria' => 'sometimes|required|string|max:255',
        ]);

        $libro->update($request->all());

        return response()->json($libro);
    }

    // Mostrar un libro específico
    public function show($id)
    {
        return response()->json(Libro::findOrFail($id));
    }
}
