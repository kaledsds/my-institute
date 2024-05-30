<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Matiere;
use App\Http\Resources\Matiere\MatiereCollection;
use App\Http\Resources\Matiere\MatiereResource;
use App\Http\Requests\Matiere\StoreMatiere;
use App\Http\Requests\Matiere\UpdateMatiere;

class MatiereController extends Controller
{
    public function index()
    {
        $list = Matiere::all();
        return [
            'data' => new MatiereCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreMatiere $request)
    {
        $data = $request->validated();
        $matiere = Matiere::create($data);
        return [
            'data' => new MatiereResource($matiere),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Matiere $matiere)
    {
        return [
            'data' => new MatiereResource($matiere),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateMatiere $request, Matiere $matiere)
    {
        $data = $request->validated();
        $matiere->update($data);
        return [
            'data' => new MatiereResource($matiere),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Matiere $matiere)
    {
        $matiere->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
