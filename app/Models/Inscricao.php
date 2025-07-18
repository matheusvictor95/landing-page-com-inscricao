<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscricao extends Model
{
   protected $table = 'inscricaos';
   protected $fillable = ['nome', 'email', 'telefone', 'evento_id'];

    public function evento()
    {
        return $this->belongsTo(Evento::class);
    }
}
