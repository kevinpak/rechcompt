<?php

namespace App\Interfaces;

interface LoginHistoryRepositoryInterface
{
    /**
     * Get all LoginHistory
     *
     * @method  GET $prefix/login-history
     * @access  public
     */
    public function getAllLoginHistory();

    /**
     * Get one User By ID
     *
     * @param   $id
     *
     * @method  GET $prefix/login-history/$id
     * @access  public
     */
    public function getLoginHistoryById($id);

}
