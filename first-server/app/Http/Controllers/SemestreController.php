<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Semestre;
use App\Http\Resources\Semestre\SemestreCollection;
use App\Http\Resources\Semestre\SemestreResource;
use App\Http\Requests\Semestre\StoreSemestre;
use App\Http\Requests\Semestre\UpdateSemestre;

class SemestreController extends Controller
{
    public function index()
    {
        $list = Semestre::all();
        return [
            'data' => new SemestreCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreSemestre $request)
    {
        $data = $request->validated();
        $semestre = Semestre::create($data);
        return [
            'data' => new SemestreResource($semestre),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Semestre $semestre)
    {
        return [
            'data' => new SemestreResource($semestre),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateSemestre $request, Semestre $semestre)
    {
        $data = $request->validated();
        $semestre->update($data);
        return [
            'data' => new SemestreResource($semestre),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Semestre $semestre)
    {
        $semestre->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
