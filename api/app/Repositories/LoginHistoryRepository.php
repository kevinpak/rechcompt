<?php
namespace App\Repositories;

use App\Services\ResponseAPI;
use App\Services\LoginHistoryService;
use App\Interfaces\LoginHistoryRepositoryInterface;
use App\Models\LoginHistory;
use Illuminate\Support\Arr;

class LoginHistoryRepository implements LoginHistoryRepositoryInterface
{
    use ResponseAPI;

    protected $loginHistoryService;

    public function __construct(LoginHistoryService $loginHistoryService)
    {
        $this->loginHistoryService = $loginHistoryService;
    }

    public function getAllLoginHistory()
    {
        $arrayOfLoginHistory = LoginHistory::paginate(10)->toArray();

        $arrayOfLoginHistory = $this->loginHistoryService->addUserInformations($arrayOfLoginHistory);

        return $this->success($arrayOfLoginHistory);
    }

    public function getLoginHistoryById($id)
    {
        $loginHistory = LoginHistory::find($id);

        if(is_null($loginHistory)){
            return $this->error404('Login history');
        }

        $user = ['user' => $loginHistory->user()->get()->toArray()];

        return $this->success(Arr::collapse([$loginHistory->toArray(), $user]));
    }
}
