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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('birthday');
            $table->string('adress');
            $table->string('email');
            $table->string('specialite_id');
            $table->string('groupe_id');
            $table->string('phone');
            //$table->enum('niveau', ['1 CAP', '2 CAP', '1 BTP', '2 BTP', '1 BTS', '2 BTS']);
            $table->foreign("specialite_id")->references("id")->on("specialites")->onDelete("cascade");
            $table->foreign("groupe_id")->references("id")->on("groupes")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
