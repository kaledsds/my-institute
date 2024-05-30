<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Seance;
use App\Http\Resources\Seance\SeanceCollection;
use App\Http\Resources\Seance\SeanceResource;
use App\Http\Requests\Seance\StoreSeance;
use App\Http\Requests\Seance\UpdateSeance;

class SeanceController extends Controller
{
    public function index()
    {
        $list = Seance::all();
        return [
            'data' => new SeanceCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreSeance $request)
    {
        $data = $request->validated();
        $seance = Seance::create($data);
        return [
            'data' => new SeanceResource($seance),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Seance $seance)
    {
        return [
            'data' => new SeanceResource($seance),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateSeance $request, Seance $seance)
    {
        $data = $request->validated();
        $seance->update($data);
        return [
            'data' => new SeanceResource($seance),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Seance $seance)
    {
        $seance->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
