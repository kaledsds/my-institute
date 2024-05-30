<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cours;
use App\Http\Resources\Cours\CoursCollection;
use App\Http\Resources\Cours\CoursResource;
use App\Http\Requests\Cours\StoreCours;
use App\Http\Requests\Cours\UpdateCours;

class CoursController extends Controller
{
    public function index()
    {
        $list = Cours::all();
        return [
            'data' => new CoursCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreCours $request)
    {
        $data = $request->validated();
        $cours = Cours::create($data);
        return [
            'data' => new CoursResource($cours),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Cours $cours)
    {
        return [
            'data' => new CoursResource($cours),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateCours $request, Cours $cours)
    {
        $data = $request->validated();
        $cours->update($data);
        return [
            'data' => new CoursResource($cours),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Cours $cours)
    {
        $cours->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
