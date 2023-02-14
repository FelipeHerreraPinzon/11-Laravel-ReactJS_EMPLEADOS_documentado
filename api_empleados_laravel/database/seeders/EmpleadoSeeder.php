<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Empleado;

class EmpleadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $empleado1 = new Empleado();
        $empleado1->nombre = "FELIPE";
        $empleado1->correo = "felipe@mail.com";
        $empleado1->celular = 54321;
        $empleado1->save();

        $empleado2 = new Empleado();
        $empleado2->nombre = "PEDRO";
        $empleado2->correo = "pedro@mail.com";
        $empleado2->celular = 54321;
        $empleado2->save();

        $empleado3 = new Empleado();
        $empleado3->nombre = "JUAN";
        $empleado3->correo = "juan@mail.com";
        $empleado3->celular = 54321;
        $empleado3->save();
    }
}
