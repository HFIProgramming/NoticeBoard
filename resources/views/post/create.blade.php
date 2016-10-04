
<form action="{{ url('post') }}" method="POST">
    {!! csrf_field() !!}
    <div class="form-group">
        <div class="form-group">
        <label>title</label>
        <input type="text" name="title" class="form-control" style="width: 300px;" required="required">
    </div>
        <div class="form-group">
    <label>tags</label>
    <input type="text" name="tags" class="form-control" style="width: 300px;" required="required">
        </div>
        <label>Content</label>
        <textarea name="content" id="newFormContent" class="form-control" rows="10" placeholder="Share?" required="required"></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-success col-lg-12">Submit</button>
</form>
</div>

