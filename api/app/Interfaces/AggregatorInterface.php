<?php

namespace App\Interfaces;

interface AggregatorInterface
{

    /**
     * Verify a transaction using a transaction ID
     *
     * @param   $transactionId
     *
     * @access  public
     */
    public function verifyTransaction($transactionId);

    /**
     *
     * @access  public
     */
    public function getTransactionDetails();

}
