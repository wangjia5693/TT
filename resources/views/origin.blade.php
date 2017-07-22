<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Sunshine</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        {{--@foreach($modules as $module)--}}
            {{--@if($module->getStylesheet())--}}
                {{--@foreach($module->getStylesheet() as $stylesheet)--}}
                    {{--<link href="{{ $stylesheet }}" rel="stylesheet">--}}
                {{--@endforeach--}}
            {{--@endif--}}
        {{--@endforeach--}}
    </head>
    <body>
    <div id="app" >

    </div>
    <script>
        {{--window.modules = [--}}
            {{--@foreach($modules as $module)--}}
                {{--@foreach($module->getAlias() as $alias)--}}
                {{--"{{ $alias }}",--}}
                {{--@endforeach--}}
            {{--@endforeach--}}
        {{--];--}}
    </script>

    </body>
    {{--@foreach($modules as $module)--}}
        {{--@if($module->getScript())--}}
            {{--@foreach((array)$module->getScript() as $script)--}}
                {{--<script src="{{ $script }}"></script>--}}
            {{--@endforeach--}}
        {{--@endif--}}
    {{--@endforeach--}}
    <script src="{{mix('js/app.js')}}"></script>
</html>
