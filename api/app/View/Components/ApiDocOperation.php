<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ApiDocOperation extends Component
{

    public $requestMethod;

    public $operationName;

    public $operationDescription;

    public $httpCode;

    public $requestMethodClass;


    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($requestMethod, $operationName, $operationDescription = '', $httpCode)
    {
        $this->requestMethod = $requestMethod;
        $this->operationName = $operationName;
        $this->operationDescription = $operationDescription;
        $this->httpCode = $httpCode;
        $this->requestMethodClass = $this->getRequestMethodClass($requestMethod);
    }

    public function getRequestMethodClass($requestMethod){
        switch (strtolower($requestMethod)) {
            case 'get':
                return 'bg-info text-dark';
                break;

            case 'post':
                return 'bg-success';
                break;

            case 'update':
                return 'bg-warning text-dark';
                break;

            case 'delete':
                return 'bg-danger';
                break;

            default:
                return 'bg-info text-dark';
                break;
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.api-doc-operation');
    }
}
