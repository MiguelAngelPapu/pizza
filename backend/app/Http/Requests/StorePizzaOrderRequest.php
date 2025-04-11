<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePizzaOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; 
    }

    public function rules(): array
    {
        return [
            'localStorage' => ['required', 'array'],

            /**
             * Identificador único del producto o identificador generado para la pizza personalizada.
             * 
             * @default AS001
             * @example CUSTOM_3
             */
            'localStorage.*.id' => ['required', 'string'],
             /**
             * Precio del producto o pizza personalizada.
             * @example 75600
             */
            'localStorage.*.price' => ['required', 'numeric', 'min:0'],
             /**
             * Cantidad seleccionada por el usuario del producto
             * @example 1
             */
            'localStorage.*.amount' => ['required', 'integer', 'min:1'],
            /**
             * Tipo de producto, puede ser un producto normal o una pizza personalizada.
             * @example true
             */
            'localStorage.*.custom' => ['required', 'boolean'],
            
            /**
             * Tamaño de la pizza personalizada.
             * @example 3
             */
            'localStorage.*.size' => [
                'required_if:localStorage.*.custom,true',
                'integer',
            ],
            /**
             * Tipo de corteza de la pizza personalizada.
             * @example 5
             */
            'localStorage.*.crust' => [
                'required_if:localStorage.*.custom,true',
                'integer'
            ],
            /**
             * Estilo de la corteza de la pizza personalizada.
             * @example 5
             */
            'localStorage.*.topping' => [
                'required_if:localStorage.*.custom,true',
                'integer'
            ],

            // Validación para la mitad izquierda
            'localStorage.*.left-half' => [
                'required_if:localStorage.*.custom,true',
                'array'
            ],
            /**
             * Salsa de la pizza personalizada para la mitad izquierda.
             * @example 8
             */
            'localStorage.*.left-half.sauce' => [
                'required_if:localStorage.*.custom,true',
                'integer'
            ],
            /**
             * Ingredientes de la pizza personalizada para la mitad izquierda.
             * @example [2, 13, 11, 9, 8]
             */
            'localStorage.*.left-half.choose' => [
                'required_if:localStorage.*.custom,true',
                'array'
            ],
            'localStorage.*.left-half.choose.*' => ['integer'],
            // Validación para la mitad derecha
            'localStorage.*.right-half' => [
                'required_if:localStorage.*.custom,true',
                'array'
            ],
            /**
             * Salsa de la pizza personalizada para la mitad derecha.
             * @example 4
             */
            'localStorage.*.right-half.sauce' => [
                'required_if:localStorage.*.custom,true',
                'integer'
            ],
            /**
             * Ingredientes de la pizza personalizada para la mitad derecha.
             * @example [13, 6, 7, 12]
             */
            'localStorage.*.right-half.choose' => [
                'required_if:localStorage.*.custom,true',
                'array'
            ],
            'localStorage.*.right-half.choose.*' => ['integer'],
        ];
    }
}