function addComment(name, comment) {
    let user = $('<p class="userName">');
    let edit = $('<button class="edit">Edit</button>');
    let del = $('<button class="delete">Delete</button>');
    let top = $('<div class="commentTop">');
    let pic = $('<img src="C:/Users/rubyg/Downloads/intro2web/finalfinal/avatar.jpg">');
    let com = $('<p class="comment">');
    let box = $('<div class="commentBox">');

    $(user).append(name);
    $(top).append(user, edit, del);
    
    $(com).append(comment);
    $(box).append(pic, top, com);

    $('#mainContent').prepend(box);
};


function editComment(box) {
    let originalBox = $(box).children();
    let originalCommentElement = originalBox[2];
    let originalComment = $(originalCommentElement).text();
    let inputEdit = $(`<input id="editCom" value="${originalComment}">`);
    let submitEdit = $('<button id="submitEdit">Submit</button>');
    $(box).append(inputEdit, submitEdit);
}


$('#submit').on('click', function() {
    let name = $('#inputName');
    let comment = $('#inputComment');
    addComment($(name).val(), $(comment).val());
        $(name).val('');
        $(comment).val('');
    }
);


$('#mainContent').on('click', '.edit', function(){
    parent = $(this).parent();
    grand = $(parent).parent();
    editComment(grand);
});


$('#mainContent').on('click', '#submitEdit', function(){
    let text = $('#editCom').val();
    let commentBoxChanged = $('#submitEdit').parent();
    let commentArray = $(commentBoxChanged).children();
    let commentChanging = commentArray[2];
    $(commentChanging).text(text);
    $('#editCom').remove();
    $('#submitEdit').remove();
})


$('#mainContent').on('click', '.delete', function() {
    let parent = $(this).parent().parent();
    $(parent).remove();
});