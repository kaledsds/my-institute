<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specialite;
use App\Http\Resources\Specialite\SpecialiteCollection;
use App\Http\Resources\Specialite\SpecialiteResource;
use App\Http\Requests\Specialite\StoreSpecialite;
use App\Http\Requests\Specialite\UpdateSpecialite;


class SpecialiteController extends Controller
{
    public function index()
    {
        $list = Specialite::all();
        return [
            'data' => new SpecialiteCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreSpecialite $request)
    {
        $data = $request->validated();
        $specialite = Specialite::create($data);
        return [
            'data' => new SpecialiteResource($specialite),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Specialite $specialite)
    {
        return [
            'data' => new SpecialiteResource($specialite),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateSpecialite $request, Specialite $specialite)
    {
        $data = $request->validated();
        $specialite->update($data);
        return [
            'data' => new SpecialiteResource($specialite),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Specialite $specialite)
    {
        $specialite->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
