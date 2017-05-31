function submit()
{
    $.ajax(
    {
        type: 'POST',
        url: '/add',
        data:
        {
            text: $('#text').val()
        }
    })
}