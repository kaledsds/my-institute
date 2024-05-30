<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seances', function (Blueprint $table) {
            $table->id();
            $table->string('jour');
            $table->time('h_d');
            $table->time('h_f');
            $table->string('teacher');
            $table->string('matiere');
            $table->string('groupe');
            $table->foreignId('groupes_id')->constrained('groupes')->onDelete('cascade');
            $table->foreignId('matieres_id')->constrained('matieres')->onDelete('cascade');
            $table->foreignId('teacher_id')->constrained('teacher')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seances');
    }
};
