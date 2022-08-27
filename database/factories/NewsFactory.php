<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(5, true),
            'description' => $this->faker->paragraph(2, true),
            'category' => $this->faker->sentence(1, true),
            'author' => $this->faker->email,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
