<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'fullname' => 'Admin',
            'email' => 'tadlasromy100@gmail.com',
            'password' => Hash::make('Admin123!'), 
            'role' => 'admin'
        ]);
    }
}
