@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Lattest News</div>

                <div class="panel-body">
                    @foreach ($posts as $post)
                        <div class="row">
                            <div class="small-12 large-expand columns card end">
                            <h1 id="cards" class="headline"><a href="{{ url('post/'.$post->id) }}">
                                    {{ $post->title}}
                                </a></h1>
                                <h1 class="text-headline">author: {{ $post->getAuthor->name }}</h1>
                        <span class="text-caption">
                            <p>创建时间: {{$post->created_at}}</p>
                        </span>
                                <p class="text-body-1">
                                    {{$post->content}}
                                </p>
                            <span class="text-caption">
                            <p>累计回复:{{$post->hasManyComments->count()}}</p>
                        @if ($post->last_user != NULL)
                            <p>最后一次操作:{{$post->updated_at}}</p>
                            <p>用户:{{$post->getLast_user->name}}</p>
                            @endif
                        </span>
                                <p>
                            @foreach($post->tags as $tag)
                                    <a href="/tags/{{$tag->name}}" class="flat-button bottom-button">{{$tag->name}}</a>
                            @endforeach
                            <a href="#" class="link-icon"><i class="icon icon-more-vert icon-hc-lg float-right"></i></a>
                   </p>
                    </div>
                                @endforeach
                    </div>


                </div>

            </div>
        </div>
    </div>
</div>
@endsection
