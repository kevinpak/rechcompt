<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;

class ProcessUpdateBookmakerWithrawalStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The number of times the job may be attempted.
     *
     * @var int
     */
    public $tries = 3;

    protected $withdrawal_id;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($withdrawal_id)
    {
        $this->withdrawal_id = $withdrawal_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $api_url = config('withdrawal.api.set_status').$this->withdrawal_id.'/status';

        Http::put($api_url);
    }
}
