<div>
    <h2>
        <span class="badge {{ $requestMethodClass }}">
            {{ $operationName }}
        </span>
    </h2>
    <small>{!! $operationDescription !!}</small>
    <pre>
        <code class="language-js">
         {{ $httpCode }}
        </code>
    </pre>
</div>
