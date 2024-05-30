<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Groupe;
use App\Http\Resources\Groupe\GroupeResource;
use App\Http\Resources\Groupe\GroupeCollection;
use App\Http\Requests\Groupe\StoreGroupe;
use App\Http\Requests\Groupe\UpdateGroupe;


class GroupeController extends Controller
{
    public function index()
    {
        $list = Groupe::all();
        return [
            'data' => new GroupeCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreGroupe $request)
    {
        $data = $request->validated();
        $groupe = Groupe::create($data);
        return [
            'data' => new GroupeResource($groupe),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(Groupe $groupe)
    {
        return [
            'data' => new GroupeResource($groupe),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateGroupe $request, Groupe $groupe)
    {
        $data = $request->validated();
        $groupe->update($data);
        return [
            'data' => new GroupeResource($groupe),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(Groupe $groupe)
    {
        $groupe->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
