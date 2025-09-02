<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = ['cliente_id', 'descripcion', 'total'];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}