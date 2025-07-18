<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Inscricao;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class InscricaoController extends Controller
{
    
    public function index()
    {
        $inscricoes = Inscricao::all();
        return Inertia::render('Inscricao/Index',[
            'inscricoes' => $inscricoes,
        ]);
    }

    
    public function create()
    {
     
        return Inertia::render('Inscricao/create');
    }

  
    public function show($id)
    {
     return Inertia::render('Inscricao/show', [
        'inscricao' => $id
     ]);
    }
}
