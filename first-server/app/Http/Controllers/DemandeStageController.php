<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DemandeStage;
use App\Http\Resources\DemandeStage\DemandeStageResource;
use App\Http\Resources\DemandeStage\DemandeStageCollection;
use App\Http\Requests\DemandeStage\StoreDemandeStage;
use App\Http\Requests\DemandeStage\UpdateDemandeStage;

class DemandeStageController extends Controller
{
    public function index()
    {
        $list = DemandeStage::all();
        return [
            'data' => new DemandeStageCollection($list),
            'message' => 'Resource list',
        ];
    }

    public function store(StoreDemandeStage $request)
    {
        $data = $request->validated();
        $demandestage = DemandeStage::create($data);    
        return [
            'data' => new DemandeStageResource($demandestage),
            'message' => 'Resource has been created successfully',
        ];
    }

    public function show(DemandeStage $demandeStage)
    {
        return [
            'data' => new DemandeStageResource($demandeStage),
            'message' => 'Resource details',
        ];
    }

    public function update(UpdateDemandeStage $request,DemandeStage $demandestage)
    {
        $data = $request->validated();
        $demandestage->update($data);
        return [
            'data' => new DemandeStageResource($demandestage),
            'message' => 'Resource has been updated successfully',
        ];
    }

    public function destroy(DemandeStage $demandeStage)
    {
        $demandeStage->delete();
        return [
            'message' => 'Resource has been deleted successfully',
        ];
    }
}
