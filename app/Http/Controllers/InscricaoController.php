<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class InscricaoController extends Controller
{
    
    public function index(): Response
    {
        
        return Inertia::render('Inscricao/index', [
            
        ]);
    }

    
    public function create(): Response
    {
      
        return Inertia::render('inscricao.create');
    }

  
    public function show($id): Response
    {
     return Inertia::render('Inscricao/show', [
        'inscricao' => $id
     ]);
    }
}
